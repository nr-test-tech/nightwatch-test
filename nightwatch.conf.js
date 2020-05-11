const seleniumServer = require("selenium-server");
const chromedriver = require("chromedriver");
const SCREENSHOT_PATH = "./screenshots/";

module.exports = {
    src_folders: ["tests"], // Where the tests are located
    "output_folder": "./output/", // reports from nightwatch
    test_settings: {// default settings (you can override with custom settings)
      default: {
        launch_url: 'https://nightwatchjs.org',
        "screenshots": {
          "enabled": true, // enables screenshots
          "path": "output/" // output folder for screenshots
        }
      },
      "globals": {
        "waitForConditionTimeout": 5000 // sometimes internet is slow so wait.
      },
  
      selenium: {// selenium configuration settings
        // Selenium Server is running locally and is managed by Nightwatch
        selenium: {
          start_process: true,// tells nightwatch to manage the selenium process
          port: 9515, // port for selenium
          server_path: './lib/selenium-server-standalone-3.141.59.jar',// path to selenium
          "log_path" : "./output/",
          cli_args: {
            
            'webdriver.chrome.driver': './lib/chromedriver.exe',// pass chromedriver path
          
          }
        },
 
      },
  
      'chrome': {
        extends: 'selenium',
        desiredCapabilities: {
          browserName: 'chrome',// use Chrome as the default browser
          chromeOptions : {
            w3c: false
       //     "args" : [ ] // pass custom CLI args to Chrome
          }
        }
      }
  
    }
  }
