# Guía de Estilo y Sistema de Diseño — Gym Tabaku

Documento de referencia oficial del sistema de diseño, tokens visuales, tipografías, componentes y estilos básicos de la plataforma web de **Gym Tabaku**.

---

## 1. Filosofía e Identidad Visual

- **Concepto Estético**: _Athletic Fitness Brutalism_ (Neo-brutalismo deportivo). Combina estética urbana de gimnasio, cortes diagonales agresivos (_skew_), alto contraste visual, tipografía display caligráfica audaz y micro-interacciones nítidas.
- **Tono de Comunicación**: Enérgico, motivador, comunitario y profesional.
- **Lema Oficial**: _"¡Entrena con fuerza. Crece en familia!"_

---

## 2. Paleta de Colores y Tokens

El sistema de color se estructura a través de Tailwind CSS v4 configurado en `src/styles/global.css`. Cada escala incluye sus 11 pasos cromáticos (desde `50` hasta `950`), representados visualmente mediante muestras gráficas SVG, chips HTML y códigos HEX compatibles con vista previa nativa.

---

### 2.1. Escala Primaria — _Gym Yellow_ (50 al 950)

El amarillo es el alma de la identidad de **Gym Tabaku**: evoca energía, fuerza, iluminación y dinamismo. Se utiliza para elementos que demandan acción inmediata, bordes de elementos activos, badges de categoría y títulos en tipografía display.

![Tira Visual Paleta Primaria](public/img/colors/palette-primary.svg)

|                                                                           Muestra Visual                                                                           | Token Tailwind                     | Variable CSS          | HEX       | RGB                  | Rol y Aplicación en la Interfaz                                     |
| :----------------------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------- | :-------------------- | :-------- | :------------------- | :------------------------------------------------------------------ |
| <span style="background-color:#fffbeb; display:inline-block; width:18px; height:18px; border-radius:3px; border:1px solid #d1d5db; vertical-align:middle;"></span> | `primary-50`                       | `--color-primary-50`  | `#fffbeb` | `rgb(255, 251, 235)` | Reflejos luminosos, brillos superiores sutiles                      |
| <span style="background-color:#fef3c7; display:inline-block; width:18px; height:18px; border-radius:3px; border:1px solid #d1d5db; vertical-align:middle;"></span> | `primary-100`                      | `--color-primary-100` | `#fef3c7` | `rgb(254, 243, 199)` | Fondos de alertas o avisos tenues                                   |
| <span style="background-color:#fde68a; display:inline-block; width:18px; height:18px; border-radius:3px; border:1px solid #d1d5db; vertical-align:middle;"></span> | `primary-200`                      | `--color-primary-200` | `#fde68a` | `rgb(253, 230, 138)` | Resaltados secundarios y bordes suaves                              |
| <span style="background-color:#fcd34d; display:inline-block; width:18px; height:18px; border-radius:3px; border:1px solid #d1d5db; vertical-align:middle;"></span> | `primary-300`                      | `--color-primary-300` | `#fcd34d` | `rgb(252, 211, 77)`  | Elementos de acento medio en modo claro                             |
| <span style="background-color:#ffde4d; display:inline-block; width:18px; height:18px; border-radius:3px; border:1px solid #d1d5db; vertical-align:middle;"></span> | `primary-400` / `gym-yellow-hover` | `--color-primary-400` | `#ffde4d` | `rgb(255, 222, 77)`  | **Color de interacción `:hover`** en enlaces, menús y botones       |
| <span style="background-color:#ffcc00; display:inline-block; width:18px; height:18px; border-radius:3px; border:1px solid #d1d5db; vertical-align:middle;"></span> | `primary-500` / `gym-yellow`       | `--color-primary-500` | `#ffcc00` | `rgb(255, 204, 0)`   | **Color de marca principal (Base)**, botones, bordes activos y glow |
| <span style="background-color:#d4a900; display:inline-block; width:18px; height:18px; border-radius:3px; border:1px solid #d1d5db; vertical-align:middle;"></span> | `primary-600`                      | `--color-primary-600` | `#d4a900` | `rgb(212, 169, 0)`   | Bordes activos presionados (`:active`), sombras sólidas             |
| <span style="background-color:#aa8700; display:inline-block; width:18px; height:18px; border-radius:3px; border:1px solid #4b5563; vertical-align:middle;"></span> | `primary-700`                      | `--color-primary-700` | `#aa8700` | `rgb(170, 135, 0)`   | Tonos oscuros de contraste para iconografía sobre claro             |
| <span style="background-color:#806500; display:inline-block; width:18px; height:18px; border-radius:3px; border:1px solid #4b5563; vertical-align:middle;"></span> | `primary-800`                      | `--color-primary-800` | `#806500` | `rgb(128, 101, 0)`   | Acentos oscuros dorados profundos                                   |
| <span style="background-color:#554300; display:inline-block; width:18px; height:18px; border-radius:3px; border:1px solid #4b5563; vertical-align:middle;"></span> | `primary-900`                      | `--color-primary-900` | `#554300` | `rgb(85, 67, 0)`     | Fondos de insignias de máximo contraste                             |
| <span style="background-color:#2b2200; display:inline-block; width:18px; height:18px; border-radius:3px; border:1px solid #4b5563; vertical-align:middle;"></span> | `primary-950`                      | `--color-primary-950` | `#2b2200` | `rgb(43, 34, 0)`     | Sombra oscura tintada de amarillo para overlays nocturnos           |

---

### 2.2. Escala Secundaria — _Slate Dark & Industrial Slate_ (50 al 950)

La escala secundaria aporta sobriedad, elegancia y contraste brutalista. Abarca desde el blanco perlado para tipografía nocturna hasta el negro carbón profundo para los fondos de máxima inmersión.

![Tira Visual Paleta Secundaria](public/img/colors/palette-secondary.svg)

|                                                                           Muestra Visual                                                                           | Token Tailwind                           | Variable CSS            | HEX       | RGB                  | Rol y Aplicación en la Interfaz                                         |
| :----------------------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------- | :---------------------- | :-------- | :------------------- | :---------------------------------------------------------------------- |
| <span style="background-color:#f8fafc; display:inline-block; width:18px; height:18px; border-radius:3px; border:1px solid #d1d5db; vertical-align:middle;"></span> | `secondary-50` / `gym-dark-text-primary` | `--color-secondary-50`  | `#f8fafc` | `rgb(248, 250, 252)` | **Texto principal blanco puro** sobre secciones oscuras                 |
| <span style="background-color:#f1f5f9; display:inline-block; width:18px; height:18px; border-radius:3px; border:1px solid #d1d5db; vertical-align:middle;"></span> | `secondary-100`                          | `--color-secondary-100` | `#f1f5f9` | `rgb(241, 245, 249)` | Texto en menú de navegación y badges claros                             |
| <span style="background-color:#e2e8f0; display:inline-block; width:18px; height:18px; border-radius:3px; border:1px solid #d1d5db; vertical-align:middle;"></span> | `secondary-200`                          | `--color-secondary-200` | `#e2e8f0` | `rgb(226, 232, 240)` | Párrafos y subtítulos en Hero y modales                                 |
| <span style="background-color:#cbd5e1; display:inline-block; width:18px; height:18px; border-radius:3px; border:1px solid #94a3b8; vertical-align:middle;"></span> | `secondary-300` / `gym-bg`               | `--color-secondary-300` | `#cbd5e1` | `rgb(203, 213, 225)` | **Fondo claro base de sección** (About, Precios, Entrenadores)          |
| <span style="background-color:#94a3b8; display:inline-block; width:18px; height:18px; border-radius:3px; border:1px solid #64748b; vertical-align:middle;"></span> | `secondary-400`                          | `--color-secondary-400` | `#94a3b8` | `rgb(148, 163, 184)` | Bordes sutiles de tarjetas y divisores secundarios                      |
| <span style="background-color:#64748b; display:inline-block; width:18px; height:18px; border-radius:3px; border:1px solid #475569; vertical-align:middle;"></span> | `secondary-500`                          | `--color-secondary-500` | `#64748b` | `rgb(100, 116, 139)` | Botón alternativo oscuro (`black`), iconos neutros                      |
| <span style="background-color:#475569; display:inline-block; width:18px; height:18px; border-radius:3px; border:1px solid #334155; vertical-align:middle;"></span> | `secondary-600`                          | `--color-secondary-600` | `#475569` | `rgb(71, 85, 105)`   | Sombras proyectadas intermedias                                         |
| <span style="background-color:#2d3748; display:inline-block; width:18px; height:18px; border-radius:3px; border:1px solid #475569; vertical-align:middle;"></span> | `secondary-700` / `gym-bg-card`          | `--color-secondary-700` | `#2d3748` | `rgb(45, 55, 72)`    | Superficie de tarjeta neutra y estado hover                             |
| <span style="background-color:#1a202c; display:inline-block; width:18px; height:18px; border-radius:3px; border:1px solid #475569; vertical-align:middle;"></span> | `secondary-800` / `gym-dark-bg-card`     | `--color-secondary-800` | `#1a202c` | `rgb(26, 32, 44)`    | **Superficie de tarjeta oscura**, paneles y bordes de cristal           |
| <span style="background-color:#0f172a; display:inline-block; width:18px; height:18px; border-radius:3px; border:1px solid #334155; vertical-align:middle;"></span> | `secondary-900` / `gym-text-primary`     | `--color-secondary-900` | `#0f172a` | `rgb(15, 23, 42)`    | **Texto principal de alto contraste** sobre fondo claro                 |
| <span style="background-color:#0b0e14; display:inline-block; width:18px; height:18px; border-radius:3px; border:1px solid #334155; vertical-align:middle;"></span> | `secondary-950` / `gym-dark-bg`          | `--color-secondary-950` | `#0b0e14` | `rgb(11, 14, 20)`    | **Fondo ultra oscuro base** (Hero, Menú, Horarios, Testimonios, Footer) |

---

### 2.3. Mapeo Semántico de Tokens Contextuales

Para garantizar la consistencia en el desarrollo y evitar acoplar estilos rígidos a colores hexadecimales directos, se utilizan los siguientes alias semánticos:

```css
/* ======================================================== */
/* MODO CLARO (Secciones con fondo claro de piedra/cemento)  */
/* ======================================================== */
--color-gym-bg: var(--color-secondary-300); /* #cbd5e1 */
--color-gym-bg-card: var(--color-secondary-700); /* #2d3748 */
--color-gym-bg-card-hover: var(--color-secondary-950); /* #0b0e14 */
--color-gym-text-primary: var(--color-secondary-900); /* #0f172a */
--color-gym-text-secondary: var(--color-secondary-950); /* #0b0e14 */

/* ======================================================== */
/* MODO OSCURO (Secciones nocturnas de alto impacto)        */
/* ======================================================== */
--color-gym-dark-bg: var(--color-secondary-950); /* #0b0e14 */
--color-gym-dark-bg-card: var(--color-secondary-800); /* #1a202c */
--color-gym-dark-bg-card-hover: var(--color-secondary-700); /* #2d3748 */
--color-gym-dark-text-primary: var(--color-secondary-50); /* #f8fafc */
--color-gym-dark-text-secondary: var(--color-secondary-300); /* #cbd5e1 */

/* ======================================================== */
/* ACENTOS Y LLAMADAS A LA ACCIÓN (CTAs)                    */
/* ======================================================== */
--color-gym-yellow: var(--color-primary-500); /* #ffcc00 */
--color-gym-yellow-hover: var(--color-primary-400); /* #ffde4d */
```

---

## 3. Tipografía

El sitio web utiliza tres familias tipográficas coordinadas:

| Familia                   | Fuente                       | Variable Tailwind | Uso                                                                      |
| :------------------------ | :--------------------------- | :---------------- | :----------------------------------------------------------------------- |
| **Display / Brutalista**  | `Permanent Marker, serif`    | `font-serif`      | Logotipo, H1, títulos de sección, números llamativos y textos en botones |
| **Sans-Serif Principal**  | `Inter Variable, sans-serif` | `font-sans`       | Párrafos, descripciones, etiquetas técnicas, tablas y cuerpo general     |
| **Sans-Serif Secundaria** | `Poppins, sans-serif`        | `font-poppins`    | Elementos de navegación, tarjetas de tarifas y textos destacados         |

### Escala de Jerarquía de Texto

- **Título Principal (H1)**: `text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-black uppercase text-primary-500 tracking-wider`
- **Título de Sección (H2)**: `text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold tracking-tight text-center`
- **Subtítulo / Eyebrow (`Titulo.astro`)**: `uppercase font-serif text-lg sm:text-xl md:text-2xl lg:text-3xl text-gym-yellow` (acompañado de líneas laterales amarillas)
- **Párrafo Cuerpo**: `text-sm sm:text-base lg:text-lg leading-relaxed`
- **Micro-texto / Badges**: `text-xs sm:text-sm font-semibold tracking-wide`

---

## 4. Componentes y Patrones de Interfaz

### 4.1. Botón Brutalista con Sombra Desplazada (`Button.astro`)

El elemento de acción insignia. Posee un borde físico y un clon en el pseudo-elemento `before:` que genera una sombra sólida desplazada en diagonal. Al hacer hover o clic, el botón "encaja" con un efecto mecánico táctil.

```html
<!-- Variante Primaria (Amarillo Gym) -->
<a
  href="/servicios"
  class="relative inline-flex items-center justify-center font-serif uppercase tracking-wider text-sm sm:text-base px-5 py-2 min-w-36 border-2 border-primary-500 bg-primary-500 hover:bg-primary-400 text-secondary-950 cursor-pointer duration-200 ease-[cubic-bezier(0.33,1,0.68,1)] before:content-[''] before:absolute before:inset-0 before:border-2 before:border-primary-500 before:translate-y-1.5 before:-translate-x-1.5 hover:before:translate-x-0 hover:before:translate-y-0 active:scale-95"
>
  Ver más
</a>
```

- **Variante Blanca (`white={true}`)**: Borde y fondo blanco para fondos oscuros con alto contraste.
- **Variante Oscura (`black={true}`)**: Borde y fondo en `secondary-500` con texto blanco.

### 4.2. Título de Sección con Franjas (`Titulo.astro`)

Enmarca el nombre o categoría de la sección con pastillas amarillas redondeadas a los lados:

```html
<div
  class="flex items-center justify-center gap-2 sm:gap-3 lg:gap-4 max-w-full"
>
  <div class="bg-gym-yellow h-1 w-6 sm:w-10 md:w-16 rounded-full shrink"></div>
  <p
    class="uppercase font-serif text-lg sm:text-xl md:text-2xl lg:text-3xl text-gym-yellow whitespace-nowrap"
  >
    Nuestros Servicios
  </p>
  <div class="bg-gym-yellow h-1 w-6 sm:w-10 md:w-16 rounded-full shrink"></div>
</div>
```

### 4.3. Cortes Diagonales Dinámicos (`-skew`)

Las tarjetas interactivas (como en `PreciosItems.astro`) aplican una inclinación diagonal agresiva para transmitir dinamismo deportivo:

- **Inclinación del contenedor**: `-skew-x-6` en móvil y `-skew-x-12` en pantallas mayores.
- **Compensación de legibilidad interior**: El contenido interno de texto, iconos y precios lleva `skew-x-6` o `skew-x-12` para restaurar la verticalidad exacta de lectura.
- **Estado activo / interactivo**:
  - Escala aumentada (`scale-105` o `scale-115`).
  - Borde brillante `border-gym-yellow`.
  - Sombra de luz amarilla neón: `shadow-[0_0_30px_rgba(255,204,0,0.28)]`.

### 4.4. Tarjetas con Glassmorphism

Para superposiciones sobre fotos de fondo y el carrusel de servicios:

- Fondo: `bg-secondary-950/50` o `bg-gym-bg-card-hover/50`.
- Desenfoque de cristal: `backdrop-blur-md` o `backdrop-blur-sm`.
- Borde sutil: `border border-white/10`.
- Esquinas redondeadas: `rounded-xl` o `rounded-2xl`.

---

## 5. Sistema de Animaciones Scroll Reveal (GPU)

El proyecto incluye un motor ligero de animaciones controladas por scroll en `src/utils/scrollReveal.ts` y estilos en `global.css`.

### Atributos Disponibles

- `data-reveal="fade-up"`: Aparece desde abajo (50px).
- `data-reveal="fade-down"`: Aparece desde arriba (-50px).
- `data-reveal="fade-left"`: Entra desde la derecha (60px).
- `data-reveal="fade-right"`: Entra desde la izquierda (-60px).
- `data-reveal="zoom-in"`: Efecto de escala desde `0.88` a `1.0`.
- `data-reveal="fade-in"`: Aparición suave de opacidad sin desplazamiento.
- `data-reveal="expand-line"`: Franjas amarillas decorativas que crecen desde el centro hacia los extremos (`scaleX(0)` a `scaleX(1)`).

### Retardos Escalonados (Stagger)

Se aplica con `data-reveal-delay="200"`, con valores disponibles de `50ms` hasta `2000ms`.

### Accesibilidad de Movimiento

Si el usuario tiene activada la preferencia de reducción de movimiento en su sistema operativo, el CSS anula automáticamente las transiciones:

```css
@media (prefers-reduced-motion: reduce) {
  [data-reveal] {
    opacity: 1 !important;
    transform: none !important;
    transition: none !important;
  }
}
```

---

## 6. Fondos y Texturas del Proyecto

El sitio alterna ritmos visuales entre secciones claras y oscuras utilizando imágenes de textura WebP optimizadas:

1. **Fondos Oscuros**:
   - `public/img/bg/heeder.webp` y `heeder-mobile.webp` (Hero LCP)
   - `public/img/bg/bgoscuro.webp` (Horarios)
   - `public/img/bg/bgoscuroflip.webp` (Testimonios)
   - `public/img/bg/footer.webp` (Pie de página)
   - `public/img/bg/bgmenu.webp` (Textura de menú y fondo de precios)
2. **Fondos Claros**:
   - `public/img/bg/bgclaro1.webp` (Sobre Nosotros, Coaches)
   - `public/img/bg/bgclaroflip.webp` (Precios)
3. **Acentos Visuales y Marcas de Agua**:
   - `public/img/bg/bgcuerdas.webp` (Silueta de cuerdas funcionales)
   - `public/img/bg/bgyellow.webp` (Manchas de pintura / salpicadura amarilla)
   - `public/img/bg/bgclarotexture.webp` (Efecto de grano grunge)

---

## 7. Rejilla y Contenedores (Layout Grid)

- **Ancho Máximo Global**: `max-w-6xl 2xl:max-w-7xl mx-auto`
- **Márgenes Laterales Responsivos**: `px-4 sm:px-6 lg:px-8`
- **Espaciado Vertical entre Secciones**: `py-12 sm:py-16 md:py-20 lg:py-24`
- **Breakpoints Estándar (Tailwind)**:
  - `sm`: `640px` (Smartphones grandes / orientación horizontal)
  - `md`: `768px` (Tablets verticales)
  - `lg`: `1024px` (Tablets horizontales / Laptops)
  - `xl`: `1280px` (Monitores estándar)
  - `2xl`: `1536px` (Pantallas grandes)
