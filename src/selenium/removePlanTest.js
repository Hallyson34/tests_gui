const { Builder, By } = require("selenium-webdriver")
require("chromedriver")

async function RemovePlanTest() {
  const driver = new Builder().forBrowser("chrome").build();

  try {
    await driver.get("http://localhost:3001");
    console.log("Navigated to the list page.");

    const planSelected = await driver.findElement(By.id("row0"));
    await planSelected.click();
    console.log("Moved to edit plan screen.");

    const removeBtn = await driver.findElement(By.id("remove"));
    await removeBtn.click();
    console.log("Removed plan.");

    try {
      // eslint-disable-next-line no-unused-vars
      const trySelectPlanAfterDelete = await driver.findElement(By.id("row0"));
      console.log("Plan not removed!");
    } catch (NoSuchElementError) {
      console.log("Removed successfully!");
    }
  } catch (error) {
    console.error("Error occurred: ", error);
  }
}

RemovePlanTest()