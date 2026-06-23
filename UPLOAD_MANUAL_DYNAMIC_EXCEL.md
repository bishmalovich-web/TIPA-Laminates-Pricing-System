# Dynamic Excel Version - Upload Manual

Upload these files to GitHub Pages root:
1. index.html
2. manifest.webmanifest
3. service-worker.js
4. icon-192.png

Optional but recommended for automatic refresh:
5. Rename the latest Excel file to model.xlsx and upload it to the same root folder.

How dynamic works:
- If model.xlsx exists next to index.html, the app tries to load it automatically.
- You can also use the app's "Load updated Excel" file picker.
- The margin field is percentage: enter 20 for 20%, 25 for 25%.
- If model.xlsx is changed in GitHub, hard refresh the browser if old cached data appears.
