const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(`file:${path.join(__dirname, 'index.html')}`);
  await page.pdf({
    path: 'gtiminskis-resume.pdf',
    format: 'A4',
    margin: {
      top: "10px",
      left: "0",
      right: "0",
      bottom: "10px"
    }
  });
  await browser.close();
})();