"use strict";
// They think of something you could store in a TypeScript Object. Write a program that creates Objects 
// containing these items.
let clothes = [];
let womenWear = {
    name: "Shlawar Suit",
    price: 2500,
    description: "Embroidered  Velvet, available in all colors."
};
let menWear = {
    name: "Shlawar Suit",
    price: 2500,
    description: "Embroidered washing wear, available in all colors."
};
let kidWear = {
    name: "Shlawar Suit",
    price: 2500,
    description: "Embroidered cotton, available in all colors."
};
clothes.push(womenWear);
clothes.push(menWear);
clothes.push(kidWear);
console.log(clothes);
