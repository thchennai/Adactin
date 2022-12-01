$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("adactin.feature");
formatter.feature({
  "line": 1,
  "name": "hotel Booking in Adactin Application",
  "description": "",
  "id": "hotel-booking-in-adactin-application",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "user Login  In The WebApplication",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-login--in-the-webapplication",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user Lanch the Adactin Application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user Enter The Username In UserName Field",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user Enter The Password In Password Field",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user Click The Login Btn And Navigate to Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Adactin_Stepdef.user_Lanch_the_Adactin_Application()"
});
formatter.result({
  "duration": 1174419701,
  "error_message": "java.lang.NullPointerException\r\n\tat com.base_class.Base_Class.getUrl(Base_Class.java:26)\r\n\tat com.adactin.stepdef.Adactin_Stepdef.user_Lanch_the_Adactin_Application(Adactin_Stepdef.java:24)\r\n\tat ✽.Given user Lanch the Adactin Application(adactin.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Adactin_Stepdef.user_Enter_The_Username_In_UserName_Field()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Adactin_Stepdef.user_Enter_The_Password_In_Password_Field()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Adactin_Stepdef.user_Click_The_Login_Btn_And_Navigate_to_Search_Hotel_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 10,
  "name": "user Search Hotel  In The WebApplication",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-search-hotel--in-the-webapplication",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "user Select The Location In Location Field",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user Select The Hotels In Hotels Field",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user Select The Roomtype In Roomtype Field",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user Select The NumberOfRoom In Room Field",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user Select The CheckInDate In CheckInDate",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user Select The CheckOutDate In CheckOutDate Field",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user Select The AdultNo In AdultNo Field",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user Select The ChildNo In ChildNo Field",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user Click The Search Btn And Navigate To Continue",
  "keyword": "Then "
});
formatter.match({
  "location": "Adactin_Stepdef.user_Select_The_Location_In_Location_Field()"
});
formatter.result({
  "duration": 542067000,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//select[@name \u003d \u0027location\u0027]\"}\n  (Session info: chrome\u003d107.0.5304.108)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-PM5ATGA\u0027, ip: \u0027192.168.241.56\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.16\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 107.0.5304.108, chrome: {chromedriverVersion: 107.0.5304.62 (1eec40d3a576..., userDataDir: C:\\Users\\Admin\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:49531}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 12439e955f66ce2392dd9f7cd0c2f01f\n*** Element info: {Using\u003dxpath, value\u003d//select[@name \u003d \u0027location\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.adactin.stepdef.Adactin_Stepdef.user_Select_The_Location_In_Location_Field(Adactin_Stepdef.java:55)\r\n\tat ✽.When user Select The Location In Location Field(adactin.feature:12)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Adactin_Stepdef.user_Select_The_Hotels_In_Hotels_Field()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Adactin_Stepdef.user_Select_The_Roomtype_In_Roomtype_Field()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Adactin_Stepdef.user_Select_The_NumberOfRoom_In_Room_Field()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Adactin_Stepdef.user_Select_The_CheckInDate_In_CheckInDate()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Adactin_Stepdef.user_Select_The_CheckOutDate_In_CheckOutDate_Field()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Adactin_Stepdef.user_Select_The_AdultNo_In_AdultNo_Field()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Adactin_Stepdef.user_Select_The_ChildNo_In_ChildNo_Field()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Adactin_Stepdef.user_Click_The_Search_Btn_And_Navigate_To_Continue()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 22,
  "name": "user Continue In The WebApplication",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-continue-in-the-webapplication",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 24,
  "name": "user Click The Radio Btn In Radio Field",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "user Click The Continue Btn And Navigate to Booking Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Adactin_Stepdef.user_Click_The_Radio_Btn_In_Radio_Field()"
});
formatter.result({
  "duration": 84832700,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@name \u003d \u0027radiobutton_0\u0027]\"}\n  (Session info: chrome\u003d107.0.5304.108)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-PM5ATGA\u0027, ip: \u0027192.168.241.56\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.16\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 107.0.5304.108, chrome: {chromedriverVersion: 107.0.5304.62 (1eec40d3a576..., userDataDir: C:\\Users\\Admin\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:49531}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 12439e955f66ce2392dd9f7cd0c2f01f\n*** Element info: {Using\u003dxpath, value\u003d//input[@name \u003d \u0027radiobutton_0\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.adactin.stepdef.Adactin_Stepdef.user_Click_The_Radio_Btn_In_Radio_Field(Adactin_Stepdef.java:145)\r\n\tat ✽.When user Click The Radio Btn In Radio Field(adactin.feature:24)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Adactin_Stepdef.user_Click_The_Continue_Btn_And_Navigate_to_Booking_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 27,
  "name": "user Book Hotel In The WebApplication",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-book-hotel-in-the-webapplication",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 29,
  "name": "user Enter The FirstName In FirstName Field",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "user Enter The LastName In LastName Field",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "user Enter The Address In Address Field",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "user Enter The CardNumber In CardNumber Field",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "user Enter The CardType In CardType Field",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "user Enter The Expired Month In Expired Month Field",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "user Enter The Expired Year In Expired Year Field",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "user Enter The Cvv Number In Cvv Number Field",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "user Click Book Btn And Navigate To Logout Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Adactin_Stepdef.user_Enter_The_FirstName_In_FirstName_Field()"
});
formatter.result({
  "duration": 181406101,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@name \u003d \u0027first_name\u0027]\"}\n  (Session info: chrome\u003d107.0.5304.108)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-PM5ATGA\u0027, ip: \u0027192.168.241.56\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.16\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 107.0.5304.108, chrome: {chromedriverVersion: 107.0.5304.62 (1eec40d3a576..., userDataDir: C:\\Users\\Admin\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:49531}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 12439e955f66ce2392dd9f7cd0c2f01f\n*** Element info: {Using\u003dxpath, value\u003d//input[@name \u003d \u0027first_name\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.adactin.stepdef.Adactin_Stepdef.user_Enter_The_FirstName_In_FirstName_Field(Adactin_Stepdef.java:162)\r\n\tat ✽.When user Enter The FirstName In FirstName Field(adactin.feature:29)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Adactin_Stepdef.user_Enter_The_LastName_In_LastName_Field()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Adactin_Stepdef.user_Enter_The_Address_In_Address_Field()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Adactin_Stepdef.user_Enter_The_CardNumber_In_CardNumber_Field()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Adactin_Stepdef.user_Enter_The_CardType_In_CardType_Field()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Adactin_Stepdef.user_Enter_The_Expired_Month_In_Expired_Month_Field()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Adactin_Stepdef.user_Enter_The_Expired_Year_In_Expired_Year_Field()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Adactin_Stepdef.user_Enter_The_Cvv_Number_In_Cvv_Number_Field()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Adactin_Stepdef.user_Click_Book_Btn_And_Navigate_To_Logout_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 39,
  "name": "user LogOut In The WebApplication",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-logout-in-the-webapplication",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 41,
  "name": "user Click Login Btn",
  "keyword": "Then "
});
formatter.match({
  "location": "Adactin_Stepdef.user_Click_Login_Btn()"
});
formatter.result({
  "duration": 111358701,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@name \u003d \u0027logout\u0027]\"}\n  (Session info: chrome\u003d107.0.5304.108)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-PM5ATGA\u0027, ip: \u0027192.168.241.56\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.16\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 107.0.5304.108, chrome: {chromedriverVersion: 107.0.5304.62 (1eec40d3a576..., userDataDir: C:\\Users\\Admin\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:49531}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 12439e955f66ce2392dd9f7cd0c2f01f\n*** Element info: {Using\u003dxpath, value\u003d//input[@name \u003d \u0027logout\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.adactin.stepdef.Adactin_Stepdef.user_Click_Login_Btn(Adactin_Stepdef.java:246)\r\n\tat ✽.Then user Click Login Btn(adactin.feature:41)\r\n",
  "status": "failed"
});
});