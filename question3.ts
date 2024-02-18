let personName: string = " amna Kifayat";
let person1Name: string=(personName.toLowerCase())
console.log(person1Name);




let person2Name: string=(personName.toUpperCase())
console.log(person2Name);



let person3Name: string[] =personName.split(" ");
let nameTitleCase : string= ""
for( let i = 0; i < person3Name.length; i ++){
    nameTitleCase += person3Name[i].charAt(0).toUpperCase()+person3Name[i].slice(1).toLowerCase()+" "
};

console.log(nameTitleCase);