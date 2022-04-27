const pageScraper = require('./pageScraper');
const fs = require('fs');

const scrapeAll = async (browserInstance) => {
	let browser;
	try {
		browser = await browserInstance;
		const scrapedData=await pageScraper.scraper(browser);
		await browser.close();
		console.log("Browser closed.");
		fs.writeFile("data.json", JSON.stringify(scrapedData), 'utf8', (err)=> {
		    if(err) {
		        return console.log(err.message);
		    }
		    console.log("The data has been scraped and saved successfully! View it at './data.json'");
		});
	}
	catch (err) {
		console.log("Could not resolve the browser instance => ", err);
	}
}

module.exports = (browserInstance) => scrapeAll(browserInstance)