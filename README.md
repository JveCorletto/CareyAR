# CareyAR — Explora la Tortuga Carey

CareyAR es una aplicación web educativa, Mobile First y frontend-only para una exposición escolar sobre la tortuga carey (*Eretmochelys imbricata*).

La aplicación permite consultar información educativa, explorar un modelo 3D cuando esté disponible, utilizar hotspots anatómicos, intentar abrir realidad aumentada en dispositivos compatibles y completar un mini quiz.

El proyecto está preparado para funcionar **aunque todavía no exista el archivo GLB**. En ese estado muestra un placeholder y mantiene disponible todo el contenido educativo y el quiz.

## Tecnologías

- Next.js con App Router
- React
- TypeScript
- `@google/model-viewer`
- CSS tradicional
- npm
- Vercel

No utiliza backend, base de datos, autenticación, state managers, Three.js directo ni servicios externos obligatorios.

## Requisitos

- Node.js 20.9 o superior
- npm

## Instalación

```bash
npm install
npm run dev
```

Abre `http://localhost:3000`.

## Build de producción

```bash
npm run build
```

Opcionalmente puedes verificar TypeScript con:

```bash
npm run typecheck
```

## Modelo 3D

El modelo real debe colocarse en:

```text
public/models/tortuga-carey.glb
```

La ruta pública usada por la aplicación es:

```text
/models/tortuga-carey.glb
```

No es necesario cambiar código al añadir el archivo.

Mientras el GLB no exista o falle durante la carga, el visor mostrará:

**Modelo 3D pendiente**

El resto de la web seguirá funcionando normalmente.

### Recomendaciones para el modelo

- Preferir GLB/glTF 2.0.
- Objetivo de peso: ≤ 5 MB.
- Revisar especialmente cualquier modelo que supere 10 MB.
- Reducir geometría y texturas antes de introducir compresiones más complejas.
- Verificar escala, orientación y origen antes de AR.
- Confirmar licencia y atribución.

## Poster opcional

Puedes añadir:

```text
public/images/turtle-poster.webp
```

Si no existe, el área del visor mantiene un fondo CSS y no rompe el layout.

## Hotspots

Los hotspots están centralizados en:

```text
src/data/hotspots.ts
```

Incluyen:

- Caparazón
- Pico
- Aletas

Los campos `position` y `normal` incluidos actualmente son **coordenadas placeholder**. Deben ajustarse después de colocar y congelar el modelo definitivo.

Ejemplo de estructura:

```ts
{
  id: "caparazon",
  title: "Caparazón",
  description: "...",
  position: "0m 0.18m 0m",
  normal: "0m 1m 0m",
  ariaLabel: "Información sobre el caparazón"
}
```

No asumas que esas coordenadas coinciden con el modelo real.

## Información educativa

Se encuentra en:

```text
src/data/educationalContent.ts
```

Las secciones son:

1. Hábitat
2. Alimentación
3. Características
4. Amenazas
5. Conservación

Para actualizar contenido científico, modifica ese archivo en lugar de hardcodear textos dentro de los componentes.

## Quiz

Las cuatro preguntas están centralizadas en:

```text
src/data/quiz.ts
```

Cada pregunta contiene:

- `id`
- `question`
- `options`
- `correctAnswer`
- `explanation`

El puntaje existe únicamente en el estado local de React. No se utiliza `localStorage`, cookies, backend ni persistencia.

## Fuentes científicas

Las fuentes visibles se encuentran en:

```text
src/data/sources.ts
```

Actualmente se incluyen las organizaciones indicadas en la especificación:

- NOAA Fisheries
- IUCN Red List
- CITES
- Smithsonian Ocean
- WWF

## Créditos del modelo

Los placeholders de créditos se editan en:

```text
src/config/site.ts
```

Busca:

```ts
modelCredit: {
  name: "[Agregar nombre del modelo]",
  author: "[Agregar autor]",
  license: "[Agregar licencia]",
  sourceUrl: "[Agregar URL de origen]"
}
```

No reemplaces estos valores hasta comprobar la autoría y licencia reales.

## Realidad aumentada

`TurtleViewer.tsx` configura `<model-viewer>` con:

```text
ar
ar-modes="webxr scene-viewer quick-look"
```

La AR es una mejora progresiva:

- Si no existe el GLB, el botón AR permanece deshabilitado.
- Si el GLB carga pero el dispositivo no puede activar AR, se informa al usuario y el visor 3D continúa disponible.
- Si AR falla al iniciarse, la página no se bloquea.

La compatibilidad depende del dispositivo, navegador y mecanismos disponibles, por ejemplo WebXR, Scene Viewer o Quick Look.

## Añadir USDZ para iPhone posteriormente

El proyecto no requiere USDZ para compilar ni desplegar.

Si las pruebas con la conversión automática a Quick Look muestran problemas, añade:

```text
public/models/tortuga-carey.usdz
```

Después, en `src/components/TurtleViewer.tsx`, agrega al `<model-viewer>`:

```tsx
ios-src="/models/tortuga-carey.usdz"
```

Haz esto solo cuando el archivo exista y haya sido probado en un iPhone/iPad real.

## Configuración general

Los valores centrales están en:

```text
src/config/site.ts
```

Incluye:

- Nombre del proyecto
- Tagline
- Nombre común
- Nombre científico
- Descripción
- Ruta GLB
- Ruta poster
- Ruta USDZ futura
- URL pública futura
- Créditos del modelo

## Despliegue en Vercel

1. Crea un repositorio Git.
2. Sube el proyecto a GitHub.
3. Inicia sesión en Vercel.
4. Importa el repositorio.
5. Vercel detectará Next.js.
6. Ejecutará `npm install` y `npm run build`.
7. Publica el Production Deployment.
8. Comprueba la URL HTTPS desde un teléfono real.

No se necesitan:

- Docker
- Backend
- Variables de entorno obligatorias
- Servidores externos
- Configuración especial de Vercel

## Código QR

Después de tener el Production Deployment:

1. Copia la URL pública estable de producción.
2. Genera un QR con esa URL.
3. Exporta preferentemente SVG para impresión y PNG como respaldo.
4. No utilices una URL de Preview Deployment.
5. Prueba el QR con Android.
6. Prueba el QR con iPhone.
7. Prueba el acceso con datos móviles antes de la exposición.

## Compatibilidad AR

La visualización 3D y la realidad aumentada tienen niveles de compatibilidad diferentes.

El visor 3D es el fallback principal y debe seguir funcionando aunque AR no esté disponible.

Prueba físicamente como mínimo:

- Android + Chrome
- iPhone + Safari
- Un dispositivo sin AR o con AR no disponible

## Estructura principal

```text
careyar/
├── public/
│   ├── models/
│   │   └── README.md
│   └── images/
│       └── README.md
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── HeroSection.tsx
│   │   ├── TurtleViewer.tsx
│   │   ├── HotspotInfo.tsx
│   │   ├── InfoSection.tsx
│   │   ├── Quiz.tsx
│   │   ├── Credits.tsx
│   │   └── Footer.tsx
│   ├── config/
│   │   └── site.ts
│   ├── data/
│   │   ├── educationalContent.ts
│   │   ├── hotspots.ts
│   │   ├── quiz.ts
│   │   └── sources.ts
│   └── types/
│       ├── index.ts
│       └── model-viewer.d.ts
├── .gitignore
├── next-env.d.ts
├── next.config.ts
├── package.json
├── README.md
└── tsconfig.json
```
