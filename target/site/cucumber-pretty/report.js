$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ReviewPreviousOrders.feature");
formatter.feature({
  "line": 2,
  "name": "Review Previous Orders and add a message",
  "description": "",
  "id": "review-previous-orders-and-add-a-message",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@reviewprevorder"
    }
  ]
});
formatter.before({
  "duration": 22004562682,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "SignInSteps.verifyIsUserOnTheHomePage()"
});
formatter.result({
  "duration": 1220783437,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Review Previous Orders and add a message successfully",
  "description": "",
  "id": "review-previous-orders-and-add-a-message;review-previous-orders-and-add-a-message-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "User selects SignIn link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User should see the Login Page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User enter email  as \"bjssautomation@gmail.com\" password as \"BJSSTEST\" and select Signin button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User should see his name as \"Anugu Adama\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user selects home button",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User is on the home page",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user selects my orders",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "user should navigate to order history page",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "user select placed order",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "user should see the date of order placed",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "user select product from previous order as \"Blouse - Color : Black, Size : M\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "user add comment about order",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user submit comment",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "comment should appear under messages",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "user select signout link",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "user should signout successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "SignInSteps.user_selects_SignIn_link()"
});
formatter.result({
  "duration": 1872427310,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.user_should_see_the_Login_Page()"
});
formatter.result({
  "duration": 216282337,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bjssautomation@gmail.com",
      "offset": 22
    },
    {
      "val": "BJSSTEST",
      "offset": 61
    }
  ],
  "location": "SignInSteps.user_enter_email_as_password_as_and_select_Signin_button(String,String)"
});
formatter.result({
  "duration": 3354585262,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Anugu Adama",
      "offset": 29
    }
  ],
  "location": "SignInSteps.user_should_see_his_name_as(String)"
});
formatter.result({
  "duration": 197299153,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.user_selects_home_button()"
});
formatter.result({
  "duration": 3247561437,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.verifyIsUserOnTheHomePage()"
});
formatter.result({
  "duration": 30402487,
  "status": "passed"
});
formatter.match({
  "location": "ReviewPreviousOrdersSteps.user_selects_my_orders()"
});
formatter.result({
  "duration": 1958343830,
  "status": "passed"
});
formatter.match({
  "location": "ReviewPreviousOrdersSteps.user_should_navigate_to_order_history_page()"
});
formatter.result({
  "duration": 191435780,
  "status": "passed"
});
formatter.match({
  "location": "ReviewPreviousOrdersSteps.user_select_placed_order()"
});
formatter.result({
  "duration": 310610429,
  "status": "passed"
});
formatter.match({
  "location": "ReviewPreviousOrdersSteps.user_should_see_the_date_of_order_placed()"
});
formatter.result({
  "duration": 160659602,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Blouse - Color : Black, Size : M",
      "offset": 44
    }
  ],
  "location": "ReviewPreviousOrdersSteps.user_select_product_from_previous_order_as_something(String)"
});
formatter.result({
  "duration": 1128814599,
  "status": "passed"
});
formatter.match({
  "location": "ReviewPreviousOrdersSteps.user_add_comment_about_order()"
});
formatter.result({
  "duration": 732066979,
  "status": "passed"
});
formatter.match({
  "location": "ReviewPreviousOrdersSteps.user_submit_comment()"
});
formatter.result({
  "duration": 270829718,
  "status": "passed"
});
formatter.match({
  "location": "ReviewPreviousOrdersSteps.comment_should_appear_under_messages_successfully()"
});
formatter.result({
  "duration": 1627451858,
  "status": "passed"
});
formatter.match({
  "location": "ReviewPreviousOrdersSteps.user_select_signout_link()"
});
formatter.result({
  "duration": 1947143331,
  "status": "passed"
});
formatter.match({
  "location": "ReviewPreviousOrdersSteps.user_should_see_signin_link()"
});
formatter.result({
  "duration": 208022389,
  "status": "passed"
});
formatter.after({
  "duration": 157688,
  "status": "passed"
});
});