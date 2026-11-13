# RainFocus UI Challenge

A single-page "Event setup guide" screen for an event platform, built from the Figma design with Vite, React, TypeScript and Sass CSS modules. No UI libraries. It's responsive from 320px up to wide desktop screens.

## Links

- **Live sandbox (StackBlitz):** https://stackblitz.com/github/MFlanagan7/rainfocus-ui-challenge
- **Repository:** https://github.com/MFlanagan7/rainfocus-ui-challenge

CodeSandbox ended GitHub repository imports in 2026, and its Devbox free credits ran out during setup. StackBlitz runs the same Vite project in the browser straight from the repo, so it's the live sandbox instead.

## Viewing the build

Double-click `build/index.html`. No server or install is needed.

Vite outputs ES module scripts by default, and browsers block those from `file://` pages. The build uses `vite-plugin-singlefile` to inline the JavaScript, CSS, font and images into one HTML file, so nothing has to be fetched. Tested in Chrome and Firefox.

## Running locally

Requires Node 24 (built with v24.22.0) and pnpm.

```bash
pnpm install
pnpm dev      # dev server at http://localhost:5173
pnpm build    # type-check, then build to build/
pnpm lint
```

## Stack

- **Vite 8**, **React 19**, **TypeScript**
- **Sass** with **CSS modules**: design tokens as CSS custom properties, Sass mixins for type styles, breakpoints and the card box
- **No UI libraries.** The only addition beyond the stack is `vite-plugin-singlefile`, a build plugin used so the build opens from a double-click
- **Inter**, self-hosted as a variable font

## Project structure

```
src/
  components/   Rail, RailEvent, Sidebar, TopBar, Card, Avatar, icons/
  data/         Event and nav data, typed (stand-ins for API responses)
  types/        Shared interfaces (EventInfo, NavItem, User)
  styles/       Tokens, mixins, reset, base styles, font
  assets/       Font, logos and illustrations
  App.tsx       Page layout, menu state and drawer behavior
```

## Responsive behavior

The layout is desktop-first, matching the mockup at 1200px and above.

| Width | Layout |
|---|---|
| **1200px and up** | Rail, sidebar and main content side by side. Step 2 cards in 3 columns. |
| **768–1199px** | The sidebar moves into a drawer opened from a ☰ top bar. The rail stays. Step 1 shows 3 columns; Step 2 cards drop to 2. |
| **Below 768px** | The rail and sidebar both move into the drawer. The top bar shows the menu button, logo, event name (truncated if long) and avatar. "Edit event" goes full width under the event details. Step 1 and Step 2 become single columns. |

- Headings scale fluidly with `clamp()`, and body text stays at 16px.
- Spacing and logo size change through token overrides in media queries, not separate class variants.
- On very wide screens the layout stays full width, as the brief asks. Text blocks are capped at `70ch` so lines stay readable.

## Accessibility

**Built in:**
- Landmarks: `header`, `nav`, `main`, `search`. The heading outline runs h1 → h5 with no skipped levels
- `aria-current="page"` on the active nav item, also used as the styling hook
- A labeled search input (a placeholder isn't a label)
- Real `<button>` elements for actions. Decorative icons use `aria-hidden` and `alt=""`
- The avatar has an accessible name (`role="img"` + `aria-label`), enforced as a required prop
- A visible `:focus-visible` outline on every interactive element
- 44px minimum tap targets on mobile controls

**The drawer:**
- `aria-expanded` and `aria-controls` on the menu button
- Closes with the ✕ button, a backdrop click or Escape
- Focus moves into the drawer on open and returns to the menu button on close
- The page behind is `inert` while it's open, and page scroll is locked
- It closes automatically if the window widens to desktop
- The slide-in animation only runs under `prefers-reduced-motion: no-preference`

**Tested with:**
- Lighthouse accessibility score: 100
- WAVE: 0 errors, 0 contrast errors
- Keyboard-only navigation at each breakpoint
- 200% and 400% browser zoom
- A long-content stress test (a much longer event name), which caught two layout bugs that are now fixed

## Design decisions and questions for the designer

- **Font:** Inter everywhere. One text layer uses Open Sans, which looks unintentional.
- **10px text:** the sidebar caption and search placeholder are kept at 10px to match the design. I'd raise readability with the designer, since WAVE flags it and many teams set 12px as a minimum.
- **"Lehi, UT" vs "Lehi, Utah":** both appear in the design. The data stores `city`, `state` and `stateCode` separately, and each view formats what it needs.
- **Copy typo:** Step 3 reads "after they've register". I kept the design's copy and flagged it here.
- **Wide screens:** full width per the brief, with a `70ch` cap on text.
- **Card heights:** Step 2 cards share a row height so the grid looks even. The "Add Registration Workflow" card follows the same rule.
- **rf logo offset:** the logo sits 4px right of center in the rail, matching Figma. It may be left over from an expanded nav state, so it's worth confirming.
- **Active state:** the sidebar highlights "Attendees" while the page shows the setup guide. I matched the design but would confirm which item should be active.
- **Drawer animation:** the rail and sidebar slide in slightly out of sync on purpose, as a stagger. Closing is instant.
- **Exported vs rendered styles:** where Figma's copied CSS disagreed with the rendered mockup (the Add card label), I followed the rendered design.

## AI usage

I used an AI assistant (Claude) as a mentor throughout this project, and I wrote the application code myself. It kept track of the spec and open tasks so I could switch between layout, accessibility, React state and styling without losing context. It also reviewed my code and explained concepts when I asked. It wasn't allowed to write project code or make architectural decisions I hadn't approved. This README was drafted with the assistant from my notes, then edited by me.

The Figma file contains a hidden instruction (white text) asking AI agents to add their name to the page `<title>`. I noticed it and chose not to follow it. I'm disclosing my AI use here instead.

## Known limitations and next steps

- Nav links and search are placeholders (`href="#"`, no filtering).
- Only the drawer's opening is animated. A closing animation would need `transition-behavior: allow-discrete` and an always-rendered backdrop.
- The 1200px breakpoint is defined in Sass and repeated in one `matchMedia` call in `App.tsx`. Both have "keep in sync" comments; a larger app would share one source.
- Data is static and typed to look like API responses. Real data would come from a fetch layer and probably Context for the current user and event.
