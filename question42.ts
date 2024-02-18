/*Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great()
 that modifies the array of magicians by adding the phrase the Great to each magician’s name. 
 Call show_magicians() to see that the list has actually been modified.*/

 let magicianName1 : string[] = ["Harry Potter" ,"Hermione", "Ron Weasley", "Draco Malfoy", "Ginny Weasley"];

function show_Magicians(name : string[]):void{
    for(let i =0; i < name.length; i++){
        console.log(name[i]);
    }
}
console.log("Magician name's List:")
show_Magicians(magicianName1);

function make_great(name : string[]):string[]{
    let great :string[] = name.map(magician => `the Great ${magician}`);
    return great;

}
const greatMagician : string[] = make_great(magicianName1);
console.log("\n Great Magician's name list:")
console.log(greatMagician);