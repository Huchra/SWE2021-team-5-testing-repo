
import java.net.URL;
import java.util.NoSuchElementException;
import java.util.concurrent.TimeUnit;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;
import static io.appium.java_client.touch.offset.PointOption.point;
import io.appium.java_client.TouchAction;
import org.openqa.selenium.By;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import io.appium.java_client.MobileElement;
import io.appium.java_client.android.AndroidDriver;

public class FlickrTesting {

    static AndroidDriver<MobileElement> driver;


    public static void main(String[] args) {
            try {

                openFlickr();
            }
            catch(Exception exp) {
                System.out.println(exp.getCause());
                System.out.println(exp.getMessage());
                exp.printStackTrace();
            }
            System.out.println("Test Started");
            //Welcome page
            WebDriverWait wait = new WebDriverWait(driver, 60);
            wait.until(ExpectedConditions.elementToBeClickable(By.xpath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[4]")));
            driver.findElementByXPath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[4]").click();
            wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//android.view.View[@content-desc=\"Log in to Flicker\"]")));

            logIn();
            driver.findElementById("com.android.packageinstaller:id/permission_allow_button").click();
            driver.findElementById("com.android.packageinstaller:id/permission_allow_button").click();
            wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//android.view.View[@content-desc=\"Tab 2 of 5\"]")));
            assertTrue(isElementPresent(By.xpath("//android.view.View[@content-desc=\"Tab 2 of 5\"]")));
            search();
            logOut();
//            driver.findElementByXPath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[4]").click();
//            wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//android.view.View[@content-desc=\"Log in to Flicker\"]")));
//            logInValid();
//            driver.findElementById("com.android.packageinstaller:id/permission_allow_button").click();
//            driver.findElementById("com.android.packageinstaller:id/permission_allow_button").click();
//            wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//android.view.View[@content-desc=\"Tab 2 of 5\"]")));
//            assertTrue(isElementPresent(By.xpath("//android.view.View[@content-desc=\"Tab 2 of 5\"]")));
//            cameraRoll();
//            logOut();

            System.out.println("Test Ended");
    }

    public static void openFlickr() throws Exception {

        DesiredCapabilities cap=new DesiredCapabilities();
        cap.setCapability("deviceName",  "SM-G955FD");
        cap.setCapability("udid", "ce031713bc4e960805");
        cap.setCapability("platformName", "Android");
        cap.setCapability("platformVersion", "9");
        cap.setCapability("appPackage","com.example.android_flickr");
        cap.setCapability("appActivity","com.example.android_flickr.MainActivity");

        URL url = new URL("http://127.0.0.1:4723/wd/hub");
        driver = new AndroidDriver<MobileElement>(url,cap);

        System.out.println("Flickr Started...");
    }

    public static void logIn(){
        System.out.println("Log in_Test");
        WebDriverWait wait = new WebDriverWait(driver, 60);
        MobileElement loginText = (MobileElement) driver.findElementByXPath("//android.view.View[@content-desc=\"Log in to Flicker\"]");
        MobileElement emailBox = (MobileElement) driver.findElementByXPath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[3]/android.widget.Button[1]");
        MobileElement nextButton = (MobileElement) driver.findElementByXPath("//android.widget.Button[@content-desc=\"Next\"]") ;
        assertEquals("Log in to Flicker", loginText.getAttribute("content-desc"));
        //empty email
        nextButton.click();
        //wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//android.view.View[@content-desc=\"Required\"]")));
        assertTrue(isElementPresent(By.xpath("//android.view.View[@content-desc=\"Required\"]")));
        //wrong email/password
        emailBox.click();
        emailBox.sendKeys("mohamedsameh40@gmail.com");
        nextButton.click();
        MobileElement passBox = (MobileElement) driver.findElementByXPath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.ScrollView/android.widget.EditText");
        MobileElement signIn = (MobileElement) driver.findElementByAccessibilityId("Sign in");
        passBox.click();
        passBox.sendKeys("testingsw222");
        signIn.click();
        //wrong password
        driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
        //wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View[1]/android.view.View/android.view.View")));
        MobileElement invalidBox = (MobileElement) driver.findElementByXPath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View[1]/android.view.View/android.view.View");
        MobileElement okButton1 = (MobileElement) driver.findElementByXPath("//android.widget.Button[@content-desc=\"Ok\"]");
        assertTrue(isElementPresent(By.xpath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View[1]/android.view.View/android.view.View")));
        okButton1.click();
        emailBox.click();
        emailBox.sendKeys("mohamedsameh408@gmail.com");
        signIn.click();
        //wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View[1]/android.view.View/android.view.View")));
        driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
        assertTrue(isElementPresent(By.xpath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View[1]/android.view.View/android.view.View")));
        MobileElement okButton2 = (MobileElement) driver.findElementByXPath("//android.widget.Button[@content-desc=\"Ok\"]");
        okButton2.click();
        //valid email/password
        passBox.click();
        passBox.sendKeys("Testingsw111");
        signIn.click();
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("com.android.packageinstaller:id/permission_allow_button")));
        assertTrue(isElementPresent(By.id("com.android.packageinstaller:id/permission_allow_button")));

        System.out.println("Log in_Tested");
    }

    public static void logInValid() {
        WebDriverWait wait = new WebDriverWait(driver, 60);

        MobileElement loginText = (MobileElement) driver.findElementByXPath("//android.view.View[@content-desc=\"Log in to Flicker\"]");
        MobileElement emailBox = (MobileElement) driver.findElementByXPath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[3]/android.widget.Button[1]");
        MobileElement nextButton = (MobileElement) driver.findElementByXPath("//android.widget.Button[@content-desc=\"Next\"]") ;

        emailBox.click();
        emailBox.sendKeys("mohamedsameh408@gmail.com");
        nextButton.click();
        MobileElement passBox = (MobileElement) driver.findElementByXPath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.ScrollView/android.widget.EditText");
        MobileElement signIn = (MobileElement) driver.findElementByAccessibilityId("Sign in");
        passBox.click();
        passBox.sendKeys("Testingsw111");
        signIn.click();
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("com.android.packageinstaller:id/permission_allow_button")));
        assertTrue(isElementPresent(By.id("com.android.packageinstaller:id/permission_allow_button")));
    }

    public static void search() {
        WebDriverWait wait = new WebDriverWait(driver, 60);
        System.out.println("Search_Test");
        MobileElement searchTab = (MobileElement) driver.findElementByXPath("//android.view.View[@content-desc=\"Tab 2 of 5\"]");
        searchTab.click();
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//android.view.View[@content-desc=\"Search Flickr\"]/android.view.View/android.view.View/android.widget.ImageView[1]")));
        assertTrue(isElementPresent(By.xpath("//android.view.View[@content-desc=\"Search Flickr\"]/android.view.View/android.view.View/android.widget.ImageView[1]")));
        MobileElement firstPhoto = (MobileElement) driver.findElementByXPath("//android.view.View[@content-desc=\"Search Flickr\"]/android.view.View/android.view.View/android.widget.ImageView[1]");
        firstPhoto.click();
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.ImageView/android.widget.Button")));
        MobileElement photoCancelButton = (MobileElement) driver.findElementByXPath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.ImageView/android.widget.Button");
        photoCancelButton.click();
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//android.view.View[@content-desc=\"Search Flickr\"]")));
        (new TouchAction(driver)).tap(point(257, 244)).perform();
        //go to people
        driver.manage().timeouts().implicitlyWait(20, TimeUnit.MILLISECONDS);
        MobileElement peopleTab = (MobileElement) driver.findElementByAccessibilityId("People\nTab 2 of 3");
        peopleTab.click();
        //search
        MobileElement searchBox = (MobileElement) driver.findElementByXPath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.widget.EditText");
        searchBox.click();
        searchBox.sendKeys("Youssef\\n");
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//android.widget.Button[@content-desc=\"+ Follow\"]\n")));
        assertTrue(isElementPresent(By.xpath("//android.widget.Button[@content-desc=\"+ Follow\"]\n")));
        MobileElement groupsTab = (MobileElement) driver.findElementByAccessibilityId("Groups\nTab 3 of 3");
        groupsTab.click();
        //Return back
        MobileElement cancelTab = (MobileElement)driver.findElementByXPath("//android.widget.Button[@content-desc=\"Cancel\"]");
        cancelTab.click();
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//android.view.View[@content-desc=\"Tab 5 of 5\"]")));
        assertTrue(isElementPresent(By.xpath("//android.view.View[@content-desc=\"Tab 5 of 5\"]")));

        System.out.println("Search_Tested");
    }

    public static void cameraRoll(){
        WebDriverWait wait = new WebDriverWait(driver, 60);
        System.out.println("Camera Roll_Test");
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//android.view.View[@content-desc=\"Tab 3 of 5\"]")));
        MobileElement profileTab = (MobileElement) driver.findElementByAccessibilityId("Tab 3 of 5");
        profileTab.click();
        driver.manage().timeouts().implicitlyWait(40, TimeUnit.MILLISECONDS);
        MobileElement cameraRollTab = (MobileElement) driver.findElementByXPath("//android.view.View[@content-desc=\"Camera roll Tab 3 of 6\"]");
        cameraRollTab.click();
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//android.widget.Button[@content-desc=\"Upload now\"]")));
        assertTrue(isElementPresent(By.xpath("//android.widget.Button[@content-desc=\"Upload now\"]")));
        (new TouchAction(driver)).press(point(733,801)).moveTo(point(113,789)).release().perform();
        MobileElement groupsTab = (MobileElement) driver.findElementByAccessibilityId("Groups\nTab 6 of 6");
        groupsTab.click();
        System.out.println("Camera Roll_Tested");
    }

    public static void camera() {
        WebDriverWait wait = new WebDriverWait(driver, 60);
        System.out.println("Camera_Test");
        MobileElement cameraTab = (MobileElement) driver.findElementByXPath("//android.view.View[@content-desc=\"Tab 5 of 5\"]/android.view.View");
        cameraTab.click();
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.ImageView[2]")));
        assertTrue(isElementPresent(By.xpath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.ImageView[2]")));
//
//        MobileElement flashAuto = (MobileElement) driver.findElementByXPath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.ImageView[2]");
//        flashAuto.click();
//        System.out.println("flash on");
//        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.ImageView[2]")));
//        MobileElement flash = (MobileElement) driver.findElementByXPath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.ImageView[2]");
//        flash.click();
//        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.ImageView[2]")));
//        MobileElement noFlash = (MobileElement) driver.findElementByXPath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.ImageView[2]");
//        noFlash.click();
//        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View")));
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.MILLISECONDS);
        MobileElement captureButton = (MobileElement) driver.findElementByXPath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View");
        captureButton.click();
        //Editing
        MobileElement editButton = (MobileElement) driver.findElementByXPath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.ImageView[1]");
        editButton.click();
            //saturation
        (new TouchAction(driver)).tap(point(210, 1935)).perform();
        driver.manage().timeouts().implicitlyWait(20, TimeUnit.MILLISECONDS);
            //exposure
        (new TouchAction(driver)).press(point(100,1449)).moveTo(point(282,1230)).release().perform();
        (new TouchAction(driver)).tap(point(805, 1944)).perform();
        driver.manage().timeouts().implicitlyWait(20, TimeUnit.MILLISECONDS);
            //contrast
        (new TouchAction(driver)).press(point(113,1478)).moveTo(point(254,1177)).release().perform();
        (new TouchAction(driver)).tap(point(817, 1944)).perform();
        driver.manage().timeouts().implicitlyWait(20, TimeUnit.MILLISECONDS);
            //brightness
        (new TouchAction(driver)).press(point(81,1493)).moveTo(point(313,1180)).release().perform();
        (new TouchAction(driver)).tap(point(135, 1938)).perform();
        driver.manage().timeouts().implicitlyWait(20, TimeUnit.MILLISECONDS);
            //rotate
        (new TouchAction(driver)).press(point(106,1506)).moveTo(point(269,1149)).release().perform();
        MobileElement rotateButton = (MobileElement) driver.findElementByXPath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.Button[1]");
        rotateButton.click();
        //Add title and post
        MobileElement nxtbutton = (MobileElement) driver.findElementByAccessibilityId("Next");
        nxtbutton.click();
        MobileElement titleText = (MobileElement) driver.findElementByXPath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.EditText[1]");
        titleText.click();
        titleText.sendKeys("Testing");
        MobileElement postButton = (MobileElement) driver.findElementByAccessibilityId("Post");
        postButton.click();
        System.out.println("Camera_Tested");
    }

    protected static void logOut(){
        System.out.println("Log out_Test");
        WebDriverWait wait = new WebDriverWait(driver, 60);
        MobileElement profileTab = (MobileElement) driver.findElementByAccessibilityId("Tab 3 of 5");
        profileTab.click();
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//android.widget.Button[@content-desc=\"Show menu\"]")));
        assertTrue(isElementPresent(By.xpath("//android.widget.Button[@content-desc=\"Show menu\"]")));
        MobileElement profileMenuTab = (MobileElement) driver.findElementByAccessibilityId("Show menu");
        profileMenuTab.click();
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//android.widget.Button[@content-desc=\"Sign out\"]")));
        assertTrue(isElementPresent(By.xpath("//android.widget.Button[@content-desc=\"Sign out\"]")));
        MobileElement signOutButton = (MobileElement) driver.findElementByAccessibilityId("Sign out");
        signOutButton.click();
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[4]")));
        assertTrue(isElementPresent(By.xpath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[4]")));
        System.out.println("Log out_Tested");
    }

    public static void forgetPassword()
    {
        System.out.println("Forget Password_Test");
        WebDriverWait wait = new WebDriverWait(driver, 60);
        MobileElement forgetPasswordButton = (MobileElement) driver.findElementByXPath("//android.widget.Button[@content-desc=\"Forget password ?\"]");
        forgetPasswordButton.click();
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]")));
    }

    protected static boolean isElementPresent(By by) {
        try {
            driver.findElement(by);
            System.out.println("Element was Found");
            return true;
        } catch (NoSuchElementException e) {
            return false;
        }
    }
}
