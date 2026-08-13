"use client";

import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/config/site";
import { hotspots } from "@/data/hotspots";
import { HotspotInfo } from "@/components/HotspotInfo";
import type { Hotspot } from "@/types";

type ModelState = "waiting-component" | "loading" | "loaded" | "error";
type ArSupport = "unknown" | "supported" | "unsupported";

interface ModelViewerApi extends HTMLElement {
  readonly loaded?: boolean;
  readonly canActivateAR?: boolean;
  activateAR?: () => Promise<void>;
}

export function TurtleViewer() {
  const viewerRef = useRef<HTMLElement | null>(null);
  const [componentReady, setComponentReady] = useState(false);
  const [componentFailed, setComponentFailed] = useState(false);
  const [modelState, setModelState] = useState<ModelState>("waiting-component");
  const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(null);
  const [arSupport, setArSupport] = useState<ArSupport>("unknown");
  const [arMessage, setArMessage] = useState("");
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    let mounted = true;

    const prepareViewer = async () => {
      try {
        await import("@google/model-viewer");

        // Comprobación ligera y local: evita montar <model-viewer> contra un GLB
        // que todavía no existe y hace que el placeholder sea determinista.
        const modelResponse = await fetch(siteConfig.modelPath, {
          method: "HEAD",
          cache: "no-store",
        });

        if (!mounted) return;

        if (!modelResponse.ok) {
          setModelState("error");
          setArSupport("unsupported");
          return;
        }

        setComponentReady(true);
        setModelState("loading");
      } catch {
        if (mounted) {
          setComponentFailed(true);
          setModelState("error");
          setArSupport("unsupported");
        }
      }
    };

    void prepareViewer();

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => setReducedMotion(mediaQuery.matches);
    updateMotionPreference();
    mediaQuery.addEventListener("change", updateMotionPreference);

    return () => {
      mounted = false;
      mediaQuery.removeEventListener("change", updateMotionPreference);
    };
  }, []);

  useEffect(() => {
    if (!componentReady) return;

    const element = viewerRef.current;
    if (!element) return;

    const viewer = element as ModelViewerApi;

    const updateArSupport = () => {
      setArSupport(viewer.canActivateAR ? "supported" : "unsupported");
    };

    const handleLoad = () => {
      setModelState("loaded");
      setArMessage("");
      window.setTimeout(updateArSupport, 100);
    };

    const handleError = () => {
      setModelState("error");
      setArSupport("unsupported");
      setActiveHotspot(null);
    };

    element.addEventListener("load", handleLoad);
    element.addEventListener("error", handleError);

    // Evita perder el evento si el GLB terminó de cargar antes de registrar los listeners.
    if (viewer.loaded) {
      handleLoad();
    }

    return () => {
      element.removeEventListener("load", handleLoad);
      element.removeEventListener("error", handleError);
    };
  }, [componentReady]);

  const handleArClick = async () => {
    const viewer = viewerRef.current as ModelViewerApi | null;

    if (modelState !== "loaded" || !viewer) {
      setArMessage("La realidad aumentada estará disponible cuando se cargue el modelo 3D.");
      return;
    }

    if (!viewer.canActivateAR || !viewer.activateAR) {
      setArSupport("unsupported");
      setArMessage(
        "La realidad aumentada no está disponible en este dispositivo. Puedes seguir explorando la tortuga en 3D.",
      );
      return;
    }

    try {
      await viewer.activateAR();
    } catch {
      setArMessage(
        "No fue posible iniciar la realidad aumentada. Puedes continuar explorando la tortuga en 3D.",
      );
    }
  };

  const isModelAvailable = modelState === "loaded";
  const isArDisabled = !isModelAvailable || arSupport !== "supported";

  return (
    <section id="explorar" className="viewer-section section-anchor" aria-labelledby="viewer-title">
      <div className="shell">
        <div className="section-heading">
          <p className="eyebrow">Exploración 3D</p>
          <h2 id="viewer-title">Conoce la tortuga de cerca</h2>
          <p>Cuando el modelo esté disponible podrás rotarlo, acercarlo y tocar sus puntos interactivos.</p>
        </div>

        <div className="viewer-card">
          <div className="viewer-stage">
            {componentReady && (
              <model-viewer
                ref={viewerRef}
                src={siteConfig.modelPath}
                poster={siteConfig.posterPath}
                alt={`Modelo 3D interactivo de ${siteConfig.speciesName}`}
                ar
                ar-modes="webxr scene-viewer quick-look"
                camera-controls autoplay
                auto-rotate={!reducedMotion}
                auto-rotate-delay="2500"
                rotation-per-second="18deg"
                loading="eager"
                reveal="auto"
                shadow-intensity="0.7"
                tone-mapping="neutral"
                exposure="1"
                interaction-prompt="auto"
                className="model-viewer"
              >
                {hotspots.map((hotspot) => (
                  <button
                    key={hotspot.id}
                    type="button"
                    className={`hotspot-button ${activeHotspot?.id === hotspot.id ? "is-active" : ""}`}
                    slot={`hotspot-${hotspot.id}`}
                    data-position={hotspot.position}
                    data-normal={hotspot.normal}
                    aria-label={hotspot.ariaLabel}
                    onClick={() =>
                      setActiveHotspot((current) => (current?.id === hotspot.id ? null : hotspot))
                    }
                  >
                    <span aria-hidden="true">+</span>
                  </button>
                ))}
              </model-viewer>
            )}

            {(modelState === "waiting-component" || modelState === "loading") && !componentFailed && (
              <div className="viewer-overlay loading-overlay" role="status" aria-live="polite">
                <span className="loader" aria-hidden="true" />
                <strong>Cargando modelo 3D...</strong>
                <span>Preparando la experiencia interactiva.</span>
              </div>
            )}

            {modelState === "error" && (
              <div className="viewer-overlay placeholder-overlay" role="status" aria-live="polite">
                <span className="placeholder-icon" aria-hidden="true">🐢</span>
                <strong>Modelo 3D pendiente</strong>
                <p>
                  El modelo de la tortuga carey se añadirá próximamente. Puedes continuar explorando la información educativa y el quiz.
                </p>
              </div>
            )}
          </div>

          {activeHotspot && isModelAvailable && (
            <HotspotInfo hotspot={activeHotspot} onClose={() => setActiveHotspot(null)} />
          )}

          <div className="viewer-controls">
            <p className="viewer-instruction">
              <span aria-hidden="true">☝️</span> Arrastra para explorar · Pellizca para acercar
            </p>
            <button
              type="button"
              className="button button-ar"
              onClick={handleArClick}
              disabled={isArDisabled}
              aria-describedby="ar-status-message"
            >
              <span aria-hidden="true">📱</span> Ver tortuga en AR
            </button>
          </div>

          <div id="ar-status-message" className="status-message" aria-live="polite">
            {!isModelAvailable && (
              <p>La realidad aumentada estará disponible cuando se cargue el modelo 3D.</p>
            )}
            {isModelAvailable && arSupport === "unknown" && <p>Comprobando compatibilidad con AR…</p>}
            {isModelAvailable && arSupport === "unsupported" && (
              <p>
                La realidad aumentada no está disponible en este dispositivo. Puedes seguir explorando la tortuga en 3D.
              </p>
            )}
            {arMessage && <p>{arMessage}</p>}
          </div>
        </div>
      </div>
    </section>
  );
}