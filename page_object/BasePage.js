const { By, Key, until } = require('selenium-webdriver');

//locators of modules {Home - Reviews - Profile - Prome Codes - Sign Out}
const MODULES = async function(module){
    return  By.xpath("//span[text()='"+module+"']")
}


class BasePage {
    constructor(driver) {
        this.driver = driver
    }

    async navigateToUrl(url) {
        return await this.driver.get(url)
    }

    async click (locator) {
        return await this.driver.findElement(locator).click()
    }

    async type (locator, inputText) {
        return await this.driver.findElement(locator).sendKeys(inputText)
    }

    async getUrl (){
        return await this.driver.getCurrentUrl()
    }

    async navigateToModule (module){
        await this.driver.wait(until.elementLocated(await MODULES(module)),10000)
        return await this.driver.findElement(await MODULES(module)).click()
    }

    

}
module.exports = BasePage