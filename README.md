# Selenium WebDriver & JavaScript With Page Object Model

    Ridely Project for test automation, covering UI testing
    Selenium WebDriver for automation UI teststing
    JavaScript for writing automation scripts
    Chai library for assertions
    Mochawesome library for reporting
    Page Object Model for design pattern
    Mocha Framework

    Clone the repository:
        git clone https://github.com/hasmurat/ridelyTask.git

    Install dependencies:
        npm install
        npm install selenium-webdriver
        npm install chromedriver
        npm install chai
        npm install mocha
        npm install mochawesome

    Run tests:
        npm test

Folder Structure

    ├── ...
    │
    ├mochawesome-report             # Test Report for the tests executed
    |     ├──mochawesome.html       # Right click --> Reveal in Finder for MAC (OR) Reveal in Explorer for Windows
    |
    |
    ├── page_objects                # Interaction methods and locators for each web page
    |    ├── BasePage.js            # Common methods and locators used in whole application
    |    ├── HomePage.js            # Homepage methods and locators
    │    ├── LoginPage.js           # LoginPage methods and locators
    |    ├── ReviewsPage.js         # ReviewsPage methods and locators
    |
    |
    |── test                        # Test suite
    │    ├──Test_1.js               # Automated Test Script for "Adding trainer response to user request without media content"
    |    ├──Test_2.js               # Automated Test Script for "Adding trainer response to user request with media content"
    |  
    |
    ├── Utility                     # Utility files for testing 
    |   |     
    |   |── Config.js               # Required data for testing             
    |   └── DriverManager.js        # Builds WebDriver object for tests
    
