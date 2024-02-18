"use strict";
/*Checking Usernames: Do the following to create a program that simulates how websites ensure that
 everyone has a unique username.
• Make a list of five or more usernames called current_users.
• Make another list of five usernames called new_users. Make sure one or two of the new usernames are
also in the current_users list.
• Loop through the new_users list to see if each new username has already been used. If it has,
print a message that the person will need to enter a new username. If a username has not been used,
print a message saying that the username is available.
• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.*/
let current_users = ["Mustafa", "Roma", "Farah", "Naeema", "Saima"];
let new_users = ["Mustafa", "Kosar", "Mujtaba", "Asia", "Farah", "Murtaza"];
function UserName(current_users, new_users) {
    let current_usersLowercase = current_users.map(cUser => cUser.toLowerCase());
    for (let newUser of new_users) {
        let new_usersLowercase = newUser.toLowerCase();
        if (current_usersLowercase.includes(new_usersLowercase)) {
            console.log(` ${newUser} Please enter a new user name!`);
        }
        else {
            console.log(`${newUser} is available`);
        }
    }
}
UserName(current_users, new_users);
