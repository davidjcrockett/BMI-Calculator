const express = require('express');

const app = express();

const PORT = 3000;

app.get("/", (req,res) => {
    res.send("BMI Calculator");
})

app.listen(PORT, () => {
    console.log(`Listening on channel ${PORT}`)
})