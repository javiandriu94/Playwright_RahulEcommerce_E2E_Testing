Feature: Login functionality on Rahul Shetty Academy practice page

  Background:
    Given the user is on the login page

  @Positive
  Scenario Outline: Login with valid credentials
    When the user enters the following information username "<username>" password "<password>" role "<role>" and major "<major>"
    Then the user should be redirected to the home page
    
    Examples:
      | username           | password  | role |major |
      | rahulshettyacademy | learning  | User |Student |
      | rahulshettyacademy | learning  | Admin |Teacher| 
      | rahulshettyacademy | learning  | Admin |Consutant| 

  @Negative
  Scenario Outline: Login with invalid credentials
    When the user enters the following information username "<username>" password "<password>" role "<role>" and major "<major>"
    Then the user should see an error message for incorrect credentials
  
    Examples:
      | username           | password  | role |major |
      | rahulshettyacademy | wrongpass  | User |Student |
      | rahulshetty | learning  | Admin |Teacher| 
      | rahulshetty | wrongpass  | Admin |Consultant|

  @BlinkingText
  Scenario: Verify blinking text on login page and click on the document link
    When the user clicks on the blinking text
    Then should be redirected to the document request page