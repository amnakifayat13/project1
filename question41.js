/*Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
which prints the name of each magician in the array.*/
var magicianName = ["Harry Potter", "Hermione", "Ron Weasley", "Draco Malfoy", "Ginny Weasley"];
function show_Magicians(name) {
    for (var i = 0; i < name.length; i++) {
        console.log(name[i]);
    }
}
show_Magicians(magicianName);
