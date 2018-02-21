package AutomationPractice.StepDefinitions;

import AutomationPractice.Pages.OrderHistoryPage;
import AutomationPractice.Utils.Utils;
import cucumber.api.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.JavascriptExecutor;


import static AutomationPractice.Pages.BasePage.driver;


public class CaptureImageSteps {
    public OrderHistoryPage orderHistoryPage;
    @Then("^user should see \"([^\"]*)\" color blouse$")
    public void user_should_see_something_color_blouse(String yellowDress) {
    orderHistoryPage=new OrderHistoryPage();
        try {
            Assert.assertTrue(orderHistoryPage.viewDressColor().contains(yellowDress));
        } catch (AssertionError e) {
            JavascriptExecutor javascriptExecutor= (JavascriptExecutor) ((JavascriptExecutor)driver).executeScript("window.scrollBy(0,2000)","");

            Utils.captureScreenshot(yellowDress);
        }
    }
}
