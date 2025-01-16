package hellocucumber;

import io.cucumber.java.en.*;

import io.cucumber.java.en.*;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.junit.jupiter.api.Assertions.*;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import org.junit.jupiter.api.Assertions.*;

import javax.swing.plaf.PanelUI;
import java.time.Duration;

public class StepDefinitions {

    private final static String chromeDriverPath = "C:\\Users\\noamt\\AS4\\2025-mbt-g\\Selenium\\chromedriver.exe";
    private WebDriver driver;
    private WebDriverWait wait;
    private String input;
    private String changedDate;


    @Given("customer is in Home Page")
    public void customer_is_in_Home_Page() {
        System.setProperty("webdriver.chrome.driver", chromeDriverPath);
        this.driver = new ChromeDriver();
        this.wait = new WebDriverWait(driver, Duration.ofSeconds(500));

        // Open the browser and navigate to openCart home page
        driver.get("http://localhost/opencart/");

        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

    }

    @When("customer checkouts an item")
    public void customer_checkouts_an_item() {
        //Liel
    }

    @Then("the item successfully has been added to checkout")
    public void the_item_successfully_has_been_added_to_checkout() {
        //Liel
    }








}
