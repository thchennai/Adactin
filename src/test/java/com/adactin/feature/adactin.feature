Feature: hotel Booking in Adactin Application

Scenario: user Login  In The WebApplication

Given user Lanch the Adactin Application
When user Enter The Username In UserName Field
And user Enter The Password In Password Field
Then user Click The Login Btn And Navigate to Search Hotel Page

Scenario: user Search Hotel  In The WebApplication

When user Select The Location In Location Field
And user Select The Hotels In Hotels Field
And user Select The Roomtype In Roomtype Field
And user Select The NumberOfRoom In Room Field
And user Select The CheckInDate In CheckInDate 
And user Select The CheckOutDate In CheckOutDate Field
And user Select The AdultNo In AdultNo Field
And user Select The ChildNo In ChildNo Field
Then user Click The Search Btn And Navigate To Continue

Scenario: user Continue In The WebApplication 

When user Click The Radio Btn In Radio Field
Then user Click The Continue Btn And Navigate to Booking Page

Scenario: user Book Hotel In The WebApplication

When user Enter The FirstName In FirstName Field
And user Enter The LastName In LastName Field
And user Enter The Address In Address Field
And user Enter The CardNumber In CardNumber Field
And user Enter The CardType In CardType Field
And user Enter The Expired Month In Expired Month Field
And user Enter The Expired Year In Expired Year Field
And user Enter The Cvv Number In Cvv Number Field
Then user Click Book Btn And Navigate To Logout Page

Scenario: user LogOut In The WebApplication

Then user Click Login Btn



