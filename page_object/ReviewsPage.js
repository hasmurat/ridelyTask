const { By, until, locateWith } = require("selenium-webdriver");
const BasePage = require("./BasePage");

//locators of Review Links {Action Required - Waiting for user - Completed}
const REVIEWS_LINKS = async function (link) {
    return By.xpath("//*[contains(text(),'" + link + "')]")
}

//locator of user who asks questions
const USERS = async function (user) {
    return By.xpath("(//td[contains(text(),'" + user + "')])[1]")
}

const ADD_RESPONSE_INPUT = By.className("review-details-add-response-form-textarea")
const SEND_BUTTON = By.css(".mat-focus-indicator.review-details-add-response-media-btn.mat-raised-button.mat-button-base.mat-primary")
const LATEST_RESPONSE = By.xpath("(//div[@class='review-details-message-question'])[last()]")
const ADD_IMAGE_BUTTON = By.css("#imagesUpload")
const LATEST_IMAGE = By.xpath("(//img)[last()]")




class ReviewsPage extends BasePage {
    constructor(driver) {
        super(driver)
        const A = By.partialLinkText("Response sent to user.")
    }

    async navigateToReviewsLinks(link) {
        await this.driver.wait(until.elementLocated(await REVIEWS_LINKS(link)), 10000)
        return await this.driver.findElement(await REVIEWS_LINKS(link)).click()
    }

    async selectUser(user) {
        await this.driver.wait(until.elementLocated(await USERS(user)), 10000)
        return await this.driver.findElement(await USERS(user)).click()
    }

    async typeResponse(text) {
        await this.driver.wait(until.elementLocated(ADD_RESPONSE_INPUT), 10000)
        await this.click(ADD_RESPONSE_INPUT)
        await this.type(ADD_RESPONSE_INPUT, text)
    }

    async clickSendButton() {
        await this.click(SEND_BUTTON)
      
    }

    async verifyLatestResponse(text) {
        await this.driver.findElement(LATEST_RESPONSE).getText().then(function (value) {
            value.should.equal(text);
        })
    }

    async addImage(path) {
        await this.type(ADD_IMAGE_BUTTON, path)      
    }

    async verifyLatestImage(){
        await this.driver.findElement(LATEST_IMAGE).should("be.visible")
    }

}
module.exports = ReviewsPage