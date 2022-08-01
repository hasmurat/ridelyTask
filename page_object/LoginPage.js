const { By } = require("selenium-webdriver")
const BasePage = require("./BasePage")

const EMAIL_INPUT = By.css("input[formcontrolname='email']")
const PASSWORD_INPUT = By.css("input[formcontrolname='password']")
const SIGN_IN_BUTTON = By.css("button[type='submit']")

class LoginPage extends BasePage{
    constructor(driver){
       super(driver)
    }

async loginApp (email, password){
    await this.type(EMAIL_INPUT, email)
    await this.type(PASSWORD_INPUT, password)
    await this.click(SIGN_IN_BUTTON)
}



}
module.exports = LoginPage