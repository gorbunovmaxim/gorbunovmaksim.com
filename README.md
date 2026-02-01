# Maksim Gorbunov Portfolio Website

A minimalist portfolio website for Product Designer Maksim Gorbunov, implemented from Figma design.

## Structure

- `index.html` - Main HTML file
- `styles.css` - Stylesheet with responsive design
- `script.js` - Layout and scroll behavior
- `logo.png` - Logo image

## Features

- Clean, modern dark theme (#111 background)
- Responsive layout that adapts to different screen sizes
- Background grid pattern for visual interest
- Smooth scroll to top functionality
- Project showcase section with image placeholders
- Social media links in footer

## Fonts

The website uses Google Fonts:
- **Geist** (ExtraLight 200, Medium 500) - Main text
- **Geist Mono** (ExtraLight 200) - Dates and monospace text
- **Noto Sans Symbols 2** - For special characters (✦)

## Customization

### Adding Projects

To add your own project content:

1. Replace "Project Title" with your project name
2. Update the date range "1995 — Now"
3. Modify the project description text
4. Replace the `.image-placeholder` divs with actual images:
   ```html
   <img src="your-image.jpg" alt="Project description">
   ```

### Adding Social Links

Update the footer links with your actual social media profiles:
```html
<a href="https://instagram.com/yourprofile" class="footer-link">Instagram</a>
```

### Color Customization

Main colors are defined in CSS:
- Background: `#111`
- Text: `#e5e5ea`
- Line color: `#1F1F1F` (defined as `--stroke-0` CSS variable)

## Development

Simply open `index.html` in a web browser to view the website. No build process required.

## Browser Support

Works in all modern browsers (Chrome, Firefox, Safari, Edge).
