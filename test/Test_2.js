const DriverManager = require("../utility/DriverManager");
const config = require("../utility/Config")
const LoginPage = require("../page_object/LoginPage");
const { By, until } = require("selenium-webdriver");
var should = require("chai").should();
const HomePage = require("../page_object/HomePage")
const ReviewsPage = require("../page_object/ReviewsPage")



let driver = DriverManager.buildDriver()
let loginPage = new LoginPage(driver)
let homePage = new HomePage(driver)
let reviewsPage = new ReviewsPage(driver)
let path = require("path")
let imagePath = path.join(__dirname+'\\Screenshot.png') 


describe("Adding trainer response to user request with media content", async function () {

    this.timeout(30000)
    before(async function () {
        await loginPage.navigateToUrl(config.BASE_URL)
        await driver.manage().window().maximize()
        await driver.manage().deleteAllCookies();
        await driver.manage().setTimeouts({ implicit: 10000 });
    })
    
    after(async function () {
        await driver.quit();
    
    })
    
    

    it("Login the application", async function () {
        await loginPage.loginApp(config.EMAIL, config.PASSWORD)
    })

    it("Click the Review Module", async function () {  
        await homePage.navigateToModule("Reviews")  
    })

    it("Click Wait for user link", async function () {
        await reviewsPage.navigateToReviewsLinks("Waiting for user")
    })

     it("Select user who asks question", async function () {
        await driver.wait(until.elementLocated(By.xpath("(//td[text()='Darek Ridely'])[1]")), 10000)
        await reviewsPage.selectUser("Darek Ridely")
    })

    it("Send Response with media content and verify it", async function () {
       
        await reviewsPage.typeResponse("No heaven can heaven be, if my horse is not there to welcome me.")
        await reviewsPage.addImage(imagePath)
        
        await reviewsPage.clickSendButton().then(() => {
            reviewsPage.verifyLatestResponse("No heaven can heaven be, if my horse is not there to welcome me.")
            reviewsPage.verifyLatestImage()
        })

    })






})