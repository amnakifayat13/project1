/* More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests
 to invite to dinner.
 • Start with your program from Exercise 15. Add a print statement to the end of your program informing 
 people that you found a bigger dinner table.
 • Add one new guest to the beginning of your array.
 • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of 
 your list. • Print a new set of invitation messages, one for each person
 in your list.*/
let guestName : Array<string>= ["Farah", "Asia", "Dildara", "Rasheeda", "Ruqaya", "Saima"];

console.log("guests who are not coming: \n ",  guestName[3])
console.log(guestName[5]);


// • Modify your list, replacing the name of the guest who can’t make it with the name of the new 
// person you are inviting.
guestName[3] = "Mustafa";
guestName[5] = "Roma";
console.log("new inviting list:" ,guestName);

// • Print a second set of invitation messages, one for each person who is still in your list.

guestName.forEach((invitedGuest) =>
{console.log(`Dear ${invitedGuest} you are invited to a dinner at my home today`)}
)

// • Start with your program from Exercise 15. Add a print statement to the end of your program informing 
// people that you found a bigger dinner table.

guestName.forEach((invitedGuest) =>
{console.log(`Dear ${invitedGuest} We are very excited to inform you we have a bigger dinner,\n
So we would like to invite more three guests to join us.`)}
)

// • Add one new guest to the beginning of your array.
 let newbeigningGuest : string = "Mujtaba"
 guestName.unshift(newbeigningGuest);
 console.log(guestName)

//  • Add one new guest to the middle of your array.

guestName.splice(3, 0, "Murtaza");
console.log(guestName)

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of 
// your list. • Print a new set of invitation messages, one for each person
//  in your list.
 let newendGuest : string = "Musaddique"
 guestName.push(newendGuest);
 console.log(guestName)

 guestName.forEach((newGeneratedList)=>
 {console.log(`Dear${newGeneratedList} welcome to bigger dinner table to enjoy with us at my home tonight.`)}
 )


