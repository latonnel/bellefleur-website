BELLEFLEUR SALON WEBSITE

PREVIEW: double-click index.html to open it in a browser.
(For a live-reload preview: install VS Code + "Live Server", right-click index.html > Open with Live Server.)

EDIT:
1. script.js (top of file): Booksy link, phone, email, address, hours, social links. Every "Book an Appointment" button updates automatically.
2. index.html: look for <!-- EDIT --> and <!-- REPLACE --> comments. Change service text, team members and gallery photos there.
3. Photos: put images in the images/ folder, then change the img src and alt. Remove data-label from that figure to hide the "placeholder" badge.
4. styles.css (top of file): colours and fonts.

PUBLISH (Cloudflare Pages): Workers & Pages > Create > Pages > Upload assets, then drag in this whole folder. Build settings are not needed.
