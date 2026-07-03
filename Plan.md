# Plan — Landing page / catálogo de fotos (Yanela)

**Proyecto:** Catálogo digital para Yanela Hernández Rodríguez  
**Referencia:** [@yanela_her.ph](https://www.instagram.com/yanela_her.ph/)  
**Ubicación:** Bielorrusia  
**Documento base:** [INVESTIGACION-catalogo-fotos-digitales.md](./INVESTIGACION-catalogo-fotos-digitales.md)  
**Estado:** Refinado — decisiones clave cerradas  
**Última actualización:** Junio 2026

---

## 1. Objetivo del proyecto

Construir una **landing page de una sola página** que funcione como catálogo/portfolio público de Yanela. El visitante debe poder:

1. Entender en segundos **qué tipos de sesión ofrece** y cuál es su estilo.
2. **Ver una selección curada** de su trabajo, **organizada por tipo de sesión** (priorizando retratos individuales femeninos).
3. **Contactar o reservar** vía **Instagram** o **Viber** con un solo clic.

**Fuera de alcance (fase 1):**
- Galerías privadas de entrega a clientes.
- Tienda de impresiones.
- Blog o CMS.
- Sitio multipágina con SEO por ciudad/nicho.

---

## 2. Decisiones cerradas

| Decisión | Elección | Estado |
|----------|----------|--------|
| Formato | Landing page (1 página, secciones ancladas) | ✅ |
| Objetivo principal | Generar consultas / reservas | ✅ |
| Oferta fotográfica | Varios tipos de sesión; **priorizados**, no un solo nicho exclusivo | ✅ |
| Tráfico esperado | Instagram bio → web | ✅ |
| CTA principal | **Instagram DM** + **Viber** (no WhatsApp) | ✅ |
| Precios | **Visibles** en la sección servicios | ✅ |
| Tono visual | **Minimalista claro** + acento visual con motion | ✅ |
| Efecto parallax | **Scroll-driven**, puede atravesar varias secciones (no solo `#hero`) | ✅ |
| Assets de motion | Secuencia de fotogramas preparada **fuera del repo** (herramientas externas) | ✅ |
| Portfolio | **Galería con categorías** ordenadas por prioridad | ✅ |
| Idioma por defecto | **Ruso (RU)** | ✅ |
| Idiomas disponibles | Ruso · Inglés · Español (selector en header) | ✅ |
| Stack técnico | **Astro** + deploy en **Vercel** | ✅ |

> **Contexto Bielorrusia:** WhatsApp no es el canal habitual. Instagram ya existe (@yanela_her.ph); Viber es el complemento natural para contacto directo.

### 2.1 Oferta y priorización de servicios

Yanela trabaja con **varios tipos de sesión**. El sitio **no debe presentar un único servicio como exclusivo**; debe mostrar el abanico completo, **ordenado por prioridad** (más arriba = más protagonismo en copy, galería y servicios).

| Prioridad | Tipo de sesión | Tratamiento en el sitio |
|-----------|----------------|-------------------------|
| 1 | **Retratos individuales para mujeres** | Primero en filtros, más fotos en galería MVP, primera tarjeta en servicios |
| 2 | **Parejas** | Segundo en orden; galería y tarjeta propias |
| 3 | **Corporativo** | Tercero en orden |
| 4 | **Eventos** | Cuarto en orden |
| — | **Niños / familias con niños** | **Fuera de oferta** — no incluir en catálogo, filtros ni tarjetas de servicio |

**Principios de copy y UX:**
- Hero y titular: **marca personal y estilo**, no “solo retratos femeninos”.
- Subtítulo o línea secundaria: puede mencionar el foco principal sin excluir el resto (ej. *«Retratos, parejas, eventos y más»*).
- `#servicios` y `#portfolio` comparten el **mismo orden de categorías**.
- No destacar explícitamente un solo servicio en nav ni en mensajes de error/empty states.
- Sesiones con niños: **no promocionar**. Si hace falta aclarar, una línea en FAQ (TBD con Yanela), no un bloque visible en home.

---

## 3. Estructura de la landing page

```
┌──────────────────────────────────────────────────────────┐
│  HEADER (sticky)                                         │
│  Logo · Nav · [RU | EN | ES] · [Instagram / Viber]       │
├──────────────────────────────────────────────────────────┤
│  #hero        Copy + CTA (inicio del recorrido visual)   │
│  … scroll …   Capas parallax / secuencia de frames       │
│  #portfolio   Galería por categoría (orden priorizado)   │
│  #servicios   Tipos de sesión + precios visibles         │
│  #proceso     Cómo funciona (3 pasos)                    │
│  #sobre-mi    Yanela + foto + Instagram                  │
│  #testimonios Opiniones (omitir en v1 si no hay)         │
│  #faq         Preguntas frecuentes                       │
│  #contacto    CTA final — Instagram + Viber              │
├──────────────────────────────────────────────────────────┤
│  FOOTER — Instagram · Viber · ©                          │
└──────────────────────────────────────────────────────────┘
```

### 3.1 Detalle por sección

#### `#hero` y capas de motion (parallax)

El acento visual **no vive solo en `#hero`**: el parallax y/o la secuencia de fotogramas pueden **continuar mientras el usuario hace scroll** por la parte superior de la página (hero → transición hacia portfolio), creando profundidad sin encerrar el efecto en una única sección.

| Elemento | Contenido | Notas |
|----------|-----------|-------|
| `#hero` | Titular, subtítulo, CTAs | Copy + conversión; el motion es capa aparte |
| Capas parallax | Imágenes/frames a distintas velocidades | Pueden superponerse al hero y extenderse al scroll siguiente |
| Secuencia de frames | Fotogramas exportados **externamente** | El sitio solo **consume** los assets ya optimizados |
| Efecto | Scroll-driven: parallax + cambio de frame según posición | No autoplay de video embebido |
| Titular | Marca personal / beneficio emocional | Genérico al estilo — copy TBD |
| Subtítulo | Tipos de sesión + ubicación | Orden priorizado, tono inclusivo |
| CTA primario | Instagram | Enlace al perfil o DM |
| CTA secundario | Viber | Mismo peso visual |
| Fallback | Primer fotograma estático | `prefers-reduced-motion` o conexión lenta |
| Copy | RU / EN / ES | Ver § 4.5 |

**Flujo de assets (fuera del código del sitio):**

```
Video corto (5–15 s) — grabado/planificado aparte
        ↓
Herramienta externa → exportar N fotogramas (12–24)
        ↓
Optimizar peso (WebP/JPEG) — Squoosh, TinyPNG, etc.
        ↓
Copiar a public/frames/ (o similar) en el repo
        ↓
El sitio referencia las imágenes; no genera frames en build
```

**Herramientas sugeridas para extraer fotogramas** (elige una; no va en el código):

| Herramienta | Tipo | Notas |
|-------------|------|-------|
| **ffmpeg** (CLI) | Gratis, local | `ffmpeg -i video.mp4 -vf "select=..." frames/frame_%03d.webp` — manual |
| **DaVinci Resolve** | Gratis / desktop | Export → imagen secuencia |
| **Adobe Premiere / AE** | De pago | Export PNG/JPEG sequence |
| **Kapwing** / **Ezgif** | Web | Útil si no quieres instalar nada |
| **HandBrake** + ffmpeg | Gratis | Extraer y luego convertir frames |

**Optimización post-exporte:** [Squoosh](https://squoosh.app), TinyPNG, o ImageOptim antes de subir al repo.

**Ventajas de frames preparados fuera del repo:**
- El build de Vercel no depende de ffmpeg ni de procesar video.
- Yanela o un editor puede preparar la secuencia sin tocar código.
- Control total de calidad/peso antes de publicar.

**Implementación en el sitio (solo consumo):**
- Scroll listener o **Scroll-driven animations** (CSS) / GSAP ScrollTrigger (isla Astro).
- Mapear progreso de scroll → índice de frame + offsets parallax por capa.
- Mobile: menos capas, parallax suavizado o desactivado.

**Pendiente:** Video + export de frames (tarea de contenido, no de desarrollo). Placeholder: grid neutro simulando secuencia.

---

#### `#portfolio`
| Elemento | Contenido | Notas |
|----------|-----------|-------|
| Enfoque | **Varias categorías**, ordenadas por prioridad | Ver tabla § 2.1 |
| Categorías | 1) Mujeres · 2) Parejas · 3) Corporativo · 4) Eventos | Tabs o filtros; **sin** categoría niños |
| Vista por defecto | **Retratos individuales femeninos** | Primera pestaña activa al cargar |
| Layout | Grid uniforme o masonry | Masonry si predominan verticales 4:5 |
| Cantidad MVP | ~12–20 fotos total, repartidas por categoría | Más peso en categoría 1 |
| Interacción | Lightbox (swipe móvil, teclado desktop) | Ver DESIGN.md |
| Placeholders | Bloques por categoría con ratio 3:4 o 4:5 | Hasta recibir fotos reales |
| Empty state | Mensaje neutro si una categoría aún no tiene fotos | Sin romper el orden de tabs |

**Distribución sugerida MVP (ajustable cuando haya fotos):**

| Categoría | Fotos aprox. |
|-----------|--------------|
| Individuales (mujeres) | 6–10 |
| Parejas | 3–5 |
| Corporativo | 2–4 |
| Eventos | 2–4 |

---

#### `#servicios`
| Elemento | Contenido | Notas |
|----------|-----------|-------|
| Formato | **Una tarjeta por tipo de sesión** (4 categorías) | Mismo orden que § 2.1 y `#portfolio` |
| Detalle | Nombre, precio visible, qué incluye, plazo | Pre-califica leads |
| Prioridad visual | Tarjeta 1 (mujeres) ligeramente más prominente | Tamaño, orden o tipografía — sutil, no exclusivo |
| Moneda | TBD (BYN / USD / EUR) | Definir con Yanela |
| CTA | Por tarjeta → `#contacto` | "Reservar" / "Escribir" |
| Excluido | Sesiones con niños | No listar como servicio |

**Pendiente de Yanela:** precios e inclusiones por **tipo de sesión** (no solo por “paquetes” genéricos).

Ejemplo de estructura (placeholder):

| Tipo (orden) | Precio desde | Incluye (ejemplo) |
|--------------|--------------|-------------------|
| Individuales (mujeres) | XXX BYN | X fotos editadas, X h, … |
| Parejas | XXX BYN | … |
| Corporativo | XXX BYN | … |
| Eventos | XXX BYN | … |

*Opcional en fase posterior:* sub-paquetes dentro de un tipo (ej. mini / estándar / premium solo para retratos femeninos).

---

#### `#proceso`
| Elemento | Contenido | Notas |
|----------|-----------|-------|
| Pasos | 3–4, numerados | Ej: Escribes → Sesión → Entrega |
| Estilo | Minimal: número grande + 1 línea | Coherente con tono claro |

**Pendiente de Yanela:** flujo real y plazos de entrega.

---

#### `#sobre-mi`
| Elemento | Contenido | Notas |
|----------|-----------|-------|
| Foto | Retrato de Yanela | Placeholder hasta tenerla |
| Texto | 2–3 párrafos | Estilo personal, tipos de sesión que disfruta, Bielorrusia |
| Enlace | @yanela_her.ph | Botón Instagram |

---

#### `#testimonios`
| Elemento | Contenido | Notas |
|----------|-----------|-------|
| Decisión v1 | **Omitir sección** hasta tener citas reales | Evitar bloque vacío |
| Formato futuro | 2–4 citas con nombre | Insertar cuando existan |

---

#### `#faq`
| Elemento | Contenido | Notas |
|----------|-----------|-------|
| Cantidad | 4–6 preguntas | Acordeón |
| Temas | Precio, plazos, qué llevar, locación, edición, reserva, tipos de sesión | Opcional: aclarar si no realiza sesiones con niños (solo si Yanela quiere) |

**Pendiente de Yanela:** respuestas en su voz.

---

#### `#contacto`
| Elemento | Contenido | Notas |
|----------|-----------|-------|
| CTA final | Mismos canales que header | Consistencia |
| Instagram | Link a @yanela_her.ph | Botón principal |
| Viber | Deep link `viber://chat?number=…` | **Pendiente:** número de Yanela |
| Formulario | No en v1 | Instagram + Viber suficientes para MVP |

---

## 4. Dirección visual

### 4.1 Minimalista claro + acento en hero

| Capa | Tratamiento |
|------|-------------|
| **Base** | Fondo claro (blanco / off-white), mucho aire, tipografía sobria |
| **Texto** | Negro suave o gris oscuro; jerarquía clara |
| **Acento** | 1 color de marca (TBD en DESIGN.md) — botones, links, detalles |
| **Fotos** | Protagonistas; sin marcos pesados ni overlays que compitan |
| **Motion** | Parallax / frames en zona superior de la página; el resto minimal |

**Principio:** La UI base respira en silencio; el motion (parallax + frames) aporta el acento visual **a lo largo del scroll inicial**, no necesariamente encerrado en un solo bloque.

### 4.2 Diseño flexible (sin fotos aún)

1. **Tokens CSS** para paleta — cambiar en un solo lugar cuando tengamos fotos finales.
2. **Placeholders** con `aspect-ratio` real para evitar saltos de layout.
3. **Placeholder de motion:** grid de celdas simulando frames hasta tener assets exportados.

```css
:root {
  --color-bg: #fafafa;           /* provisional */
  --color-surface: #ffffff;
  --color-text: #1a1a1a;
  --color-text-muted: #6b6b6b;
  --color-accent: TBD;           /* definir en DESIGN.md */
  --font-display: TBD;
  --font-body: TBD;
  --space-section: clamp(4rem, 10vw, 8rem);
}
```

### 4.3 Parallax y scroll-driven motion

| Criterio | Enfoque |
|----------|---------|
| Alcance | Puede cruzar **hero + zona de transición** hacia portfolio; no limitado a `#hero` |
| Capas | 2–3 capas con distinta velocidad (frames, fondo, texto) |
| Performance | Frames WebP pre-exportados; lazy load; LCP = primer frame |
| Accesibilidad | `prefers-reduced-motion: reduce` → frame estático, sin parallax |
| Mobile | Menos capas/frames; parallax suavizado o off |
| Peso assets | Objetivo < 500 KB secuencia completa (comprimida **antes** de subir al repo) |
| Fallback | `<img>` del frame 1 si JS deshabilitado |
| Build | **Sin** ffmpeg ni pipeline de video en el repositorio |

### 4.4 Internacionalización (i18n)

El sitio se muestra **en ruso por defecto** y permite cambiar a **inglés** o **español** sin recargar la página (preferible) o con rutas por idioma (alternativa).

| Aspecto | Decisión |
|---------|----------|
| Idioma por defecto | **Ruso (`ru`)** — audiencia local en Bielorrusia |
| Idiomas soportados | `ru` · `en` · `es` |
| Selector | Header sticky: **RU \| EN \| ES** (compacto en móvil) |
| Persistencia | `localStorage` + respetar elección en visitas siguientes |
| Detección inicial | Ruso por defecto; opcionalmente `navigator.language` solo si coincide con `en` o `es` (nunca forzar EN/ES sobre elección guardada) |
| Contenido traducido | Nav, hero, servicios, proceso, sobre mí, FAQ, contacto, footer, CTAs, meta SEO |
| Contenido no traducido | Fotos, video/frames del hero, handle Instagram, número Viber |
| Precios | Misma cifra en los 3 idiomas; moneda y formato numérico consistentes |
| SEO | `<html lang="ru">` por defecto; actualizar `lang` al cambiar idioma; meta title/description por locale |
| Accesibilidad | `aria-label` del selector en idioma activo; anunciar cambio a lectores de pantalla |

**Estructura de archivos de traducción (propuesta):**

```
locales/
├── ru.json    ← fuente principal / idioma por defecto
├── en.json
└── es.json
```

**Qué traducir en cada locale:**

| Clave / bloque | RU | EN | ES |
|----------------|----|----|-----|
| Nav (Portfolio, Servicios, …) | ✅ | ✅ | ✅ |
| Hero (titular, subtítulo, CTAs) | ✅ | ✅ | ✅ |
| Filtros / categorías portfolio | ✅ | ✅ | ✅ |
| Tarjetas de servicios (por tipo) | ✅ | ✅ | ✅ |
| Pasos del proceso | ✅ | ✅ | ✅ |
| Sobre mí | ✅ | ✅ | ✅ |
| FAQ (preguntas + respuestas) | ✅ | ✅ | ✅ |
| Botones Instagram / Viber | ✅ | ✅ | ✅ |
| Footer y textos legales mínimos | ✅ | ✅ | ✅ |

**Implementación técnica (borrador):**

```
Carga inicial → locale = localStorage ?? 'ru'
        ↓
Aplicar strings a nodos con data-i18n="hero.title"
        ↓
Click RU | EN | ES → swap strings + guardar preferencia + actualizar <html lang>
        ↓
Sin recarga completa (JS) o rutas /en /es (Astro i18n) — decidir en DESIGN.md
```

**Notas de copy:**
- El ruso es la **fuente de verdad** para textos; EN y ES son traducciones revisadas (idealmente validadas por Yanela).
- Nombres propios (Yanela, @yanela_her.ph) no se traducen.
- Ejemplo titular hero (placeholder hasta copy final):

| Locale | Ejemplo (titular — estilo personal) |
|--------|-------------------------------------|
| RU | *«Твоя сессия. Твоя история. Твой свет.»* |
| EN | *"Your session. Your story. Your light."* |
| ES | *«Tu sesión. Tu historia. Tu luz.»* |

| Locale | Ejemplo (subtítulo — tipos de sesión, orden priorizado) |
|--------|--------------------------------------------------------|
| RU | *«Индивидуальные портреты, пары, корпоратив и мероприятия · Беларусь»* |
| EN | *"Individual portraits, couples, corporate & events · Belarus"* |
| ES | *«Retratos individuales, parejas, corporativo y eventos · Bielorrusia»* |

---

## 5. DESIGN.md — documento a crear

Crear **`DESIGN.md`** antes de implementar la UI. Contenido mínimo:

| Sección | Valor inicial |
|---------|---------------|
| **Dirección estética** | Minimalista claro + scroll-driven parallax / frames |
| **Paleta** | Neutros claros + 1 acento TBD |
| **Tipografía** | Display elegante + body legible (TBD) |
| **Parallax / motion** | Capas, tramo de scroll, N frames, mobile, reduced-motion |
| **Componentes** | Botones IG/Viber, **tabs/filtros portfolio**, tarjetas servicio por tipo, acordeón FAQ, lightbox, selector RU/EN/ES |
| **i18n** | Comportamiento del switcher, estados activo/inactivo, mobile |
| **Imágenes** | Ratio retrato 3:4 / 4:5 predominante |
| **Motion** | Reglas parallax + reduced-motion |
| **Changelog** | v0 provisional → v1 tras fotos/paleta final |

**Flujo:**

```
Plan.md ✅  →  DESIGN.md (siguiente)  →  Implementación
```

---

## 6. Contenido pendiente

### Confirmado ✅
- [x] Oferta: individuales (mujeres) → parejas → corporativo → eventos; **sin niños**
- [x] Priorización por orden, no mensaje de un solo servicio exclusivo
- [x] Ubicación: Bielorrusia
- [x] CTA: Instagram + Viber (no WhatsApp)
- [x] Precios visibles en web (por tipo de sesión)
- [x] Tono: minimal claro + hero parallax
- [x] Portfolio con categorías/filtros en orden de prioridad
- [x] Idioma por defecto: ruso; selector EN / ES

### Pendiente de Yanela
- [ ] Copy en ruso (fuente) + revisión traducciones EN y ES
- [ ] Precios e inclusiones por tipo: mujeres, parejas, corporativo, eventos
- [ ] Proceso y plazos de entrega
- [ ] FAQ con respuestas reales
- [ ] Número de Viber para deep link
- [ ] Video corto + export de fotogramas (**herramienta externa**, ver § 3.1)
- [ ] 12–20 fotos para galería MVP (repartidas por categoría)
- [ ] Foto de perfil para `#sobre-mi`
- [ ] Testimonios (fase posterior)

### Pendiente técnico
- [ ] Dominio propio vs URL de Vercel (`*.vercel.app`)
- [ ] Conectar repo GitHub → Vercel (deploy automático)
- [ ] Analytics (opcional)

---

## 7. Fases de implementación

### Fase 0 — Refinamiento ✅ (parcial)
- [x] Oferta multi-servicio con priorización; exclusión niños
- [x] CTA, precios, tono visual, idiomas
- [ ] Precios por tipo de sesión
- [ ] Número Viber

### Fase 1 — Scaffold + diseño base
- [ ] Inicializar proyecto **Astro** + adapter Vercel
- [ ] Crear `DESIGN.md` con tokens provisionales (minimal claro)
- [ ] Estructura secciones + nav anclas
- [ ] Capas parallax / placeholder de frames (consumo de assets estáticos)
- [ ] Header sticky: selector **RU | EN | ES** + botones IG / Viber
- [ ] Archivos `locales/ru.json`, `en.json`, `es.json` + i18n
- [ ] Responsive mobile-first

### Fase 2 — Galería e interacción
- [ ] Tabs/filtros por categoría (orden § 2.1); default = mujeres
- [ ] Grid/masonry por categoría
- [ ] Lightbox (swipe, teclado, preload)
- [ ] Lazy loading
- [ ] Sustituir placeholders por fotos reales

### Fase 3 — Motion final + conversión
- [ ] Importar secuencia de frames (exportada externamente) a `public/`
- [ ] Parallax scroll-driven pulido (desktop + mobile + reduced-motion)
- [ ] Tarjetas de servicios por tipo con precios
- [ ] FAQ acordeón
- [ ] SEO básico + OG tags por idioma
- [ ] Deploy en Vercel (push a `main`)

### Fase 4 — Evolución (post-MVP)
- [ ] Paleta final en DESIGN.md según fotos
- [ ] Testimonios
- [ ] Galerías expandidas o sesiones narrativas

---

## 8. Stack técnico (Vercel)

### Recomendación: **Astro**

Para esta landing (estática, muchas imágenes, poco JS, i18n, deploy en Vercel), **Astro** es la mejor opción:

| Ventaja | Por qué importa aquí |
|---------|----------------------|
| **Static-first** | HTML estático por defecto → carga rápida en móvil/Instagram |
| **Deploy nativo en Vercel** | `@astrojs/vercel` o export estático; push a GitHub = preview + producción |
| **Islas de interactividad** | Solo hidratar lo necesario: lightbox, i18n, parallax (React/Vue/Svelte opcional) |
| **Imágenes** | Integración con `<Image />`, srcset, formatos modernos |
| **i18n** | Rutas `/`, `/en`, `/es` o cliente con JSON — flexible |
| **Bajo overhead** | Menos complejidad que un framework full-stack para una sola página |

**Flujo de deploy:**

```
GitHub (este repo)  →  Vercel conectado al repo  →  build Astro  →  URL .vercel.app (+ dominio custom)
```

### Stack concreto

| Capa | Elección | Motivo |
|------|----------|--------|
| Framework | **Astro 5** | Landing estática optimizada |
| Deploy | **Vercel** | Integración directa, previews por PR, CDN global |
| Estilos | CSS con variables (tokens) | Paleta intercambiable |
| Interactividad | Astro islands (vanilla o Preact) | Parallax, lightbox, FAQ, i18n switcher |
| i18n | JSON en `src/locales/` + util cliente o `@astrojs/i18n` | RU por defecto |
| Motion assets | Carpeta `public/frames/` — **archivos subidos a mano** | Sin ffmpeg en build |
| Imágenes galería | `public/` o Astro `<Image />` + Sharp en build | WebP, lazy load |
| Repo | GitHub → Vercel | CI/CD automático |

### Alternativa: **Next.js**

También funciona muy bien en Vercel (es de la misma empresa). Tiene sentido si más adelante necesitas backend, API routes o muchas páginas dinámicas. Para el MVP actual es **más de lo necesario**; Astro es más ligero.

### No recomendado para MVP

| Opción | Motivo |
|--------|--------|
| HTML plano sin build | i18n, componentes y optimización de imágenes más manuales |
| SaaS (Pixieset, etc.) | Menos control del parallax custom y del repo |
| Pipeline ffmpeg en CI | Complejidad innecesaria; frames se preparan fuera |

### Comandos de referencia (cuando arranquemos)

```bash
npm create astro@latest . -- --template minimal
npx astro add vercel
git push   # Vercel despliega automáticamente si el repo está conectado
```

---

## 9. Preguntas abiertas

1. **¿Moneda y precios?** Cifras por tipo de sesión (mujeres, parejas, corporativo, eventos).
2. **¿Número de Viber** para el enlace de contacto?
3. **¿Dominio propio** o URL temporal del hosting?
4. **¿Tienes ya un video** para exportar frames externamente, o lo planificamos?
5. **¿Quién redacta/revisa** las traducciones EN y ES? (Yanela, tú, ambos)

---

## 10. Criterios de éxito (MVP)

| Criterio | Meta |
|----------|------|
| Mensaje claro | Tipos de sesión y estilo identificables en < 5 s |
| Priorización | Mujeres primero en portfolio/servicios; resto visible sin exclusión |
| Hero memorable | Parallax / frames scroll-driven, performante |
| Precios visibles | Precio por tipo de sesión en `#servicios` |
| Contacto local | Instagram + Viber, sin fricción |
| Mobile usable | Hero, galería y CTAs en touch |
| Paleta intercambiable | Tokens CSS, cambio sin refactor |
| Publicable | Link listo para bio de Instagram |
| i18n | Ruso por defecto; cambio a EN/ES sin perder contexto ni preferencia |

---

## 11. Próximo paso

1. **Responder preguntas abiertas** (precios, Viber, dominio, video, traducciones).
2. **Crear `DESIGN.md`** con spec de parallax multi-sección + selector de idioma.
3. **Scaffold Astro** + deploy Vercel con placeholders hasta fotos y frames.

Cuando quieras, seguimos con paquetes y copy en ruso, o pasamos directo a `DESIGN.md`.
