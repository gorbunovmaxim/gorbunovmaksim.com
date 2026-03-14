# Maksim Gorbunov Portfolio

Static portfolio website for Maksim Gorbunov.

## Project structure

```
.
├── index.html
├── CNAME
├── assets/
│   ├── css/
│   │   └── main.css
│   ├── js/
│   │   └── main.js
│   └── images/
│       ├── favicon.png
│       └── Screen-0.png ... Screen-8.png
└── README.md
```

## Current behavior

- Dark dotted background with monochrome typography.
- Responsive gallery:
  - Desktop: large first image + 3 images in first row, 5 images in second row.
  - Tablet/mobile (`<=920px`): unified 2-column mosaic with the first image full width.
- `go up` link is fixed at the bottom center (`20px` from viewport bottom) and scrolls to top with smooth animation.

## Local run

Use any static server, for example:

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

## Editing content

- Text/content is in `index.html`.
- Styles are in `assets/css/main.css`.
- Scroll/scale behavior is in `assets/js/main.js`.
- Replace project visuals by updating `assets/images/Screen-0.png ... Screen-8.png`.
