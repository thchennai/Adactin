package com.base_class;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.github.bonigarcia.wdm.WebDriverManager;

public class Base_Class {

	public static WebDriver driver;
//
//	public static WebDriver setUp() {
//
//		WebDriverManager.chromedriver().setup();
//
//		driver = new ChromeDriver();
//
//		driver.manage().window().maximize();
//		
//		return driver;
//
//	}

	public static WebDriver getUrl(String value) {

		driver.get(value);

		return driver;
		
	}
	
	public static WebDriver quit() {

		driver.quit();
		
		return driver;
	}
	
	
	
}
