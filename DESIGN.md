# Design system — Catálogo Yanela

**Estado:** v0 provisional  
**Referencia:** [Plan.md](./Plan.md)

## Dirección estética

- **Tono:** Minimalista claro, editorial, femenino sin clichés (no rosa genérico).
- **Base:** Mucho blanco/off-white, tipografía elegante, fotos protagonistas.
- **Acento:** Motion (parallax/frames) en zona superior del scroll.

## Paleta (tokens CSS)

| Token | Valor provisional | Uso |
|-------|-------------------|-----|
| `--color-bg` | `#f8f6f3` | Fondo general |
| `--color-surface` | `#ffffff` | Tarjetas, header |
| `--color-text` | `#1c1917` | Texto principal |
| `--color-text-muted` | `#78716c` | Subtítulos, meta |
| `--color-accent` | `#9a3412` | CTAs, links activos (terracota) |
| `--color-accent-soft` | `#fef3c7` | Hover suave |
| `--color-border` | `#e7e5e4` | Bordes, separadores |

> Cambiar solo en `:root` de `globals.css` cuando haya fotos/paleta final.

## Tipografía

| Rol | Fuente | Pesos |
|-----|--------|-------|
| Display | Cormorant Garamond | 400, 500, 600 |
| Body | Outfit | 300, 400, 500 |

## Componentes

- **Header:** sticky, blur, nav anclas, RU|EN|ES, IG + Viber.
- **Parallax zone:** capas scroll-driven; frames en `public/frames/`.
- **Portfolio:** tabs por categoría; lightbox full-screen.
- **Servicios:** tarjetas con precio visible.
- **FAQ:** acordeón nativo `<details>`.

## Motion

- `prefers-reduced-motion: reduce` → sin parallax, frame estático.
- Mobile: parallax atenuado.

## Changelog

| Fecha | Cambio |
|-------|--------|
| 2026-06 | v0 — tokens provisionales, Next.js scaffold |
