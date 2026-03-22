# Design System: The Heritage Digital Authority

## 1. Overview & Creative North Star
**Creative North Star: "The Cinematic Archivist"**

This design system is built to bridge the gap between Mysuru’s storied heritage and a high-tech digital future. We are not building a standard news "portal"; we are creating an immersive digital museum of current events. 

The aesthetic breaks from the rigid, "boxy" layout of traditional news sites. We utilize **intentional asymmetry**, where headlines might overlap atmospheric background elements, and **tonal depth**, where the UI feels like layered sheets of dark glass floating over a misty, blue-toned void. By prioritizing high-contrast typography and cinematic motion, we ensure the portal feels as prestigious as a heritage broadsheet but as fluid as a high-end documentary.

---

## 2. Colors & Atmospheric Depth

### The Palette (Dark Mode - Default)
We lead with Dark Mode to evoke a cinematic, late-night editorial feel.
- **Background:** `#000000` (The Void)
- **Surface:** `#050914` (Deep Night)
- **Primary (Bright Marine):** `primary-container: #206FC0`
- **Secondary (Blue Bell):** `secondary-container: #1497CE`
- **Tonal Borders:** `outline-variant: rgba(51, 65, 163, 0.3)`

### The "No-Line" Rule
Traditional 1px solid borders are strictly prohibited for sectioning content. To define boundaries:
1. **Background Shifts:** Use `surface-container-low` for secondary sections and `surface-container-highest` for highlighted content.
2. **Negative Space:** Rely on the **Spacing Scale (8, 12, 16)** to let content breathe. 
3. **Tonal Transitions:** Use subtle linear gradients (e.g., `surface` to `surface-container-low`) to signal a shift in content priority.

### The "Glass & Gradient" Rule
Floating elements (headers, navigation docks, or featured cards) must utilize **Glassmorphism**.
- **Specs:** `background: rgba(5, 9, 20, 0.7)`, `backdrop-blur-xl`, and a `1px` border using `outline-variant` at 20% opacity.
- **Atmosphere:** Inject "Visual Soul" by placing animated, blurred blue orbs behind the glass layers to create a sense of moving light within the "Deep Night" background.

---

## 3. Typography: The Editorial Voice

We pair the modern utility of **Inter** with the timeless structure of **Newsreader** (for English Headlines) and the cultural resonance of **Noto Sans Kannada**.

| Level | Token | Font | Size | Character |
| :--- | :--- | :--- | :--- | :--- |
| **Display** | `display-lg` | Newsreader | 3.5rem | High-contrast, authoritative, serif. |
| **Headline** | `headline-md` | Newsreader | 1.75rem | Tight leading, editorial impact. |
| **Title** | `title-lg` | Inter | 1.375rem | Semi-bold, modern, functional. |
| **Body** | `body-lg` | Inter / Noto | 1.0rem | Optimal legibility, 1.6x line-height. |
| **Label** | `label-md` | Inter | 0.75rem | All-caps, tracked out (+5%) for metadata. |

**Bilingual Strategy:** Noto Sans Kannada must always match the optical weight of the English Inter companion. When displaying both languages, ensure the Kannada text is scaled by 1.1x to maintain visual parity in vertical presence.

---

## 4. Elevation & Depth: Tonal Layering

We reject the "drop shadow" of the 2010s. Depth is achieved through the physical stacking of tones.

- **The Layering Principle:** 
    - Base Level: `surface` (#0e131f)
    - Section Level: `surface-container-low` (#171b27)
    - Interaction Level (Cards): `surface-container-highest` (#303541)
- **Ambient Shadows:** Only used for "Cinema Overlays" (Modals). Use a spread of `40px`, blur of `80px`, and a color derived from `on-surface` at 6% opacity. It should feel like a soft glow, not a shadow.
- **Grain Overlays:** Apply a subtle `3% opacity` noise texture across all `surface` levels to mimic film grain, adding "Heritage" texture to the digital canvas.

---

## 5. Components

### The Cinematic Cursor & Magnetic Buttons
- **Magnetic Buttons:** Primary CTAs must have a magnetic hit area. The button follows the cursor slightly when within a 20px radius.
- **Button Styling:** 
    - **Primary:** `primary-container` background, no border, `rounded-md` (0.375rem). 
    - **Tertiary:** `surface-variant` with a `backdrop-blur-md`.

### Bottom-Docked Navigation (Mobile-First)
The tab bar is a floating glass element (`backdrop-blur-xl`) docked 1.4rem (`spacing-4`) from the bottom.
- **Active State:** A "Bright Marine" (`primary`) dot appears below the icon.
- **Container:** `rgba(5, 9, 20, 0.8)` with a `0.5px` top-border of `outline-variant`.

### Narrative Cards
- **Construction:** No dividers. Separation is achieved by a background shift to `surface-container-lowest`. 
- **Typography:** Headlines should overlap the image container by `-1.2rem` on the Y-axis to create an editorial, magazine-style layout.

### Bilingual Toggles
- **Style:** Small, glass-morphic pills.
- **Interaction:** Smooth cross-fade transition between English and Kannada scripts to maintain the "Cinematic" feel.

---

## 6. Do’s and Don’ts

### Do:
- **Use Intentional Asymmetry:** Align text to a 12-column grid, but allow high-quality heritage imagery to break the grid or bleed off-canvas.
- **Embrace White Space:** Use `spacing-16` (5.5rem) between major editorial sections to allow the "Blue Orbs" and "Grain" to provide visual interest.
- **Prioritize Kannada Legibility:** Ensure Kannada characters have enough vertical breathing room (line-height) to prevent descenders from touching the line below.

### Don’t:
- **Never use #000000 for text:** Always use `on-surface` or `on-surface-variant` to maintain a professional, soft-contrast look.
- **Avoid Hard Dividers:** Never use a solid line to separate two news stories. Use a shift from `surface` to `surface-dim` instead.
- **No Sharp Corners:** Avoid `none` roundedness. Everything should have at least a `sm` (0.125rem) or `md` (0.375rem) radius to feel premium and "held."

### Accessibility Note:
While we use Glassmorphism, ensure all text overlays pass WCAG AA contrast ratios by using a `surface-container-highest` scrim (gradient overlay) behind text that sits on top of images or animated orbs.