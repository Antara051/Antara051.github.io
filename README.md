# Raihana Antara — Academic Website

Static, responsive academic portfolio for GitHub Pages. No build step required.

## Preview locally
Open `index.html` in a browser. Google Fonts require an internet connection.

## Publish on GitHub Pages
1. Create or open the repository `YOUR-USERNAME.github.io`.
2. Upload `index.html`, `styles.css`, `script.js`, and the `assets` folder to the repository root.
3. Under **Settings → Pages**, choose **Deploy from a branch**, `main`, `/(root)`.
4. Visit `https://YOUR-USERNAME.github.io/` after deployment.

## Update your website
- Text, sections, publication records and links: `index.html`.
- Colors, layout, visual cards and typography: `styles.css`.
- Mobile navigation: `script.js`.
- Replace the portrait placeholder with your own image. Save your portrait as `assets/portrait.jpg`, then replace the `portrait-placeholder` div in `index.html` with `<img class="portrait-photo" src="assets/portrait.jpg" alt="Portrait of Raihana Shams Islam Antara">` and add `.portrait-photo{width:100%;height:310px;object-fit:cover;border-radius:8px}` to `styles.css`.
- Project imagery is CSS illustration, not a claim to show authentic mission photographs.
- Add verified publications, links, and preferred contact details before publishing.

To replace same-named files in GitHub, upload the updated files into the same paths and commit the changes. Do not upload the containing folder itself if your Pages site serves from repository root.
