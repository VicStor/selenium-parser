const { Builder, By, until } = require('selenium-webdriver')
const chrome = require('selenium-webdriver/chrome')
let o = new chrome.Options()
// o.addArguments('start-fullscreen');
o.addArguments('disable-infobars')
// o.addArguments('headless'); // running test on visual chrome browser
o.setUserPreferences({ credential_enable_service: false })

const driver = new Builder()
  .setChromeOptions(o)
  .forBrowser('chrome')
  .build()

driver.get('https://www.archiproducts.com/')
// driver.quit()

// https://medium.com/@bmshamsnahid/automated-testing-with-selenium-webdriver-and-node-js-f99f64720352
// https://github.com/bmshamsnahid/Automation-With-Selenium-And-Node.js
