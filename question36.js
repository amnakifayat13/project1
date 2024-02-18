/*T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message
that should be printed on the shirt. The function should print a sentence summarizing the size of the
 shirt and the message printed on it. Call the function.*/
function make_shirt(size, text) {
    return "Size: ".concat(size, ", Text: ").concat(text, " ");
}
var makeShirt1 = make_shirt("XXL", "Governor House Sindh IT Initiative Program");
var makeShirt2 = make_shirt("XL", "I love with TypeScript");
var makeShirt3 = make_shirt("L", "Live Happily");
console.log(makeShirt1);
console.log(makeShirt2);
console.log(makeShirt3);
