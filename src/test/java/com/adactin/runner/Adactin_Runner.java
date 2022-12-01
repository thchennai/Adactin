package com.adactin.runner;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import com.base_class.Base_Class;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import io.github.bonigarcia.wdm.WebDriverManager;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src//test//java//com//adactin//feature", glue = "com.adactin.stepdef", plugin = { "pretty",
		"html:Report/html_Report", "json:Report/json_Report.json",
		"com.cucumber.listener.ExtentCucumberFormatter:Report/cucumberExtentReport.html" })

public class Adactin_Runner extends Base_Class {

	public static WebDriver driver;

	@BeforeClass
	public static void setUp() {

		// setUp();

		WebDriverManager.chromedriver().setup();

		driver = new ChromeDriver();

		driver.manage().window().maximize();
	}

	@AfterClass
	public static void dropDown() {

		quit();
//		driver.close();

	}

}
