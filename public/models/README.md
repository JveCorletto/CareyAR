# Modelos 3D de CareyAR

Coloca aquí el modelo definitivo con este nombre exacto:

`public/models/tortuga-carey.glb`

La aplicación ya está configurada para cargarlo automáticamente desde:

`/models/tortuga-carey.glb`

Mientras el archivo no exista o no pueda cargarse, CareyAR mostrará el placeholder **“Modelo 3D pendiente”** y mantendrá disponibles las secciones educativas y el quiz.

## USDZ opcional para iPhone/iPad

Si después de probar la conversión automática de `<model-viewer>` necesitas un archivo USDZ específico para Quick Look, colócalo como:

`public/models/tortuga-carey.usdz`

El USDZ no es obligatorio en la versión inicial. Si decides utilizarlo, añade `ios-src="/models/tortuga-carey.usdz"` al elemento `<model-viewer>` dentro de `src/components/TurtleViewer.tsx`.

## Antes de usar el modelo final

- Confirma la licencia.
- Guarda el nombre y autor del modelo.
- Verifica que la licencia permita el uso educativo y las modificaciones necesarias.
- Optimiza geometría y texturas para teléfonos.
- Ajusta escala y origen para AR.
- Calibra los hotspots de `src/data/hotspots.ts` después de congelar el modelo definitivo.
