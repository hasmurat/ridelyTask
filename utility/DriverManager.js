const { Builder, By, Key} = require("selenium-webdriver");
require("chromedriver")
const config = require("../utility/Config")

//Builds WebDriver object for tests

var buildDriver = function(){
    return  new Builder().forBrowser(config.BROWSER).build();
}

module.exports.buildDriver = buildDriver;