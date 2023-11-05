const { Builder, By } = require("selenium-webdriver");
require("chromedriver");

async function createPlan() {
  const driver = new Builder().forBrowser("chrome").build();
  try {
    const plan = {
      name: "Plano Individual",
      value: 150,
    };

    await driver.get("http://localhost:3001");
    console.log("Navigated to the list page.");

    const createBtn = await driver.findElement(By.id("create"));
    await createBtn.click();
    console.log("Moved to create plan screen.");

    const nameBox = await driver.findElement(By.id("name"));
    await nameBox.sendKeys(plan.name);
    console.log("Entered name successfully.");

    const valueBox = await driver.findElement(By.id("value"));
    await valueBox.sendKeys(plan.value);
    console.log("Entered value successfully.");

    const saveBtn = await driver.findElement(By.id("save"));
    await saveBtn.click();
    console.log("Successfully created plan!");
  } catch (err) {
    console.error("Error occurred: ", err);
  }
}

createPlan();
