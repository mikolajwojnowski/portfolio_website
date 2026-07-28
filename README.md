# My Website

Single-repo setup for GitHub Pages user site:

- Repository: `mikolajwojnowski.github.io`
- URL: https://mikolajwojnowski.github.io
- Publish source: `main` branch, `/docs` folder

## Publish

Build and refresh the `docs` folder:

```bash
npm run pages
```

Then commit and push:

```bash
git add docs package.json README.md
git commit -m "Update website"
git push
```

## GitHub Pages Settings

In GitHub repository settings:

1. Go to Pages.
2. Set Source to Deploy from a branch.
3. Set Branch to `main`.
4. Set Folder to `/docs`.
