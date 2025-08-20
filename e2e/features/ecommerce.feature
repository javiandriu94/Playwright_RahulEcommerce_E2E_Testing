Feature: Ecommerce Checkout Feature
   
    @ecommerce
    Scenario: Select products and checkout
        Given the user logs into the ecommerce platform
        When selects products and goes to checkout
        Then  confirms the order and verifies the success message