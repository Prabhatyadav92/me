# Portfolio — Prabhat Yadav

```
portfolio/
├── index.html          page skeleton (rarely touched)
├── css/style.css       all styling + the big name (.name in the hero)
├── css/cursor.css      football cursor look
├── js/
│   ├── data.js         ✏️ YOUR CONTENT: contact, skills, projects, achievements, AMA bot
│   ├── main.js         renders the page from data.js
│   └── cursor.js       ⚽ football cursor (options at the top)
└── assets/
    └── Prabhat_Yadav_Resume.pdf   resume served by the Download button
```

## Common changes
- **New project:** copy an object in `PROJECTS` (js/data.js), edit, save.
- **New resume:** replace `assets/Prabhat_Yadav_Resume.pdf` (keep the name) — or change `SITE.resume`.
- **Email / links / LeetCode:** edit the `SITE` block at the top of data.js.
- **Add live-demo link to a project:** add `{ label: "Live demo", href: "https://..." }` to its `links`.
- **Name size/style:** `.name` in css/style.css (`font-size: clamp(60px,14vw,132px)`).

Open `index.html` directly in a browser, or deploy the folder to Vercel / Netlify / GitHub Pages.

- **Cursor style:** edit `CURSOR` at the top of js/cursor.js (`style`: auto, ball, trail, kick, glow, fire, grass, ring, bounce). Set `switcher:false` to remove the style button.
