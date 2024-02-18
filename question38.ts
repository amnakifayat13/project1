/*Cities: Write a function called describe_city() that accepts the name of a city and its country.
 The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for
  the country a default value. Call your function for three different cities, at least one of which is
   not in the default country.*/

function describe_city(city : string , country : string = "Pakistan"):string{
    return`${city} is in ${country}`;
}
const city1 = describe_city("Bombay", "India");
const city2 = describe_city("Istanbol","Turkey");
const city3 =describe_city("Lahore")
console.log(city1);
console.log(city2);
console.log(city3);