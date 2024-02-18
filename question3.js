var personName = " amna Kifayat";
var person1Name = (personName.toLowerCase());
console.log(person1Name);
var person2Name = (personName.toUpperCase());
console.log(person2Name);
var person3Name = personName.split(" ");
var nameTitleCase = "";
for (var i = 0; i < person3Name.length; i++) {
    nameTitleCase += person3Name[i].charAt(0).toUpperCase() + person3Name[i].slice(1).toLowerCase() + " ";
}
;
console.log(nameTitleCase);
