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
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

public class StepDefinitions {

    //    private final static String chromeDriverPath = "C:\\Users\\noamt\\AS4\\2025-mbt-g\\Selenium\\chromedriver.exe"; // Noam
    private final static String chromeDriverPath = "C:\\Users\\vladr\\2025-mbt-g\\Selenium\\chromedriver.exe"; // Liel
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

    @When("customer selects {string} from the product list")
    public void customer_selects_item_from_the_product_list(String item) {
        // search for the search box, then add the item (our input), click enter
        // then wait for the product to load, scroll to the add to cart button and click it
        input = item;
        WebElement search = wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//body/header[1]/div[1]/div[1]/div[2]/div[1]/input[1]")));
        search.clear();
        search.sendKeys(input);
        search.sendKeys(Keys.ENTER);

        wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector(".product-thumb"))); // wait for the product to load
        WebElement addToCartButton = driver.findElement(By.xpath("//body/main[1]/div[2]/div[1]/div[1]/div[5]/div[1]/div[1]/div[2]/form[1]/div[1]/button[1]/i[1]"));
        ((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntoView(true);", addToCartButton);
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        addToCartButton.click();
    }

    @Then("the item successfully has been added to checkout")
    public void the_item_successfully_has_been_added_to_checkout() {
        // check if we get the success message that says the item was added to the cart
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector(".alert-success")));
        WebElement successMessage = driver.findElement(By.cssSelector(".alert-success"));
        assertTrue(successMessage.getText().contains("Success"), "Item was not added to cart successfully");
        assertTrue(successMessage.getText().contains(input), "Item was not added to cart successfully");
    }

    @Given("admin in admin logging page")
    public void admin_in_admin_logging_page() {
        System.setProperty("webdriver.chrome.driver", chromeDriverPath);
        this.driver = new ChromeDriver();
        this.wait = new WebDriverWait(driver, Duration.ofSeconds(500));

        // TODO: Open the browser and navigate to openCart admin page
        driver.get("http://localhost/opencart//");

        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

//    @When("admin is logged in with {string} and {string}")
//    public void admin_is_logged_in_with_and(String username, String password) {
//        // find the username and password fields, fill them with the given input and click login
//        WebElement usernameField = wait.until(ExpectedConditions.presenceOfElementLocated(By.id("input-username")));
//        WebElement passwordField = wait.until(ExpectedConditions.presenceOfElementLocated(By.id("input-password")));
//        WebElement loginButton = wait.until(ExpectedConditions.presenceOfElementLocated(By.cssSelector(".btn-primary")));
//
//        usernameField.clear();
//        usernameField.sendKeys(username);
//        passwordField.clear();
//        passwordField.sendKeys(password);
//        loginButton.click();
//    }
}
