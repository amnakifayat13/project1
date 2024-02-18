/*Animals: Think of at least three different animals that have a common characteristic. Store
 the names of these animals in a list, and then use a for loop to print out the name of each animal.
  • Modify your program to print a statement about each animal, such as A dog would make a great pet. 
  • Add a line at the end of your program stating what these animals have in common. You could print a 
  sentence such as Any of these animals would make a great pet!*/

let animalsName : string[] = ["Parrot", "duck", "hen"];
console.log("List of pet animals:")
for(let animals of animalsName ){
    console.log (animals)
}

for(let i = 0; i < animalsName.length; i++){
    if(animalsName[i] == "Parrot"){
        console.log(`\n ${animalsName[i]} is sound good pet at home.`)
    }
    
}

for(let i = 0; i < animalsName.length; i++){
    if(animalsName[i] == "duck"){
        console.log(`${animalsName[i]} is also a good pet.`)
    }
    
}

for(let i = 0; i < animalsName.length; i++){
    if(animalsName[i] == "hen"){
        console.log(`${animalsName[i]} would make a great pet .`)
    }
    
}
console.log("\n These all animals are belong to birds family and hen make a great pet by lying eggs")