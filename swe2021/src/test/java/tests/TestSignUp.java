package tests;

import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.annotations.Test;
import io.appium.java_client.MobileElement;

public class TestSignUp extends InstantiationDrivers {

  @Test
  public void testEnterSignUp() {

    WebDriverWait pageWait = new WebDriverWait(driver, 60);
    driver.findElement(By.id("com.flickr.android:id/activity_welcome_sign_button")).click();

    pageWait.until(ExpectedConditions.elementToBeClickable(
        By.xpath("//android.view.View[@content-desc=\"Sign up here.\"]/android.widget.TextView")));
    driver
        .findElement(By
            .xpath("//android.view.View[@content-desc=\"Sign up here.\"]/android.widget.TextView"))
        .click();
    // Open Sign Up Page

    pageWait.until(ExpectedConditions.presenceOfElementLocated(By.xpath(
        "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]")));
    // Wait until sign up page is Open
  }


  @Test
  public void testSignUpAge() {
    WebDriverWait elementWait = new WebDriverWait(driver, 1);

    MobileElement ageField = driver.findElement(By.xpath(
        "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View[3]/android.view.View/android.widget.EditText"));

    ageField.sendKeys("12");
    ageField.click(); // tests the age constraint: minimum of 13 years old

    MobileElement lastNameField = driver.findElement(By.xpath(
        "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View[2]/android.view.View/android.widget.EditText"));
    // verification happens after clicking on a field
    lastNameField.click();

    elementWait.until(ExpectedConditions.presenceOfElementLocated(By.xpath(
        "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View[3]/android.view.View[2]/android.view.View")));
    ageField.sendKeys("121");
    ageField.click();
    lastNameField.click();
    elementWait.until(ExpectedConditions.presenceOfElementLocated(By.xpath(
        "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View[3]/android.view.View[2]/android.view.View")));
    // test upper range of numbers (121)
    ageField.sendKeys("-1");
    ageField.click();
    lastNameField.click();
    elementWait.until(ExpectedConditions.presenceOfElementLocated(By.xpath(
        "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View[3]/android.view.View[2]/android.view.View")));
    // test negative numbers
    ageField.sendKeys("120");
    ageField.click();
    lastNameField.click();
    elementWait.until(ExpectedConditions.invisibilityOfElementLocated(By.xpath(
        "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View[3]/android.view.View[2]/android.view.View")));
    // test end end of age range (120)
    ageField.sendKeys("13");
    ageField.click();
    lastNameField.click();
    elementWait.until(ExpectedConditions.invisibilityOfElementLocated(By.xpath(
        "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View[3]/android.view.View[2]/android.view.View")));
    // test lower end of age range (13)
  }


  @Test
  public void testSignUpEMail() {
    WebDriverWait elementWait = new WebDriverWait(driver, 1);
    MobileElement emailField = driver.findElement(By.xpath(
        "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View[4]/android.view.View/android.widget.EditText"));
    MobileElement ageField = driver.findElement(By.xpath(
        "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View[3]/android.view.View/android.widget.EditText"));

    emailField.sendKeys("invalidEmailFormat");
    emailField.click();
    ageField.click();
    // test email lacking the @ domain
    elementWait.until(ExpectedConditions.presenceOfElementLocated(By.xpath(
        "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View[4]/android.view.View[2]/android.view.View")));

    emailField.sendKeys("invalidEmailFormat@valid");
    emailField.click();
    ageField.click();
    elementWait.until(ExpectedConditions.presenceOfElementLocated(By.xpath(
        "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View[4]/android.view.View[2]/android.view.View")));
    // test email with @ but lacking a .
    emailField.sendKeys("validEmailFormat@valid.com");
    emailField.click();
    ageField.click();
    elementWait.until(ExpectedConditions.invisibilityOfElementLocated(By.xpath(
        "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View[4]/android.view.View[2]/android.view.View")));
    // verify that proper email format works
  }

  @Test
  public void testSignUpPassword() {
    WebDriverWait elementWait = new WebDriverWait(driver, 1);
    MobileElement passwordField = driver.findElement(By.xpath(
        "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View[5]/android.view.View/android.widget.EditText"));

    passwordField.sendKeys("invalidpass");
    elementWait.until(ExpectedConditions.presenceOfElementLocated(By.xpath(
        "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View[5]/android.view.View[2]/android.view.View")));
    // test 11 character password
    passwordField.click();
    passwordField.clear();
    passwordField.sendKeys(" invalidpass");
    elementWait.until(ExpectedConditions.presenceOfElementLocated(By.xpath(
        "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View[5]/android.view.View[2]/android.view.View")));
    // test 11 character password with a leading space
    passwordField.click();
    passwordField.clear();
    passwordField.sendKeys(" validpasswe2");
    elementWait.until(ExpectedConditions.presenceOfElementLocated(By.xpath(
        "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.widget.Image[2]")));
    // test 12 character password with a leading space
    passwordField.click();
    passwordField.clear();
    passwordField.sendKeys("validpasswe2");
    elementWait.until(ExpectedConditions.invisibilityOfElementLocated(By.xpath(
        "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View[5]/android.view.View[2]/android.view.View")));
    // test exactly 12 characters
  }

  @Test
  public void testSignUpName() {
    WebDriverWait signUpWait = new WebDriverWait(driver, 5);
    WebDriverWait pageWait = new WebDriverWait(driver, 60);
    MobileElement emailField = driver.findElement(By.xpath(
        "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View[4]/android.view.View/android.widget.EditText"));
    MobileElement ageField = driver.findElement(By.xpath(
        "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View[3]/android.view.View/android.widget.EditText"));
    MobileElement firstNameField = driver.findElement(By.xpath(
        "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View[1]/android.view.View/android.widget.EditText"));
    MobileElement lastNameField = driver.findElement(By.xpath(
        "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View[2]/android.view.View[1]/android.widget.EditText"));
    MobileElement signUpButton = driver.findElement(By.xpath(
        "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.widget.Button"));
    MobileElement passwordField = driver.findElement(By.xpath(
        "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View[5]/android.view.View/android.widget.EditText"));

    lastNameField.click();
    lastNameField.sendKeys("Lname");
    signUpButton.click();
    signUpWait.until(ExpectedConditions.presenceOfElementLocated(By.xpath(
        "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View[2]/android.view.View[2]/android.view.View")));
    // test input in Last name without first name

    lastNameField.clear();
    firstNameField.click();
    lastNameField.sendKeys("Fname");
    signUpButton.click();
    signUpWait.until(ExpectedConditions.presenceOfElementLocated(By.xpath(
        "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View[1]/android.view.View[2]/android.view.View")));
    // test input in first name without last name
    firstNameField.click();
    firstNameField.sendKeys("firstName");
    lastNameField.sendKeys("lastName");
    ageField.sendKeys("13");
    emailField.sendKeys("validEmail@validity.com");
    passwordField.sendKeys("validpasswordcombination");
    // correct combination for all fields
    pageWait.until(ExpectedConditions.presenceOfElementLocated(By.xpath(
        "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]")));
    // redirect to verification page

  }

  @Test
  public void testEmailValidityandAgeFormat() {
    WebDriverWait signUpWait = new WebDriverWait(driver, 5);
    WebDriverWait pageWait = new WebDriverWait(driver, 60);
    MobileElement emailField = driver.findElement(By.xpath(
        "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View[4]/android.view.View/android.widget.EditText"));
    MobileElement ageField = driver.findElement(By.xpath(
        "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View[3]/android.view.View/android.widget.EditText"));
    MobileElement firstNameField = driver.findElement(By.xpath(
        "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View[1]/android.view.View/android.widget.EditText"));
    MobileElement lastNameField = driver.findElement(By.xpath(
        "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View[2]/android.view.View[1]/android.widget.EditText"));
    MobileElement signUpButton = driver.findElement(By.xpath(
        "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.widget.Button"));
    MobileElement passwordField = driver.findElement(By.xpath(
        "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View[5]/android.view.View/android.widget.EditText"));

    firstNameField.sendKeys("firstName");
    lastNameField.sendKeys("lastName");
    ageField.sendKeys("13");
    emailField.sendKeys("yes@yes.com");
    passwordField.sendKeys("validpasswordcombination");
    signUpButton.click();
    pageWait.until(ExpectedConditions.presenceOfElementLocated(By.xpath(
        "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View[4]/android.view.View[2]/android.view.View")));
    // test email previously in use
    ageField.clear();
    ageField.sendKeys("aa");
    passwordField.click();
    signUpWait.until(ExpectedConditions.presenceOfElementLocated(By.xpath(
        "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View[3]/android.view.View[2]/android.view.View")));
    signUpButton.click();
    // test for inputting incorrect format in age
    emailField.click();
    emailField.clear();
    emailField.sendKeys("validtestemail@mail.com");
    signUpButton.click();
    signUpWait.until(ExpectedConditions.presenceOfElementLocated(By.xpath(
        "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View[2]/android.view.View[2]/android.view.View")));
    // email and data successful, redirect to verifications

  }
}
