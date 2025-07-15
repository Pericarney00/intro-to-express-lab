const express = require("express")


const app = express();


//1. Be Polite, Greet the User
app.get("/greetings/:username", (req, res) => {
    res.send(`Hello there ${req.params.username}`)
});


//2. Rolling the Dice

app.get("/roll/:number", (req, res) => {
    let number = req.params.number
    if (isNaN(number) ) {
        res.send("You must specify a number")
    } else {
        res.send(` The number rolled is ${Math.floor(Math.random()* (number))}`)
    }
})


app.listen(3000, () => {})