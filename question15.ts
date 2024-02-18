/* Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out 
a new set of invitations. You’ll have to think of someone else to invite.
• Start with your program from Exercise 14. Add a print statement at the end of your program stating 
 the name of the guest who can’t make it.
• Modify your list, replacing the name of the guest who can’t make it with the name of the new 
 person you are inviting.
 • Print a second set of invitation messages, one for each person who is still in your list
 • Start with your program from Exercise 14. Add a print statement at the end of your program stating 
the name of the guest who can’t make it.*/
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
export {guestName}