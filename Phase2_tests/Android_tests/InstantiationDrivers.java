package tests;

import java.net.URL;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.testng.annotations.BeforeTest;
import io.appium.java_client.AppiumDriver;
import io.appium.java_client.MobileElement;
import io.appium.java_client.remote.MobileCapabilityType;

public class InstantiationDrivers {
  static AppiumDriver<MobileElement> driver;

  @BeforeTest
  public void setup() {
    try {
      DesiredCapabilities cap = new DesiredCapabilities();
      cap.setCapability("deviceName", "SM-N975F");
      cap.setCapability("udid", "RF8M91EH88L");
      cap.setCapability("platformName", "Android");
      cap.setCapability("platformVersion", "11.0");
      // Phone configuration
      cap.setCapability("appPackage", "com.flickr.android");
      cap.setCapability("appActivity",
          "com.yahoo.mobile.client.android.flickr.activity.MainActivity");
      // Application Package
      cap.setCapability("unicodeKeyboard", true);
      cap.setCapability("resetKeyboard", true);
      cap.setCapability(MobileCapabilityType.NEW_COMMAND_TIMEOUT, 60);
      URL url = new URL("http://127.0.0.1:4723/wd/hub");
      driver = new AppiumDriver<MobileElement>(url, cap);

    } catch (Exception exp) {
      System.out.println("Cause: " + exp.getCause());
      System.out.println("Message: " + exp.getMessage());
      exp.printStackTrace();
    }
  }


  public void teardown() {

  }
}
