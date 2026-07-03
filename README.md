# Catálogo de fotos — Yanela Hernández

Landing page / portfolio fotográfico para [@yanela_her.ph](https://www.instagram.com/yanela_her.ph/).

## Stack

- **Next.js 15** (App Router)
- **TypeScript**
- Deploy en **[Vercel](https://vercel.com)**

Documentación del proyecto: [Plan.md](./Plan.md) · [DESIGN.md](./DESIGN.md)

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Deploy en Vercel

1. Sube el repo a GitHub.
2. Importa el proyecto en [vercel.com/new](https://vercel.com/new).
3. Vercel detecta Next.js automáticamente.
4. Cada push a `main` despliega producción.

## i18n

- Idioma por defecto: **ruso**
- Selector: RU · EN · ES (persistido en `localStorage`)
- Traducciones en `src/locales/`

## Pendiente de contenido

- [ ] Número de Viber (`src/lib/i18n.ts`)
- [ ] Precios reales por tipo de sesión
- [ ] Fotos en galería
- [ ] Fotogramas en `public/frames/`
- [ ] Foto de perfil en `#sobre-mi`
