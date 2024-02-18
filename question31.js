"use strict";
/*No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!
• Remove all of the usernames from your array, and make sure the correct message is printed*/
let user1 = ["Kifayat", "Mustafa", "Asia", "admin", "Farah"];
for (let i = 0; i < user1.length; i++) {
    user1.length === 0;
    console.log("we need find some users");
    console.log(user1[i]);
    if (user1[i] === "admin") {
        console.log("Hello Admin! would you like to see a status report? ");
    }
    else {
        console.log(`Hello ${user1[i]}!thank you for logging in again. `);
    }
}
console.log("*".repeat(50));
console.log("empty array:");
user1 = [];
console.log(user1, "Alert!!! The list is empty we need to find some users...");
