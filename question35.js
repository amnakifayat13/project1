/*Animals: Think of at least three different animals that have a common characteristic. Store
 the names of these animals in a list, and then use a for loop to print out the name of each animal.
  • Modify your program to print a statement about each animal, such as A dog would make a great pet.
  • Add a line at the end of your program stating what these animals have in common. You could print a
  sentence such as Any of these animals would make a great pet!*/
var animalsName = ["Parrot", "duck", "hen"];
console.log("List of pet animals:");
for (var _i = 0, animalsName_1 = animalsName; _i < animalsName_1.length; _i++) {
    var animals = animalsName_1[_i];
    console.log(animals);
}
for (var i = 0; i < animalsName.length; i++) {
    if (animalsName[i] == "Parrot") {
        console.log("\n ".concat(animalsName[i], " is sound good pet at home."));
    }
}
for (var i = 0; i < animalsName.length; i++) {
    if (animalsName[i] == "duck") {
        console.log("".concat(animalsName[i], " is also a good pet."));
    }
}
for (var i = 0; i < animalsName.length; i++) {
    if (animalsName[i] == "hen") {
        console.log("".concat(animalsName[i], " would make a great pet ."));
    }
}
console.log("\n These all animals are belong to birds family and hen make a great pet by lying eggs");
