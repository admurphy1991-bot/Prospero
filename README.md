# Prospero Website

Static marketing site for [Prospero](https://buildprospero.com).

## Structure

```
prospero-site/
├── public/
│   ├── index.html        # Main marketing page
│   ├── book-demo.html    # Book a demo page (Calendly embed)
│   ├── prospero-dark.png # Logo (dark/white version)
│   └── prospero-light.png# Logo (light/black version)
├── server.js             # Express server for Railway
├── package.json
└── .gitignore
```

## Deploy to Railway

1. Push this repo to GitHub
2. In Railway, click **New Project → Deploy from GitHub repo**
3. Select this repo — Railway will auto-detect Node.js
4. Done. Railway sets the PORT automatically.

## Local development

```bash
npm install
npm start
```

Then open http://localhost:3000
