package com.adactin.stepdef;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

import com.adactin.runner.Adactin_Runner;
import com.base_class.Base_Class;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Adactin_Stepdef extends Base_Class {

	public static WebDriver driver = Adactin_Runner.driver;
	
	

	@Given("^user Lanch the Adactin Application$")
	public void user_Lanch_the_Adactin_Application() throws Throwable {

		driver = getUrl("https://adactinhotelapp.com/");
		//driver.get("https://adactinhotelapp.com/");
	}

	@When("^user Enter The Username In UserName Field$")
	public void user_Enter_The_Username_In_UserName_Field() throws Throwable {

		WebElement username = driver.findElement(By.xpath("//input[@name = 'username']"));
		username.sendKeys("Santhosh2303");

	}

	@When("^user Enter The Password In Password Field$")
	public void user_Enter_The_Password_In_Password_Field() throws Throwable {

		WebElement pass = driver.findElement(By.xpath("//input[@name = 'password']"));

		pass.sendKeys("S@nthosh23");
	}

	@Then("^user Click The Login Btn And Navigate to Search Hotel Page$")
	public void user_Click_The_Login_Btn_And_Navigate_to_Search_Hotel_Page() throws Throwable {

		WebElement login = driver.findElement(By.xpath("//input[@name = 'login']"));

		login.click();
	}

	@When("^user Select The Location In Location Field$")
	public void user_Select_The_Location_In_Location_Field() throws Throwable {

		WebElement loc = driver.findElement(By.xpath("//select[@name = 'location']"));

		Select sc = new Select(loc);

		sc.selectByValue("Melbourne");
	}

	@When("^user Select The Hotels In Hotels Field$")
	public void user_Select_The_Hotels_In_Hotels_Field() throws Throwable {

		WebElement hot = driver.findElement(By.xpath("//select[@name = 'hotels']"));
		Select sc1 = new Select(hot);

		sc1.selectByValue("Hotel Creek");

	}

	@When("^user Select The Roomtype In Roomtype Field$")
	public void user_Select_The_Roomtype_In_Roomtype_Field() throws Throwable {

		WebElement room = driver.findElement(By.xpath("//select[@name = 'room_type']"));

		Select sc2 = new Select(room);

		sc2.selectByValue("Double");

	}

	@When("^user Select The NumberOfRoom In Room Field$")
	public void user_Select_The_NumberOfRoom_In_Room_Field() throws Throwable {

		WebElement roomnu = driver.findElement(By.xpath("//select[@name = 'room_nos']"));

		Select sc3 = new Select(roomnu);

		sc3.selectByVisibleText("1 - One");

	}

	@When("^user Select The CheckInDate In CheckInDate$")
	public void user_Select_The_CheckInDate_In_CheckInDate() throws Throwable {

		WebElement indate = driver.findElement(By.xpath("//input[@name = 'datepick_in']"));

		indate.clear();
		indate.sendKeys("26/11/2022");
	}

	@When("^user Select The CheckOutDate In CheckOutDate Field$")
	public void user_Select_The_CheckOutDate_In_CheckOutDate_Field() throws Throwable {

		WebElement outDate = driver.findElement(By.xpath("//input[@name = 'datepick_out']"));

		outDate.clear();
		outDate.sendKeys("27/11/2022");

	}

	@When("^user Select The AdultNo In AdultNo Field$")
	public void user_Select_The_AdultNo_In_AdultNo_Field() throws Throwable {

		WebElement adult = driver.findElement(By.xpath("//select[@name = 'adult_room']"));

		Select se4 = new Select(adult);

		se4.selectByVisibleText("2 - Two");
	}

	@When("^user Select The ChildNo In ChildNo Field$")
	public void user_Select_The_ChildNo_In_ChildNo_Field() throws Throwable {

		WebElement child = driver.findElement(By.xpath("//select[@name = 'child_room']"));

		Select se5 = new Select(child);

		se5.selectByVisibleText("1 - One");

	}

	@Then("^user Click The Search Btn And Navigate To Continue$")
	public void user_Click_The_Search_Btn_And_Navigate_To_Continue() throws Throwable {

		WebElement search = driver.findElement(By.xpath("//input[@name = 'Submit']"));

		search.click();
	}

	@When("^user Click The Radio Btn In Radio Field$")
	public void user_Click_The_Radio_Btn_In_Radio_Field() throws Throwable {

		WebElement radioBtn = driver.findElement(By.xpath("//input[@name = 'radiobutton_0']"));

		radioBtn.click();
	}

	@Then("^user Click The Continue Btn And Navigate to Booking Page$")
	public void user_Click_The_Continue_Btn_And_Navigate_to_Booking_Page() throws Throwable {

		WebElement conti = driver.findElement(By.xpath("//input[@name = 'continue']"));

		conti.click();

	}

	@When("^user Enter The FirstName In FirstName Field$")
	public void user_Enter_The_FirstName_In_FirstName_Field() throws Throwable {

		WebElement fname = driver.findElement(By.xpath("//input[@name = 'first_name']"));

		fname.sendKeys("Santhosh");
	}

	@When("^user Enter The LastName In LastName Field$")
	public void user_Enter_The_LastName_In_LastName_Field() throws Throwable {

		WebElement lname = driver.findElement(By.xpath("//input[@name = 'last_name']"));

		lname.sendKeys("kumar");

	}

	@When("^user Enter The Address In Address Field$")
	public void user_Enter_The_Address_In_Address_Field() throws Throwable {

		WebElement add = driver.findElement(By.xpath("//textarea[@name = 'address']"));

		add.sendKeys("chennai");
	}

	@When("^user Enter The CardNumber In CardNumber Field$")
	public void user_Enter_The_CardNumber_In_CardNumber_Field() throws Throwable {

		WebElement cardnu = driver.findElement(By.xpath("//input[@name = 'cc_num']"));

		cardnu.sendKeys("1234578865346889");

	}

	@When("^user Enter The CardType In CardType Field$")
	public void user_Enter_The_CardType_In_CardType_Field() throws Throwable {

		WebElement cctype = driver.findElement(By.xpath("//select[@name = 'cc_type']"));

		Select se6 = new Select(cctype);

		se6.selectByValue("VISA");

	}

	@When("^user Enter The Expired Month In Expired Month Field$")
	public void user_Enter_The_Expired_Month_In_Expired_Month_Field() throws Throwable {

		WebElement exmonth = driver.findElement(By.xpath("//select[@name = 'cc_exp_month']"));

		Select se7 = new Select(exmonth);

		se7.selectByVisibleText("December");
	}

	@When("^user Enter The Expired Year In Expired Year Field$")
	public void user_Enter_The_Expired_Year_In_Expired_Year_Field() throws Throwable {

		WebElement exyear = driver.findElement(By.xpath("//select[@name = 'cc_exp_year']"));

		Select se8 = new Select(exyear);

		se8.selectByValue("2012");
	}

	@When("^user Enter The Cvv Number In Cvv Number Field$")
	public void user_Enter_The_Cvv_Number_In_Cvv_Number_Field() throws Throwable {

		WebElement cvv = driver.findElement(By.xpath("//input[@name = 'cc_cvv']"));

		cvv.sendKeys("123");
	}

	@Then("^user Click Book Btn And Navigate To Logout Page$")
	public void user_Click_Book_Btn_And_Navigate_To_Logout_Page() throws Throwable {

		WebElement book = driver.findElement(By.xpath("//input[@name = 'book_now']"));

		book.click();
		
		Thread.sleep(7000);

	}

	@Then("^user Click Login Btn$")
	public void user_Click_Login_Btn() throws Throwable {

		WebElement logout = driver.findElement(By.xpath("//input[@name = 'logout']"));

		logout.click();
	}

}