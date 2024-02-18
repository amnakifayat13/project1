/*Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that
 reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of 
 any size with a different message.*/



function make_shirt1(size : string = "Large", msg : string = "I love TypeScript"):string{
    return `Size: ${size}, Message: ${msg} `;
}
const makeShirt4 = make_shirt1();
const makeShirt5 = make_shirt1("Medium");
const makeShirt6 = make_shirt1("Small","Welcome to IT Initiative Program");
console.log(makeShirt4);
console.log(makeShirt5);
console.log(makeShirt6);
