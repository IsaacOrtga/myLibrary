import puppeteer from 'puppeteer';

const URL = 'https://amazon.es';

async function scrapData(){
   const browser = await puppeteer.launch({
    browserWSEndpoint: `wss://chrome.browserless.io?token=821e27aa-f886-431e-93a9-14456605d63c`,
    headless: false,
   })
   const page = await browser.newPage()
   await page.goto(URL);
   await page.click('#sp-cc-accept');
   await page.select('.nav-search-dropdown', 'search-alias=stripbooks');
   await page.type('#twotabsearchtextbox', 'juego de tronos');
   await page.click('#nav-search-submit-button');
   await page.waitForSelector('.s-pagination-next');
   await page.click('.s-pagination-next');
   await page.waitForSelector('.s-pagination-next');
   const title = await page.$$eval('h2 span.a-color-base', (nodes) => 
   nodes.map((n) => n.innerText));
   const img = await page.$$eval('img.s-image', (imgs) => 
   imgs.map((img) => img.src));
   console.log(author);

//    const author = await page.$$eval()
//    await page.screenshot({path: 'example.png'});
   await browser.close();
}
scrapData();