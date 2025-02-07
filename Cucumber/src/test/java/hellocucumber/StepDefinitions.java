package hellocucumber;

import io.cucumber.java.en.*;

import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import java.time.Duration;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

public class StepDefinitions {

    //    private final static String chromeDriverPath = "C:\\Users\\noamt\\AS4\\2025-mbt-g\\Selenium\\chromedriver.exe"; // Noam
    private final static String chromeDriverPath = "C:\\Users\\vladr\\2025-mbt-g\\Selenium\\chromedriver.exe"; // Liel
    private WebDriver driver;
    private WebDriverWait wait;
    private String input;
    private String changedData;

    /**
     * Sets up the initial state for customer-focused tests
     */
    @Given("customer is in Home Page")
    public void customer_is_in_Home_Page() {
        // Initialize ChromeDriver with the specified path
        System.setProperty("webdriver.chrome.driver", chromeDriverPath);
        this.driver = new ChromeDriver();
        this.wait = new WebDriverWait(driver, Duration.ofSeconds(500));

        // Open the browser and navigate to openCart home page
        driver.get("http://localhost/opencart/upload");
        // Wait for page load
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

    }
    /**
     * Handles product selection and addition to cart
     * @param item The product name to search for and select
     */
    @When("customer selects {string} from the product list")
    public void customer_selects_item_from_the_product_list(String item) {
        input = item;
        // Locate and interact with search box
        WebElement search = wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//body/header[1]/div[1]/div[1]/div[2]/div[1]/input[1]")));
        search.clear();
        search.sendKeys(input);
        search.sendKeys(Keys.ENTER);
        // Wait for product to appear and add it to cart
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector(".product-thumb"))); // wait for the product to load
        WebElement addToCartButton = driver.findElement(By.xpath("//body/main[1]/div[2]/div[1]/div[1]/div[5]/div[1]/div[1]/div[2]/form[1]/div[1]/button[1]/i[1]"));
        // Scroll to make button visible and click it
        ((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntoView(true);", addToCartButton);
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        addToCartButton.click();
    }

    /**
     * Verifies successful addition of item to cart
     */
    @Then("the item successfully has been added to checkout")
    public void the_item_successfully_has_been_added_to_checkout() {
        // Verify success message appears
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector(".alert-success")));
        WebElement successMessage = driver.findElement(By.cssSelector(".alert-success"));
        assertTrue(successMessage.getText().contains("Success"), "Item was not added to cart successfully");
        assertTrue(successMessage.getText().contains(input), "Item was not added to cart successfully");
        // Scroll to top of page
        ((JavascriptExecutor) driver).executeScript("window.scrollTo(0, 0);");
        // Wait for cart update
        try {
            Thread.sleep(2000);  // Give time for the scroll and cart to update
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        // Verify cart quantity is updated
        WebElement cartTotal = wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//body/header[1]/div[1]/div[1]/div[3]/div[1]/button[1]")));
        String cartQuantity = cartTotal.getText().replaceAll("[^0-9]", "").split("")[0];
        assertEquals("1", cartQuantity, "Cart quantity should be 1");
        driver.quit();
    }

    /**
     * Sets up the initial state for admin-focused tests
     */
    @Given("admin in admin logging page")
    public void admin_in_admin_logging_page() {
        // Initialize ChromeDriver for admin session
        System.setProperty("webdriver.chrome.driver", chromeDriverPath);
        this.driver = new ChromeDriver();
        this.wait = new WebDriverWait(driver, Duration.ofSeconds(500));
        // Navigate to admin login page
        driver.get("http://localhost/opencart//upload/admin/");

        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    /**
     * Handles admin login process
     * @param username Admin username
     * @param password Admin password
     */
    @When("admin is logged in with {string} and {string}")
    public void admin_is_logged_in_with_and(String username, String password) {
        // Enter username
        input = username;
        WebElement userNameBox = wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//body/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/form[1]/div[1]/div[1]/input[1]")));
        userNameBox.clear();
        userNameBox.sendKeys(input);
        userNameBox.sendKeys(Keys.ENTER);
        // Enter password
        input = password;
        WebElement passwordBox = wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//body/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/form[1]/div[2]/div[1]/input[1]")));
        passwordBox.clear();
        passwordBox.sendKeys(input);
        passwordBox.sendKeys(Keys.ENTER);
        // Click login button
        WebElement loginButton = wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//body/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/form[1]/div[3]/button[1]")));
        ((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntoView(true);", loginButton);
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        loginButton.click();
    }

    /**
     * Updates product availability date in admin panel
     */
    @And("admin changes the Date Available of the product to a future date")
    public void admin_changes_the_date_available_of_the_product_to_a_future_date() {
        // Handle any error messages that may appear
        WebElement ignoreErrorMsg = wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//body/div[1]/div[2]/div[3]")));
        ignoreErrorMsg.click();
        // Navigate to catalog and products
        WebElement catalog = wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//body/div[1]/nav[1]/ul[1]/li[2]/a[1]")));
        catalog.click();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        // Access products section
        WebElement products = wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//body/div[1]/nav[1]/ul[1]/li[2]/ul[1]/li[2]/a[1]")));
//        products.click();
        ((JavascriptExecutor) driver).executeScript("arguments[0].click();", products);
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        // Edit iPhone product
        WebElement iphoneEditButton = wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//body/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[2]/form[1]/div[1]/table[1]/tbody[1]/tr[6]/td[7]/div[1]/a[1]")));
        ((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntoView(true);", iphoneEditButton);
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        iphoneEditButton.click();
        // Access data tab
        WebElement dataButton = wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//body/div[1]/div[2]/div[2]/div[1]/div[2]/form[1]/ul[1]/li[2]/a[1]")));
        dataButton.click();
        // Update availability date
        WebElement data_available = wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//body/div[1]/div[2]/div[2]/div[1]/div[2]/form[1]/div[1]/div[2]/fieldset[3]/div[5]/div[1]/div[1]/input[1]")));
        ((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntoView(true);", data_available);
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }data_available.clear();
        data_available.sendKeys("2025-06-01");
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        changedData = data_available.getAttribute("value");
        // Save changes
        WebElement saveButton = wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//body/div[1]/div[2]/div[1]/div[1]/div[1]/button[1]")));
        ((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntoView(true);", saveButton);
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        saveButton.click();

    }

    /**
     * Verifies successful date change in admin panel
     */
    @Then("the Date Available changed successfully to a future date in the admin browse")
    public void the_date_available_changed_successfully_to_a_future_date_in_the_admin_browse() {
        // Verify success message
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector(".alert-success")));
        WebElement successMessage = driver.findElement(By.cssSelector(".alert-success"));
        assertTrue(successMessage.getText().contains("Success"), "You have not modified products");
        driver.quit();
    }

    /**
     * Verifies product is not visible to customers after date change
     */
    @And("the customer does not sees the changed product")
    public void the_customer_does_not_sees_the_changed_product() {
        // Start new customer session
        System.setProperty("webdriver.chrome.driver", chromeDriverPath);
        this.driver = new ChromeDriver();
        this.wait = new WebDriverWait(driver, Duration.ofSeconds(500));
        driver.get("http://localhost/opencart/upload");
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        // Search for iPhone
        WebElement search = wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//body/header[1]/div[1]/div[1]/div[2]/div[1]/input[1]")));
        search.clear();
        search.sendKeys("iPhone");
        search.sendKeys(Keys.ENTER);
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        // Verify product is not visible
        WebElement noResults = wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//body/main[1]/div[2]/div[1]/div[1]/p[1]")));
        assertTrue(noResults.getText().contains("There is no product that matches the search criteria."), "Product is still visible");
        driver.quit(); // close the browser
    }

}