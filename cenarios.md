Scenário CT01: verify the page Sign in
    given the user is on the sing in page
    
    1. header
    2. section 1
    3. menu
    4. navigation
    5. page heading
    6. create an account
    7. login
    8. Footer

Scenário CT02: login with errors
    given the user is on the Sign in page
    and have account
    
    1. when the user click on the green Sign in button
    then see a message "There is 1 error 1. An email address required."
    
    2. when the user click on email address field
    and click outside the email address field
    then the email address field change to red
    when the user click on the green Sign in button
    then see a message "There is 1 error 1. An email address required."
    
    3.when the user put a entry different from a email address
    then the email address field continues red
    when the user click on the green Sign in button
    then see a message "There is 1 error 1.Authentication failed."
    and the last entry is on the field email adress

    3. when the user put a non cadastraded email address
    then the email address field change to green
    when the user click on the green Sign in button
    then see a message "There is 1 error 1.Authentication failed."
    and the last email is on the field email adress
    
    5.when the user put a cadastraded email address
    then the email address field change to green
    when the user click on the green Sign in button
    then see a message "There is 1 error 1.Authentication failed."
    and the last email is on the field email adress

    6.when the user put a cadastraded email address
    and the user click on password field
    and click outside the password field
    then the password field becomes red
    when the user click on the green Sign in button
    then see a message "There is 1 error 1. Password required."
    and the last email is on the field email adress
    and the last password is on the field password
    
    
    4. when the user put a cadastraded email address
    when the user put a password with less than 5 characters
    when the user click on the green Sign in button
    then see a message "There is 1 error 1. Invalid password."
    and the last email is on the field email adress
    and the last password is on the field password

    8.when the user put a cadastraded email address
    when the user put a wrong password 
    when the user click on the green Sign in button
    then see a message "There is 1 error 1. Invalid password."
    and the last email is on the field email adress
    and the last password is on the field password
    

Scenário CT03: login with sucess
    given the user is on the Sign in page
    and have a valid account
    when click on the password field
    and the user put a correct email on email address field 
    then the email address field becomes green
    when put a correct password on password field
    and click on the green button below
    then the user will be redirected to my account page
    and see a sign out button
    and see yours name on the right side of the sign out button

Scenário CT01: verify forgot your password
    given the user is on the sing in page
    when the user click on link "Forgot your password?"
    then the user will be redirected to the  forgot password page
    and see a box with the title "FORGOT YOUR PASSWORD?"
    and see a message "Please enter the email address you used to register. We will then send you a new password."
    and see a field to put a email address
    and see a green button "Retrieve password >"