# TIPA Laminates Calculator — GitHub Pages Upload Manual

## Files to upload
Upload these files to the root of your GitHub Pages repository:

1. `index.html`
2. `manifest.webmanifest`
3. `service-worker.js`
4. `icon-192.png`

## Upload process
1. Open your GitHub repository.
2. Click **Add file** → **Upload files**.
3. Drag the four files above into the upload area.
4. Click **Commit changes**.
5. Go to **Settings** → **Pages**.
6. Set **Branch** to `main` and **Folder** to `/ (root)`.
7. Click **Save**.
8. Open the GitHub Pages link.
9. On phone: open the link, browser menu → **Add to Home Screen / Install App**.

## Important
- Keep the files in the root folder, not inside another folder.
- If the page does not update, refresh with cache cleared or rename the cache in `service-worker.js`.
- The app uses the Laminates sheet logic and embedded data from the attached Excel file.
