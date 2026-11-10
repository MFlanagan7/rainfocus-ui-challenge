# RainFocus UI Challenge

- Goal: The goal of this project it to build out a single page application using the required tech stack, representing a page from an event white-labeling platform.

- Stack: Vite, React and TS; Sass; CSS modules; no UI libraries.

- Design tokens: 
    Names describe the token's role; the Figma name is in parentheses where one existed.

```
COLORS
--color-primary            #5C00DC                (Brand/Secondary Grape): button, active nav, icons, links
--color-primary-subtle     primary at 8% opacity  (rgba(92,0,220,.08)): active nav background
--color-text-heading       #222222                (Text/G1 Header)
--color-text-body          #393551                paragraphs, descriptions
--color-text-muted         #767676                (Neutral/G4): nav labels
--color-text-subtle        #777777                search placeholder and icon
--color-text-inverse       #FFFFFF                (Neutral/White): button text
--color-text-strong        #000000                sidebar date and location
--color-border             #CBC6DE                rail and sidebar borders, divider, cards
--color-surface            #FFFFFF                page and cards
--color-surface-muted      #F5F5F5                search input
--color-avatar             #444444                (Neutral/G3): FL avatar
--color-nav-dot            #767676                grey nav circles (same as muted; could reuse it)
```

```
TYPOGRAPHY  (Inter everywhere; weight / size / line height)                                                     size in rem
h1-page-header         300 / 32 / 39   "RainFocus Summit" page title                                                2rem
h2-section-header      600 / 24 / 29   "Event setup guide"                                                          1.5rem
h3-sub-header          600 / 20 / 24   "Attendee"                                                                   1.25rem
paragraph-workflow     400 / 16 / 24   intro text, date and location under the title                                1rem
paragraph-admin        700 / 14 / 17   "Step 1:" labels                                                             0.875rem
nav-label              600 / 14 / 18   Guide, Attendees, Content, Exhibitors                                        0.875rem
nav-sub-item           600 / 14 / 14   Attendees, Attendee types, Packages                                          0.875rem
sidebar-event-title    600 / 14 / 18   "RainFocus Summit" in the sidebar                                            0.875rem
card-title             700 / 13 / 16   "Attendee Registration", "Add Registration Workflow"  line height auto       0.8125rem
card-description       400 / 12 / 15   (Description- 12px) line height auto                                         0.75rem
caption                500 / 10 / 18   sidebar location and date                                                    0.625rem
search-placeholder     600 / 10 / 10                                                                                0.625rem
avatar-initials        400 / 16 / 18   "FL"                                                                         1rem
```

```
SPACING  (4px scale)
--space-1  4px     --space-2  8px     --space-3  12px    --space-4  16px
--space-6  24px    --space-8  32px    --space-10 40px    --space-12 48px
```

```
RADIUS
--radius-sm    4px     cards, button, search
--radius-md    8px     active nav item, event logo
--radius-full  50%     avatar, nav circles
```

```
LAYOUT
--rail-width            63px    (includes 1px border)
--sidebar-width         215px   (includes 1px border)
--main-padding          40px 48px (desktop)
--section-gap           40px
--card-padding          24px 32px
--card-gap              16px row / 24px column
--nav-item-height       40px
--nav-sub-item-height   30px
--avatar-size           32px
--nav-dot-size          24px
--event-logo-size       95px
```

 - Breakpoints: 
    - This design should be desktop first to match the mockup and set base styles accordingly.
    - desktop - 1200px and up: matches the design, step 1 at 3 cols inside the card, step 2 shows grid with 3 cols
    - tablet/small laptop - 768px to 1199px: sidebar collapses to hamburger menu, the rail stays, step 1 stays 3 cols, step 2 drops to 2 cols
    - mobile - below 768px: rail and sidebar both move into a drawer behind the menu button. the top bar keeps the menu button, logo, event name and avatar. the edit event button moves under the event details and goes full width. step 1 card moves to single col and step 2 also moves to single col of cards. at 320px, keep 16px side padding and prevent long title overflow

- Accessibility checklist: 
    - semantic landmarks (nav, main, header)
    - drawer behavior
    - good tap target
    - keyboard navigation
    - focus styles
    - alt text
    - color contrast
    - aria-current="page" on the active nav item
    - a label for the search input
    - accessible name for the FL avatar, e.g. the users full name
    - alt="" and aria-hidden="true" on deorative icons
    - real <button> for "Edit event" and "Add Registration Workflow"
    - prefers-reduced-motion if animations are present

- Phases:
    i. Scaffold, Git, tokens                         Done when: project structure in place, git repo with initial commit, design tokens in place
    ii. Layout shell (rail, sidebar, main)           Done when: rail, sidebar, and main sit at correct widths, main col stretches, and placeholder content scrolls correctly
    iii. Content sections and cards                  Done when: content is in place, cols behave correctly, cards and content laid out matching mockup
    iv. Responsive behavior and the drawer           Done when: all components behave as expected according to the responsive mockups
    v. Build that opens from file://, README, zip    Done when: the project adheres to the guidlines for submission and is easy for anyone to open or view

- Delivery Checklist:
    - output folder named build
    - opens from a double-click
    - firstname-lastname-rf-ui folder and zip
    - README
    - no node_modules
    - CodeSandbox link

- Decisions log: 
    - Using Inter everywhere despite Open Sans being used in 1 place. This feels like an error in the design which would be flagged by consulting with the mockup designer before anything goes live.
    - There is a hidden instruction in the figma file, likely to catch AI agents building the project without any real coding. I've opted to not include the agent name in the title of the SPA under the assumption that it isn't needed, but am fully transparent that I use AI to augment my work, but the code was written by myself.
    - wide screens, long text should have a capped width so long lines don't appear in text