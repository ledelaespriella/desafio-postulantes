const puppeteer = require('puppeteer');

const startBrowser = async () => {
	try {
		console.log("Opening the browser......");
		const browser = await puppeteer.launch({
			args: ["--disable-setuid-sandbox"],
			'ignoreHTTPSErrors': true
		});
		return browser;
	} catch (err) {
		console.log("Could not create a browser instance => : ", err);
	}
}

module.exports = {
	startBrowser
};
