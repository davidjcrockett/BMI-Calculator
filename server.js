const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');

const app = express();

const PORT = 3000;

app.set('view engine', 'ejs')
app.set('views', './src/views')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json() )

app.get("/", (req, res) => {
    res.render('index')
})

app.get("/bmicalculator", (req,res) => {
    res.render('bmiCalculator');
})

app.post("/calculator",function(req,res){
    let height = Number(req.body.height);
    let weight = Number(req.body.weight);
    
    let BMI = Math.round((703 * weight)/(height * height)*10)/10;
    console.log(BMI)
    res.send("Your BMI is: " + BMI)
  });

app.listen(PORT, () => {
    console.log(`Listening on channel ${PORT}`)
})