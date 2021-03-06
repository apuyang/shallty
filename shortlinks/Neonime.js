const Browser = require('../Browser')
const Util = require('../utils/utils')
const Handler = require('../exceptions/Handler')

class Neonime {
    constructor() {
        this.marker = 'neonime.org'
    }

    async parse(link) {
        const newBrowser = await Browser.newBrowser()
        const page = await Browser.newOptimizedPage(newBrowser.browser)

        try {
            link = decodeURIComponent(link)
            await page.goto(link)

            await Util.sleep(2500)
            const currentUrl = page.url()
            if (!currentUrl.includes('xmaster')) {
                await page.close()
                await Browser.destroyBrowser(newBrowser.id)

                return {
                    error: true,
                    message: 'Something went wrong. Unknown reason.'
                }
            }

            await Util.sleep(9000)
            await page.click('#generater')
            await Util.sleep(9500)
            await page.click('#showlink')

            const finalPage = await Browser.getNewTabPage(page, false, newBrowser.browser)
            await Util.sleep(2000)
            const url = finalPage.url()

            await page.close()
            await finalPage.close()
            await Browser.destroyBrowser(newBrowser.id)

            return {
                url: url
            }
        } catch (error) {
            await page.close()
            await Browser.destroyBrowser(newBrowser.id)

            return Handler.error(error)
        }
    }
}

module.exports = new Neonime