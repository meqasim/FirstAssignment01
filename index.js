"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let fruit1 = {
    name: "Mango",
    price: 140,
    availability: true
};
let fruit2 = {
    name: "Grapes",
    price: 120,
    availability: true
};
let fruit3 = {
    name: "Orange",
    price: 100,
    availability: true
};
let Vegetable1 = {
    name: "Lady Finger",
    price: 140,
    availability: true
};
let Vegetable2 = {
    name: "Brinjal",
    price: 120,
    availability: true
};
let Vegetable3 = {
    name: "Peas",
    price: 100,
    availability: true
};
let groceries1 = {
    name: "egg",
    price: 240,
    availability: true
};
let groceries2 = {
    name: "tea",
    price: 1500,
    availability: true
};
let groceries3 = {
    name: "sugar",
    price: 150,
    availability: true
};
var cart = [];
console.log("\nWelcome to Shopping store");
const promptSync = require("prompt-sync")();
function itemList() {
    console.log("\nTell me what do you want \n Fruit     (Press 1) \n Vegetable (Press 2) \n Groceries (Press 3)\n");
    let num1 = promptSync("Ënter Your Number : ");
    let seletedNum = num1;
    if (seletedNum == 1) {
        console.log("\nMango (press 1) \nGrapes (press 2) \nOrange (press 3)\n");
        let num2 = promptSync("Ënter Your Number : ");
        if (num2 == 1) {
            if (fruit1.availability == false) {
                console.log("Out of stock");
            }
            else if (fruit1.availability == true) {
                console.log("\nPrice of Mango is : " + fruit1.price + " per KG." + "\n\nIf you want to buy press \"y\"\nAnd If you do not want to buy press \"n\"");
                let num3 = promptSync("\nËnter Your Digit : ");
                if (num3 == "y") {
                    let kgs = promptSync("\nHow many KGs of Mangos do you want : ");
                    for (let i = 0; i < kgs; i++) {
                        cart.push(fruit1.price);
                    }
                    console.log("cart updated");
                }
            }
        }
        else if (num2 == 2) {
            if (fruit2.availability == false) {
                console.log("Out of stock");
            }
            else if (fruit2.availability == true) {
                console.log("\nPrice of Grapes is : " + fruit2.price + " per KG." + "\n\nIf you want to buy press \"y\"\nAnd If you do not want to buy press \"n\"");
                let num3 = promptSync("\nËnter Your Digit : ");
                if (num3 == "y") {
                    let kgs = promptSync("\nHow many KGs of Grapes do you want : ");
                    for (let i = 0; i < kgs; i++) {
                        cart.push(fruit2.price);
                    }
                    console.log("cart updated");
                }
            }
        }
        else if (num2 == 2) {
            if (fruit3.availability == false) {
                console.log("Out of stock");
            }
            else if (fruit3.availability == true) {
                console.log("\nPrice of Orange is : " + fruit3.price + " per Dozen." + "\n\nIf you want to buy press \"y\"\nAnd If you do not want to buy press \"n\"");
                let num3 = promptSync("\nËnter Your Digit : ");
                if (num3 == "y") {
                    let kgs = promptSync("\nHow many Dozen of Orange do you want : ");
                    for (let i = 0; i < kgs; i++) {
                        cart.push(fruit3.price);
                    }
                    console.log("cart updated");
                }
            }
        }
    }
    else if (seletedNum == 2) {
        console.log("LadyFinger (press 1) \n Brinjal    (press 2) \n peas       (press 3)");
        let num2 = promptSync("Ënter Your Number : ");
        if (num2 == 1) {
            if (Vegetable1.availability == false) {
                console.log("Out of stock");
            }
            else if (Vegetable1.availability == true) {
                console.log("\nPrice of Lady Finger is : " + Vegetable1.price + " per KG." + "\n\nIf you want to buy press \"y\"\nAnd If you do not want to buy press \"n\"");
                let num3 = promptSync("\nËnter Your Digit : ");
                if (num3 == "y") {
                    var kgs = promptSync("\nHow many KGs of Lady Finger do you want : ");
                    for (let i = 0; i < kgs; i++) {
                        cart.push(Vegetable1.price);
                    }
                    console.log("cart updated");
                }
            }
        }
        else if (num2 == 2) {
            if (Vegetable2.availability == false) {
                console.log("Out of stock");
            }
            else if (Vegetable2.availability == true) {
                console.log("\nPrice of Brinjal is : " + Vegetable2.price + " per KG." + "\n\nIf you want to buy press \"y\"\nAnd If you do not want to buy press \"n\"");
                let num3 = promptSync("\nËnter Your Digit : ");
                if (num3 == "y") {
                    var kgs = promptSync("\nHow many KGs of Brinjal do you want : ");
                    for (let i = 0; i < kgs; i++) {
                        cart.push(Vegetable2.price);
                    }
                    console.log("cart updated");
                }
            }
        }
        else if (num2 == 2) {
            if (Vegetable3.availability == false) {
                console.log("Out of stock");
            }
            else if (Vegetable3.availability == true) {
                console.log("\nPrice of Peas is : " + Vegetable1.price + " per KG." + "\n\nIf you want to buy press \"y\"\nAnd If you do not want to buy press \"n\"");
                let num3 = promptSync("\nËnter Your Digit : ");
                if (num3 == "y") {
                    var kgs = promptSync("\nHow many KGs of Peas do you want : ");
                    for (let i = 0; i < kgs; i++) {
                        cart.push(Vegetable3.price);
                    }
                    console.log("cart updated");
                }
            }
        }
    }
    else if (seletedNum == 3) {
        console.log("Egg   (press 1) \n Tea  (press 2) \n Sugar (press 3)");
        let num2 = promptSync("Ënter Your Number : ");
        if (num2 == 1) {
            if (groceries1.availability == false) {
                console.log("Out of stock");
            }
            else if (groceries1.availability == true) {
                console.log("\nPrice of Egg is : " + groceries1.price + " per KG." + "\n\nIf you want to buy press \"y\"\nAnd If you do not want to buy press \"n\"");
                let num3 = promptSync("\nËnter Your Digit : ");
                if (num3 == "y") {
                    var kgs = promptSync("\nHow many Dozen of Brinjal do you want : ");
                    for (let i = 0; i < kgs; i++) {
                        cart.push(groceries1.price);
                    }
                    console.log("cart updated");
                }
            }
        }
        else if (num2 == 2) {
            if (groceries2.availability == false) {
                console.log("Out of stock");
            }
            else if (groceries2.availability == true) {
                console.log("\nPrice of Tea is : " + groceries2.price + " per KG." + "\n\nIf you want to buy press \"y\"\nAnd If you do not want to buy press \"n\"");
                let num3 = promptSync("\nËnter Your Digit : ");
                if (num3 == "y") {
                    cart.push(groceries2.price);
                    console.log("cart updated");
                }
            }
        }
        else if (num2 == 3) {
            if (groceries3.availability == false) {
                console.log("Out of stock");
            }
            else if (groceries3.availability == true) {
                console.log("\nPrice of Sugar is : " + groceries3.price + " per KG." + "\n\nIf you want to buy press \"y\"\nAnd If you do not want to buy press \"n\"");
                let num3 = promptSync("\nËnter Your Digit : ");
                if (num3 == "y") {
                    cart.push(groceries3.price);
                    console.log("cart updated");
                }
            }
        }
    }
    else {
        console.log("Please Enter a correct number");
        itemList();
    }
}
function buyAnotherItem() {
    console.log("write \"yes\" if you want another item");
    console.log("write \"no\" if you do not want another item");
    let otheritem = promptSync("Write what you decide : ");
    if (otheritem == "yes") {
        itemList();
    }
    else {
        console.log("Thanks for Shopping");
    }
}
function updateCard() {
    console.log("Your total Bill is : " + cost);
    console.log("\n\nTell me how do you want to pay\nOption are\nCash on Delivery (Press 1)\nDebit/Credit card (Press 2)\nthrough wire (Press 3)");
    let payOption = promptSync("Enter your Option for Payment : ");
    if (payOption == 1) {
        console.log("Prepare Your self for payment. You will get your Delivery in 2 days.\nThanks For Shopping");
    }
    else if (payOption == 2) {
        console.log("Thanks For using Credit/Debit card for payment. You will get your Delivery in 2 days.\nThanks For Shopping");
    }
    else if (payOption == 3) {
        console.log("thanks for using Wire Payment method. You will get your Delivery in 2 days.\nThanks For Shopping");
    }
    else {
        console.log("Please choose a correct option");
        updateCard();
    }
}
itemList();
buyAnotherItem();
var cost = 0;
for (let i = 0; i < cart.length; i++) {
    cost += cart[i];
}
updateCard();
