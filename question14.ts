/* Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list
 that includes at least three people you’d like to invite to dinner. Then use your list to print a message to
 each person, inviting them to dinner.*/


let guestName : Array<string>= ["Farah", "Asis", "Dildara", "Rasheeda", "Ruqaya", "Saima"];
guestName.forEach((invitedGuest)=>
{console.log(`Dear ${invitedGuest} you are invited for the dinner tonight`)})
