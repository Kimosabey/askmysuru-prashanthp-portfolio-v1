# Route Strategy: `/gallery`

## Structural Inspiration
From `profile.html` `#gallery` section: A beautiful, immersive masonry grid of still photography.

## Content Mapping (From PRASHANTH_P_DOSSIER.md)

### Gallery Categories
Because Prashanth P shoots diverse subjects, the gallery must be heavily categorized using a Next.js client-side filter:

1. **Architecture & Heritage**
   - Ruins of Lal Mahal
   - Srirangapatna Armouries
   - Vijayanagara / Surapura Palaces

2. **Wildlife (Vana Sampada)**
   - Bandipur Tiger documentation stills
   - Kabini ecosystems

3. **Behind The Scenes (BTS)**
   - Prashanth P operating cinema rigs.
   - On-location interviews with political figures (Political360 context).
   - Studio editing setups at P2 ADD Agency.

### UI/UX Component Requirements
- `MasonryGrid`: Utilizing Next/Image for highly optimized rendering of heavy 4K stils.
- `LightboxModal`: Full-screen expanding images with heavy dark-mode contrast.
