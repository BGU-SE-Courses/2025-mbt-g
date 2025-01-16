Feature: A set of scenarios for testing the "example" module

  Scenario Outline: Testing customer checkouts an item
    Given customer is in Home Page
    When customer selects "<Item>" from the product list
#    When customer checkouts an item
    Then the item successfully has been added to checkout

    Examples:
        | Item |
        | iPhone |


  Scenario Outline: Testing admin changes the 'Date Available' to a future date
    Given admin in admin logging page
    When admin is logged in with "<Username>" and "<Password>"
    And admin changes the Date Available of the product to a future date
    Then the Date Available changed successfully to a future date in the admin browse
    And the customer does not sees the changed product

    Examples:
      | Username | Password |
      | admin    | 1234     |