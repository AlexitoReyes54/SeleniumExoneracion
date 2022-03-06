const { By } = require('selenium-webdriver');
const edge = require("@microsoft/edge-selenium-tools");
 
// EVIROMENT VARIABLES
let webUrl = 'http://localhost:4200/';
let driverLocation = 'C:/users/A. Reyes/Downloads/msedgedriver.exe' 

async function start() {

    // Driver dependencies and configuration
    const service = new edge.ServiceBuilder(driverLocation).build();
    var options = new edge.Options();
    var driver = edge.Driver.createSession(options, service);

    try {

      // Load your web
      driver.get(webUrl)

      /* Elements to interact with */
      let name = await driver.findElement(By.name('name1'));
      let radio = await driver.findElement(By.id('radio1'));  // With radio use ID instead, all radios have the same name
      let check1 = await driver.findElement(By.name('check1')); 
      let check2 = await driver.findElement(By.name('check2'));
      let btn = await driver.findElement(By.name('btn1'));

      /* Elements interactions */
      await name.sendKeys('Alexander Reyes');
      await radio.click()
      await check1.click()
      await check2.click()
      await btn.click()

    } catch (error) {
      console.log('error at opening browser');
    }

}
start()
