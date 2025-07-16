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

// Filter Shoes by Query Parameterss

    const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" },
    ];

app.get("/shoes", (req, res) => {
    const name = req.query.name
    const minPrice = parseInt(req.query.minPrice)
    const maxPrice= parseInt(req.query.maxPrice)
    const type = req.query.type
console.log()
    if (type) {
        const banana = shoes.filter(shoe => 
            shoe.type === type
        )
        res.send(`the shoe is ${JSON.stringify(banana)}`)
    };
    if (minPrice) {
    const inPrice = shoes.filter(shoe => shoe.price > minPrice )
        res.send(`the shoe is ${JSON.stringify(inPrice)}`)
    }
    if (maxPrice) {
        const axPrice = shoes.filter((shoe) => shoe.price < maxPrice);
        res.send(`the shoe is ${JSON.stringify(axPrice)}`);
    }

    })








app.listen(3000, () => {})