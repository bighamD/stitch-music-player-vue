## Context

The source Stitch project is a public mobile design named `Futuristic Minimalist Music Player` using the `Sonic Noir` design system. Stitch MCP reports two visible 390x884 mobile screens: `Music List` and `Now Playing`, with exported HTML and screenshots available as the design reference.

## Goals / Non-Goals

**Goals:**

- Restore both Stitch screens as a Vue 3 application using Composition API, TypeScript, Vite, and Tailwind CSS.
- Preserve the OLED-first dark visual system, accent color, glass navigation, album artwork, spacing, and Chinese labels from the Stitch HTML.
- Make the page interactive enough to demonstrate frontend restoration quality: search, track selection, play/pause, favorite, screen navigation, and progress UI.
- Publish the result to Vercel and GitHub Pages.

**Non-Goals:**

- Implement real audio playback, user accounts, remote music APIs, or persistent storage.
- Build a full router or multi-page app when a single restored mobile experience is sufficient.
- Split into multiple repositories or independent OpenSpec changes.

## Decisions

- Use one OpenSpec change with internal task groups because the work is one cohesive UI restoration with shared styling, data, and deployment outputs. Splitting would add coordination cost without reducing risk.
- Use component boundaries around `AppShell`, `MusicListScreen`, `NowPlayingScreen`, `TrackRow`, `PlayerControls`, `BottomNav`, and a music data composable so state flow remains explicit and Vue files stay focused.
- Use Stitch MCP exported HTML as the fidelity baseline, then adapt it into maintainable Vue components instead of embedding raw exported HTML. This keeps deployment simple while preserving layout, text, color, and assets.
- Use a static GitHub Pages build with `VITE_BASE_PATH=/stitch-music-player-vue/` and a standard Vercel preview deployment with root base path.

## Risks / Trade-offs

- External Stitch image URLs could expire or load slowly -> keep the exact design URLs for fidelity, with dark placeholder surfaces and alt text so layout remains stable.
- Material Symbols are loaded from Google Fonts -> use the same icon family as Stitch to preserve fidelity, while keeping buttons accessible with labels.
- Vercel and GitHub Pages builds need different base paths -> make the Vite base configurable through `VITE_BASE_PATH`.
- Node 18 may trigger modern package engine warnings -> use dependency versions compatible with the local environment where possible and verify with `npm run build`.
