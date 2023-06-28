import puppeteer from 'puppeteer';

async function launchWebSite(){
   const browser = await puppeteer.launch()
   const page = await browser.newPage()
   page.goto('https://example.com');
   await browser.close()
}
launchWebSite();