// require the express module
import express from "express";
import Pizza from "../models/specialPizzas";
// create a new Router object
const routes = express.Router();
const special: Pizza[] = [
    {name:"Pepperoni"},
    {name:"Sausage"},
    {name:"Chicken"},
    {name:"Mushroom"},
    {name:"Olive"},
    {name:"Green Pepper"},
    {name:"Onion"},
    {name:"Banana Pepper"},
    {name:"Anchovies"},
    {name:"Pineapple"}
]

 
routes.get("/", function(req,res){
    res.render("home");
})

routes.get("/special", function(req,res){
    let name = req.query.name as string;
    let price = req.query.price;
    res.render("special",{name, price})
})
routes.get("/review",function (req, res){
    res.render("review");
})

routes.get("/leave-review", function(req,res){
    let username= req.query.user as string;
    let comment = req.query.comment as string;
    let rating5 = req.query.five;
    let rating4 = req.query.four;
    let rating3 = req.query.three;
    let rating2 = req.query.two;
    let rating1 = req.query.one;

    res.render("leave-review", {username,comment,rating1,rating2,rating3,rating4,rating5})
})

routes.get("/build", function(req,res){
    let toppings = special;
    res.render("build", {toppings});
})

routes.post("/show-custom-pizza", function(req,res){
    let size = req.body.size;
    let toppings = req.body.toppingCount;
    let price:number;
    let delivery: string;
    let glutencheck: boolean = !!req.body.gluten
    let instructions = req.body.instructions;

    if(size === "Large" && glutencheck === false){
        price = 12+(toppings*1.25)
        if(price>15){
            delivery = "Because Your Order meets the $15.00 minimum, you get FREE DELIVERY"
            res.render("show-custom-pizza", {size, toppings, glutencheck, instructions, price, delivery});
        }
        res.render("show-custom-pizza", {size, toppings, glutencheck, instructions, price});

    } else if(size === "Large" && glutencheck === true){
        price = 12+(toppings*1.25)+2
        if(price>15){
            delivery = "Because Your Order meets the $15.00 minimum, you get FREE DELIVERY"
            res.render("show-custom-pizza", {size, toppings, glutencheck, instructions, price, delivery});
        }
        res.render("show-custom-pizza", {size, toppings, glutencheck, instructions, price});
    }
    else if(size === "Medium" && glutencheck === false){
        price = 12+(toppings*1.25)
        if(price>15){
            delivery = "Because Your Order meets the $15.00 minimum, you get FREE DELIVERY"
            res.render("show-custom-pizza", {size, toppings, glutencheck, instructions, price, delivery});
        }
        res.render("show-custom-pizza", {size, toppings, glutencheck, instructions, price});
    }
    else if(size === "Medium" && glutencheck === true){
        price = 12+(toppings*1.25)+2
        if(price>15){
            delivery = "Because Your Order meets the $15.00 minimum, you get FREE DELIVERY"
            res.render("show-custom-pizza", {size, toppings, glutencheck, instructions, price, delivery});
        }
        res.render("show-custom-pizza", {size, toppings, glutencheck, instructions, price});
    }
    else if(size === "Small" && glutencheck === false){
        price = 12+(toppings*1.25)
        if(price>15){
            delivery = "Because Your Order meets the $15.00 minimum, you get FREE DELIVERY"
            res.render("show-custom-pizza", {size, toppings, glutencheck, instructions, price, delivery});
        }
        res.render("show-custom-pizza", {size, toppings, glutencheck, instructions, price});
    }
    else if(size === "Small" && glutencheck === true){
        price = 12+(toppings*1.25)+2
        if(price>15){
            delivery = "Because Your Order meets the $15.00 minimum, you get FREE DELIVERY"
            res.render("show-custom-pizza", {size, toppings, glutencheck, instructions, price, delivery});
        }
        res.render("show-custom-pizza", {size, toppings, glutencheck, instructions, price});
    }
})



export default routes;