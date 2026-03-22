# Design System: The Director’s Vision

## 1. Overview & Creative North Star
The North Star of this design system is **"The Director’s Vision."** This is an authoritative, artistic, and technically precise framework designed to elevate a portfolio from a simple gallery to a cinematic experience. It rejects the "template" look of modern web design in favor of high-contrast editorial layouts, intentional asymmetry, and the tactile depth of 35mm film.

By leveraging **Newsreader’s** academic elegance against **Inter’s** Swiss precision, we create a tension between the "Art" (the work) and the "Technical" (the execution). We move away from rigid grids, opting instead for overlapping elements, magnetic micro-interactions, and a "Deep Black" canvas that allows content to emerge from the shadows like a projected film.

---

## 2. Colors & Tonal Depth
The palette is built on an absolute black foundation, utilizing a "Light-from-Darkness" philosophy. We do not use borders to define space; we use light and opacity.

### The "No-Line" Rule
**Strict Prohibition:** 1px solid borders are forbidden for sectioning. Boundaries must be defined solely through background shifts. For example, a `surface-container-low` section sitting on a `surface` background provides all the separation required. 

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers—like stacked sheets of exposed film. 
- **Base:** `surface` (#131313) for the overall canvas.
- **Level 1:** `surface-container-low` (#1B1B1B) for secondary content blocks.
- **Level 2:** `surface-container-highest` (#353535) for active cards or "floating" elements.

### The "Glass & Gradient" Rule
To achieve a "Cinematic Glass" effect, floating elements (like navigation bars or modals) should use semi-transparent `surface-variant` colors with a `backdrop-blur` of 12px–20px. 

### Signature Textures
- **Film Grain:** Apply a subtle, low-opacity (2-3%) noise overlay across the entire `background` to eliminate "flat" digital blacks.
- **The Marine Fade:** Use a linear gradient from `primary` (#206FC0) to `primary-container` (#206FC0 at 60% opacity) for hero CTAs to simulate light hitting a lens.

---

## 3. Typography
The typographic system is an editorial dialogue between the Serif (The Story) and the Sans (The Data).

| Role | Token | Font | Size | Character |
| :--- | :--- | :--- | :--- | :--- |
| **Display** | `display-lg` | Newsreader | 3.5rem | High-contrast, italicized for emphasis. |
| **Headline**| `headline-md` | Newsreader | 1.75rem | Authoritative, generous line-height. |
| **Title** | `title-lg` | Inter | 1.375rem | Medium weight, used for project titles. |
| **Body** | `body-lg` | Inter | 1rem | Clean, highly legible, wide tracking (0.02em). |
| **Label** | `label-sm` | Inter | 0.6875rem | All-caps, tracked out (0.1em) for technical data. |

**The Editorial Rule:** Headlines (`Newsreader`) should often be placed with intentional asymmetry—offsetting them from the main body text to create a "negative space" pull that guides the eye.

---

## 4. Elevation & Depth
In "The Director’s Vision," depth is achieved through **Tonal Layering** rather than structural shadows.

### The Layering Principle
Stacking surfaces creates natural lift. Place a `surface-container-lowest` (#0E0E0E) card on a `surface-container-low` (#1B1B1B) section to create a "sunken" effect, or reverse it for a "raised" effect.

### Ambient Shadows
When a floating effect is mandatory (e.g., a modal), use an **Extra-Diffused Shadow**:
- **Color:** `on-surface` (#E2E2E2) at 4% opacity.
- **Blur:** 40px - 60px.
- **Offset:** Y: 20px.
This creates a "glow" or "aura" rather than a heavy drop shadow.

### The "Ghost Border" Fallback
If a border is required for accessibility, use a **Ghost Border**: `outline-variant` (#414751) at **15% opacity**. Never use 100% opaque borders.

---

## 5. Components

### Buttons
- **Primary:** `primary-container` background, `on-primary-container` text. Roundedness: `sm` (0.125rem) for a sharp, precision-cut look.
- **Secondary:** Transparent background with a `Ghost Border`. On hover, transition to `surface-bright` with a "magnetic" pull effect toward the cursor.

### Cards & Project Previews
**No Dividers.** Separate cards using `spacing-8` (2.75rem). Use "35mm film strip" accents (small vertical ticks or frame numbers in `label-sm`) in the corners of cards to reinforce the cinematic theme.

### Interaction: Magnetic Cues
All interactive elements (Buttons, Chips, Links) should exhibit a "Magnetic" behavior. As the cursor nears the element, the element subtly offsets its position toward the cursor (max 5px), signaling technical precision and responsiveness.

### Input Fields
- **Style:** Minimalist. Only a bottom "Ghost Border."
- **Focus:** The border transitions from 15% opacity to 100% `tertiary` (#81CFFF), mimicking a lens coming into focus.

### 35mm Film Accents
Use `secondary-container` to create small, non-functional "sprocket holes" at the top and bottom of main sections to frame the content like a film reel.

---

## 6. Do’s and Don'ts

### Do
- **Use High Contrast:** Embrace the `surface-container-lowest` vs `on-surface` contrast for maximum drama.
- **Respect the Grain:** Ensure the film grain overlay is globally applied so it doesn't look like an accidental texture.
- **Asymmetric Layouts:** Place images slightly off-center to create a sense of motion.

### Don’t
- **No Pure White:** Never use #FFFFFF. Use `on-surface` (#E2E2E2) to maintain the "silver screen" tonal quality.
- **No Sharp Corners on Glass:** Glassmorphic elements should use `rounded-md` (0.375rem) to soften the "light refraction" at the edges.
- **No Standard Dividers:** Never use a horizontal rule `<hr>`. Use a `spacing-12` gap or a subtle shift in `surface` color.
- **No Heavy Shadows:** Avoid the "Material Design" look. Depth should feel like lighting, not like physics.