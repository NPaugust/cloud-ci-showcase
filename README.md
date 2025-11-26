# Cloud CI/CD Showcase

Simple Express API + GitHub Pages site that demonstrates a complete CI/CD workflow for the Cloud Computing midterm project with Dr. Ahmad (by Avgustine Chynarbekov)

## Architecture

- **Application** – Node.js/Express API exposing `/api/info`, `/status`, `/health` plus a static landing page served from `public/`.
- **CI** – GitHub Actions run linting and unit tests on every push/PR to keep the codebase stable.
- **CD** – Documentation site (`docs/`) is published via GitHub Pages; could be extended to deploy the API container.

![CI Status](https://github.com/NPaugust/cloud-ci-showcase/actions/workflows/ci.yml/badge.svg)

## Local Development

```bash
git clone https://github.com/NPaugust/cloud-ci-showcase.git
cd cloud-ci-showcase
npm install
npm run dev
```

Visit `http://localhost:8080` to see the UI and `http://localhost:8080/status` for JSON payload.

## Testing & Quality

```bash
npm run lint
npm test
npm run format
```

## GitHub Pages

1. Go to **Settings → Pages** and pick the `docs/` folder on the `main` branch.
2. Push changes; the site updates automatically.
3. Update the badge/links in `docs/index.html` if you rename the repository.

## Extending the Project

- Add Dockerfile + publish image from CI.
- Deploy API automatically to Render/Fly.io/Azure Web App.
- Add integration tests and security scans.

## Presentation Tips

- Screenshot the Actions run (success & failure).
- Show the GitHub Pages site referencing the badge + download links.
- Include the `/status` response from deployed API.
