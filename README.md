# Macbeth: the group chat

A school creative project imagining Hecate and the three witches discussing Macbeth in Act 3, Scene 5.

- Fifteen-message conversation with scene references and a downloadable transcript.
- Responsive messaging interface and scene notes.
- An optional question view with prepared replies grounded in Acts 1–3. It does not use live AI.

## GitHub Pages

The site is published from the root of the `main` branch. Changes to `index.html`, `style.css`, or `app.js` are published automatically after pushing to `main`. `.nojekyll` keeps publication buildless.

## Local preview

Run `python3 -m http.server 3001` and open http://localhost:3001.

## Verification

The HTML, CSS, and JavaScript are exact copies of the browser-verified site, including left-aligned witch replies. JavaScript syntax is checked with `node --check app.js`. Desktop and phone layouts, navigation, scene notes, replies, and the fifteen-message transcript were verified before migration.

The requested pnpm TypeScript and lint commands do not apply: this project contains no web workspace or package.json. Port 3000 serves an unrelated application; the site was manually checked using port 3001.

## Text

Modern creative adaptation of Macbeth. Only marked quotations are verbatim. References link to the Folger Shakespeare Library.
