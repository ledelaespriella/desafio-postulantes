const scraperObject = {
    url: 'https://www.sii.cl/servicios_online/1047-nomina_inst_financieras-1714.html',
    async scraper(browser) {
        const page = await browser.newPage();
        console.log(`Navigating to ${this.url}...`);
        await page.goto(this.url);

        //Get the names and contents of the Tables
        const [tableName, contents] = await page.evaluate(() => {
            const table = document.querySelectorAll('#tabledatasii tbody tr')
            const titleTable = document.querySelector('#tabledatasii thead tr');
            const titleName = titleTable.innerText.split('\t');
            let data = [];
            for (let e of table) {
                e.innerText ? data.push(e.innerText.split('\t')) : '';
            }

            return [titleName, data];
        });
        // console.log(tableName);


        const dataJson = contents.map(e => (
            {
                [tableName[0]]: e[0],
                [tableName[1]]: e[1],
                [tableName[2]]: e[2],
                [tableName[3]]: e[3],
                [tableName[4]]: e[4],
                [tableName[5]]: e[5],
                [tableName[6]]: e[6],
            }
        ));

        // console.log(dataJson)
        return dataJson;

    }
}

module.exports = scraperObject;