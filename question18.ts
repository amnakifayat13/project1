/* Seeing the World: Think of at least five places in the world you’d like to visit.
 • Store the locations in a array. Make sure the array is not in alphabetical order.
 • Print your array in its original order.
 • Print your array in alphabetical order without modifying the actual list.
 • Show that your array is still in its original order by printing it.
 • Print your array in reverse alphabetical order without changing the order of the original list.
 • Show that your array is still in its original order by printing it again.
 • Reverse the order of your list. Print the array to show that its order has changed.
 • Reverse the order of your list again. Print the list to show it’s back to its original order.
 • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.*/


// • Store the locations in a array. Make sure the array is not in alphabetical order.
let place : Array<string> = ["Harram", "Istanbol", "Burj Khalifa", "DisneyLand", "Ifa Tower"];
console.log("Original Array:")
console.log(place);
console.log("...............................................")

// • Print your array in alphabetical order without modifying the actual list.
console.log("Alphabetical Order Array:")
console.log([...place].sort())
console.log("...............................................")

// • Show that your array is still in its original order by printing it.
console.log("still in its original order:")
console.log(place);

console.log("...............................................")


// • Print your array in reverse alphabetical order without changing the order of the original list.
console.log("reverse alphabetical order")
console.log([...place].reverse())
console.log("...............................................")


// • Show that your array is still in its original order by printing it again.

console.log("Still in original order again:")
console.log(place)

// • Reverse the order of your list. Print the array to show that its order has changed.
console.log("Reverse the order:")
console.log([...place].reverse())
console.log("...............................................")


// • Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("back to its original order:")
console.log(place)
console.log("...............................................")
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("stored in alphabetical order:")
console.log([...place].sort())
console.log("...............................................")
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("stored in reverse alphabetical order:")
console.log([...place].reverse())

console.log("...............................................")




