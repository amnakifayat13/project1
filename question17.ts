/*Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, 
 and you have space for only two guests.
 • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite 
 only two people for dinner.
 • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a
  name from your list, print a message to that person letting them know you’re sorry you can’t invite them 
  to dinner.
 • Print a message to each of the two people still on your list, letting them know they’re still invited.
 • Remove the last two names from your list, so you have an empty list. Print your list to make sure you 
actually have an empty list at the end of your program.*/

let guestName : Array<string>= ["Farah", "Asia", "Dildara", "Rasheeda", "Ruqaya", "Saima"];

console.log("guests who are not coming: \n ",  guestName[3])
console.log(guestName[5]);
console.log("...........................................................")


// • Modify your list, replacing the name of the guest who can’t make it with the name of the new 
// person you are inviting.
guestName[3] = "Mustafa";
guestName[5] = "Roma";
console.log("new inviting list:" ,guestName);
console.log("...........................................................")

// • Print a second set of invitation messages, one for each person who is still in your list.

guestName.forEach((invitedGuest) =>
{console.log(`Dear ${invitedGuest} you are invited to a dinner at my home today`)}
)
console.log("...........................................................")

// • Start with your program from Exercise 15. Add a print statement to the end of your program informing 
// people that you found a bigger dinner table.

guestName.forEach((invitedGuest) =>
{console.log(`Dear ${invitedGuest} We are very excited to inform you we have a bigger dinner,
So we would like to invite more three guests to join us.`)}
)
console.log("...........................................................")

// • Add one new guest to the beginning of your array.
 let newbeigningGuest : string = "Mujtaba"
 guestName.unshift(newbeigningGuest);
 console.log(guestName)
 console.log("...........................................................")

//  • Add one new guest to the middle of your array.

guestName.splice(3, 0, "Murtaza");
console.log(guestName)
console.log("...........................................................")

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of 
// your list. • Print a new set of invitation messages, one for each person
//  in your list.
 let newendGuest : string = "Musaddique"
 guestName.push(newendGuest);
 console.log(guestName)
 console.log("...........................................................")

 guestName.forEach((newGeneratedList)=>
 {console.log(`Dear${newGeneratedList} welcome to bigger dinner table to enjoy with us at my home tonight.`)}
 )
 console.log("...........................................................")
// Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite 
// only two people for dinner.

guestName.forEach((newGeneratedList)=>
{console.log(`Dear ${newGeneratedList} we are really sorry to inform you we can invite only two people for dinner
because of less space available.`)}
)
console.log("...........................................................")


// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a
//  name from your list, print a message to that person letting them know you’re sorry you can’t invite them 
//  to dinner.

let a1 : string = guestName.pop();
console.log(`Dear ${a1} we are sorry I can’t invite you for the dinner`)


let a2 : string = guestName.pop();
console.log(`Dear ${a2} we are sorry I can’t invite you for the dinner`)


let a3 : string = guestName.pop();
console.log(`Dear ${a3} we are sorry I can’t invite you for the dinner`)

let a4 : string = guestName.pop();
console.log(`Dear ${a4} we are sorry I can’t invite you for the dinner`)


let a5 : string = guestName.pop();
console.log(`Dear ${a5} we are sorry I can’t invite you for the dinner`)


let a6 : string = guestName.pop();
console.log(`Dear ${a6} we are sorry I can’t invite you for the dinner`)


let a7 : string = guestName.pop();
console.log(`Dear ${a7} we are sorry I can’t invite you for the dinner`)


console.log("...........................................................")
 console.log(guestName)

//  • Print a message to each of the two people still on your list, letting them know they’re still invited.

guestName.forEach((newGeneratedList)=>
{console.log(`Dear ${newGeneratedList} you are still invited.`)}
)
console.log("...........................................................")

//  Remove the last two names from your list, so you have an empty list. Print your list to make sure you 
// // actually have an empty list at the end of your program.
guestName.pop();
guestName.pop();
console.log(guestName)
