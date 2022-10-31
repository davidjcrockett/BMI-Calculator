# BMI-Calculator

- create a new file called server.js
- Set up a new NPM package
- Open the project folder in Visual studio
- Using NPM install the express module
- Require express in your server.js
- Setup express
- Create a root route get method with app.get()
- Spin up our server on port 3000 with app.listen
- Run server with nodemon
- Create a new file called bmiCalculator.html inside the same folder
- Add the HTML boilerplate and set the page title to BMI Calculator
- Add an HTML form, this form will make a post request to our server at the route /calculator. The form will have 2 inputs, weight and height with placeholder text that tell the user what they should type into which text box.
- Add a button which says “Caculate BMI”
- Add the get and post methods for the /calculator route into the same server.js file we've been using
- Use sendFile() to send the bmiCalculator.html page as a response inside the get method.
- Add an h1 that says BMI Calculator
- Inside server.js , create 2 variables, one for weight and one for height.
- Use the BMI calculator code you wrote previously, or write some new code to calculate and send back the result as text. It should read something like "Your BMI is n" where n is equal to the calculated BMI based on their weight and height inputs.
