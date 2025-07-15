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

// 3. I want that one

    const collectibles = [
    { name: "shiny ball", price: 5.95 },
    { name: "autographed picture of a dog", price: 10 },
    { name: "vintage 1970s yogurt SOLD AS-IS", price: 0.99 },
    ];

app.get("/collectibles/:index", (req, res) => {
    let index = Number(req.params.index)
    if (!collectibles[index]) {
        res.send("This item is not yet in stock")
    } else {
        res.send(`So, you want the ${collectibles[index].name} for ${collectibles[index].price} correct?`)
}
})









app.listen(3000, () => {})