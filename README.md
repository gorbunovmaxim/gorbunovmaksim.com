# Maksim Gorbunov Portfolio Website

A minimalist portfolio website for Product Designer Maksim Gorbunov, implemented from Figma design.

## Structure

```
├── index.html          # Entry point
├── README.md
├── .gitignore
├── CNAME               # Custom domain for GitHub Pages (gorbunovmaksim.com)
└── assets/
    ├── css/
    │   └── main.css    # Styles
    ├── js/
    │   └── main.js     # Layout & behavior
    └── images/         # Screenshots (Screen-1…5.png) + favicon.png
```

## Features

- Clean, modern dark theme (#111 background)
- Responsive layout that adapts to different screen sizes
- Background grid pattern for visual interest
- Smooth scroll to top functionality
- Project showcase section with images
- Social media links in footer

## Fonts

The website uses Google Fonts:
- **Geist** (200, 300) - Main text
- **Geist Mono** (200) - Dates and monospace text

## Customization

### Adding Projects

To add your own project content:

1. Replace "Project Title" with your project name
2. Update the date range "1995 — Now"
3. Modify the project description text
4. Replace images in `.image-placeholder` divs or add new ones:
   ```html
   <div class="image-placeholder"><img src="assets/images/your-image.png" alt="Description"></div>
   ```

### Adding Social Links

Update the footer links with your actual social media profiles:
```html
<a href="https://instagram.com/yourprofile" class="footer-link">Instagram</a>
```

### Color Customization

Main colors are defined in CSS:
- Background: `#111`
- Text: `#eee`
- Lines / strokes: `#181818` (variable `--stroke-0`)

## Development

Simply open `index.html` in a web browser to view the website. No build process required.

## Browser Support

Works in all modern browsers (Chrome, Firefox, Safari, Edge).
