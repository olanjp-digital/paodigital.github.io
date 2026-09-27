# Jose Paolo Olan — Digital Marketing Portfolio

A custom static portfolio site for **Jose Paolo Olan**, focused on Digital Marketing, Growth Marketing, Social Media Strategy, Meta Media Buying, Content, Creative, and Analytics.

## Live site

Planned GitHub Pages URL:

`https://olanjp-digital.github.io/paodigital.github.io/`

## Portfolio structure

- `index.html` — Homepage
- `work.html` — Selected case studies
- `about.html` — Experience and certifications
- `contact.html` — Contact page
- `case-studies/meta-media-buyer.html`
- `case-studies/into-university.html`
- `case-studies/surge-fitness.html`
- `case-studies/freelance-creative.html`
- `css/style.css` — Responsive visual system
- `js/main.js` — Mobile navigation, reveal animation, footer year
- `assets/images/` — Portfolio images and social preview assets

## Important content rule

The site intentionally does **not** invent campaign metrics. Where verified campaign data is not yet available, the case studies mark results as pending. Replace those placeholders only with evidence-backed figures from Ads Manager, GA4, CRM, platform analytics, or approved reports.

## Adding portfolio evidence

Before adding client or employer screenshots:

1. Remove personal/customer data.
2. Crop or redact ad account IDs and confidential details.
3. Confirm the material is allowed to be published.
4. Prefer percentage changes or ranges where exact figures are confidential.
5. Add timeframe and comparison context to every result.

## Local preview

Open `index.html` directly in a browser, or run a simple local server from the project folder:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## GitHub Pages

This repository includes a GitHub Pages Actions workflow at `.github/workflows/pages.yml`. The public CV download can be added later after uploading the approved PDF asset.

For deployment:

1. Use the public repository `paodigital.github.io`.
2. Upload/commit this project to the repository root.
3. Open **Settings → Pages**.
4. Set **Source** to **GitHub Actions** if it is not already enabled.
5. Push to `main` and allow the workflow to deploy.

## Customization

The main design variables are at the top of `css/style.css`:

```css
:root {
  --bg: #0b0f14;
  --surface: #111821;
  --text: #f4f7fa;
  --muted: #a8b3bf;
  --accent: #28c7c9;
}
```

## Contact

Jose Paolo Olan  
Email: `olan.jp@gmail.com`
