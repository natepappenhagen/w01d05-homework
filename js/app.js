// # weekend-js-1
// Long_Weekend covering loops, functions, and datatypes
// ## Conceptual Questions

// 1. How do we assign a value to a variable?

//    after we declare the variable we use the assignment operator '='


// 2. How do we change the value of a variable?
//    by reassigning a new value to variable with the assignment operator '='


// 3. How do we assign an existing variable to a new variable?
//    again by reassigning a new value to variable with the assignment operator '='


// ## Strings

// 1. Create a variable called `firstVariable`.
//   - assign it the value of a string => `"Hello World"`
            let firstVariable = 'Hello World';
            console.log(firstVariable); // => 'Hello World'


//   - change the value of this variable to a number.
            firstVariable = 1;
            console.log(firstVariable); // => 1

//   - store the value of `firstVariable` into a new variable called `secondVariable`
            let secondVariable = firstVariable;
            console.log(secondVariable); // => 1

//   - change the value of `secondVariable` to a string.
            secondVariable = 'Goodnight Moon';
            console.log(secondVariable); // => 'Goodnight Moon'

//   - What is the value of `firstVariable`?
//
            console.log(firstVariable); // => 1


// 2. Create a variable called `yourName` and set it equal to your name as a string.

      const yourName = 'nate';
//   - Write an expression that takes the string "Hello, my name is
//    " and the variable `yourName` so that it returns a new
//      string with them concatenated.
//      ex: `Hello, my name is Jean Valjean`
      console.log('Hello my name is:' + yourName);   // => 'nate'


// ## Booleans
// - Using the provided variable definitions, replace the blanks with a
// mathematical or boolean operator that evaluates the expression to true.


  const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';


  a < b; // => true
  c > d; // => true
  'Name' === 'Name'; // => true
  (a + b) === c; // => true
  (a * a) === d; // => true
  e === 'Kevin'; // => true
  48 == '48'; // => true


// ## The Farm

// 1) Write code that will print out "mooooo" if the variable `animal` is equal to `cow`.

let animal = 'cow';

if(animal == 'cow') {
  console.log('mooooooo');
}


// 2) Change your code so that if the variable `animal` is anything other than
//     a cow, your should print out "Hey! You're not a cow."

let animal = 'cow';

animal = 'dog';

if(animal == 'cow') {
  console.log('mooooooo');
} else {
  console.log('Hey! You\'re not a cow')
}

// => 'Hey! You\'re not a cow'





// ## Driver's Ed

// 1) Write a variable that will hold a person's age.
let age = 0;

// 2) Write code that will print out "Here are the keys", if the age is 16 years or older.

if (age >= 16){
  console.log('Here are the keys');
}

// 3) Change your code so that if the age is younger than 16, a message will print "Sorry, you're too young."
let age = 0;

if (age >= 16){
  console.log('Here are the keys');
} else {
  console.log('Grow up, kid');
}



// ## Just Loop It
// 1) Write code that will print out all the numbers in the range 0 - 10.

for (let i = 0; i < 11; i++) {
  console.log(i);
}

// 2) Write code that will print out all the numbers in the range 10 - 4000.
for (let i = 10; i < 4001; i++) {
  console.log(i);
}

// 3) Write code that will print out every other number in the range 10 - 4000.
for (let i = 10; i < 4001; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}


// ## Let's get even
// 1) Print out the even numbers that are within the range of 1 - 100.

for (let i = 1; i < 101; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}



// 2) Adjust your code to add a message next to the even number that says: "is an even number".

for (let i = 1; i < 101; i++) {
    if (i % 2 == 0) {
        console.log(`${i} is an even number`);
    }
}



// ## Give me Five
// 1) For the numbers 0 - 100, print out "I found a `number`. High five!" if the number is a multiple of five.
for (let i = 0; i < 101; i++) {
  if(i % 5 == 0) {
    console.log(`I found a ${i} . High Five! `)
  }
}


// 2) Add to the code from above to print out "I found a `number`.
//   Three is a crowd" if the number is a multiple of three.

for (let i = 0; i < 101; i++) {
  if(i % 5 == 0) {
    console.log(`I found a ${i} . High Five! `)
  } else if ( i % 3 == 0) {
     console.log(`I found a ${i}. Three is a crowd`)
  }
}

// ## Savings account
// 1) Write code that will save the sum of all the numbers between 1 - 10 to a variable called `bank_account`.

let sum = 0;

for (let i = 1; i < 11; i++) {
  sum = sum + i
}

console.log(sum); // => 55



// 2) You got a bonus! Your pay is now doubled each week. Write code that will
//    save the sum of all the numbers between 1 - 100 multiplied by 2.

//        >Check your work! Your banck_account should have $10,100 in it.


let bankAccount = 0;

for (let i = 0; i < 101; i++) {
  bankAccount += i *2
}

console.log(bankAccount); // => 10,100


// ## Multiples of 3 and 5

// If we list all the natural numbers below 10 that are multiples
//  of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.


let sumMultiples = 0;

for (let i = 1; i < 1000; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    sumMultiples += i;
  }
}

console.log(sumMultiples);



// ### Easy Does It
// 1. Create an array that contains three quotes and store it in a variable called `quotes`.



const quotes = ['keep it secret, keep it safe.', 'run, you fools!', 'they come in pints? I\'m having One'];

console.log(quotes);





// ### Random
// Given the following array `const randomThings = [1, 10, "Hello", true]`

// const randomThings = [1, 10, "Hello", true];

// 1. how do you access the 1st element in the array?
// randomThings[0];


// 2. Change the value of `"Hello"` to `"World"`.
// randomThings[2] = "World";


// 3. Check the value of the array to make sure it updated the array.
// console.log(randomThings);






//

// ### We've Got Class
// Given the following array `const ourClass = ["Gizmo", "Zoom", "Github", "Slack"]`


// const ourClass = ["Gizmo", "Zoom", "Github", "Slack"];

// 1. What would you write to access the 3rd element of the array?
// ourClass[2];

// 2. Change the value of "Github" to "Octocat"
// ourClass[2] = 'Octocat';


// 3. Add a new element, "Cloud City" to the array.

// ourClass.push("Cloud City");

// console.log(ourClass);




// ### Mix It Up
// 4. Given the following array `const myArray = [5 ,10 ,500, 20]`

//  const myArray = [5 ,10 ,500, 20]

// 1. using the `push` method, add the string `"Egon"` to the end of the array.

// myArray.push('Egon');

// 2. using a method, remove the string from the end of the array.

// myArray.pop();

// 3. using the `unshift` method, add the string `"Bob Marley"` to the beginning of the array

// myArray.unshift('Bob Marley');

// 4. using a different method, remove the string from the beginning of the array

// myArray.shift();

// 5. use the reverse method on this array

// myArray.reverse();



// ### Biggie Smalls
// Write an `if..else` statement:

// 1. console.log `little number` if the number is entered is less than **100**
// const num = 100;
  // if (num < 100) {
  //     console.log('little number');
  //   }



// 2. If the number entered is 100 or more, alert `big number`.
// if (num < 100) {
//     console.log('little number');
//   } else {
//     alert('big number');
//   }



// ### Monkey in the Middle
// Write an `if...else if...else` statement:
// 1. console.log `little number` if the number entered is less than **5**.<br>

if (num < 5) {
  console.log('little number');
}

// 2.  If the number entered is more than 10, log `big number`.
// if (num < 5) {
//   console.log('little number');
// } else if (num > 10) {
//   console.log('big number');
// }

// 3. Otherwise, console.log "monkey". <br>
// if (num < 5) {
//   console.log('little number');
// } else if (num > 10) {
//   console.log('big number');
// } else {
//   console.log('monkey');
// }


// ### What's in Your Closet?

// Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.
/*

  // javascript
const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];




// 1. What's Kristyn wearing today? Using bracket notation to access items in
//        `kristynsCloset`, log the sentence "Kristyn is rocking that " + *the third
//        item in Kristyn's closet* + " today!" to the console.

console.log('Kristyn is rocking that ' + kristynsCloset[2] + ' today');


// 2. Kristyn can't find her left shoe. Remove this item from her
//    closet and save it to a variable named `kristynShoe`.

let kristynShoe = kristynsCloset[0];
kristynsCloset.shift();
console.log(kristynShoe);


// 3. Kristyn just bought some sweet shades! Add `"raybans"`
//    to her closet **after `"yellow knit hat"`.**

kristynsCloset.splice(5, 0, "raybans");



// 4. Kristyn spilled coffee on her hat... modify this item to
//    read `"stained knit hat"` instead of yellow.

kristynsCloset[kristynsCloset.indexOf("yellow knit hat")] = "stained knit hat";

console.log(kristynsCloset);

// // 5. Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirts array.

thomsCloset[0][0];
console.log(thomsCloset[0][0]);

// // 6. In the same way, access one item from Thom's pants array.

thomsCloset[1][1];
console.log(thomsCloset[1][1]);

// // 7. Access one item from Thom's accessories array.

thomsCloset[2][0];
console.log(thomsCloset[2][0]);

// // 8. Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"

console.log(`Thom is looking fierce in a ${thomsCloset[0][1]}, ${thomsCloset[1][0]}, and ${thomsCloset[2][0]}`);

// // 9. Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.

thomsCloset[1][2] = "Footie Pajamas";
console.log(thomsCloset);



*/








// ## Functions

// ### printGreeting

// Write a function called `printGreeting` with a parameter `name` that
 // returns a greeting with the argument **interpolated** into the greeting.


/*
```javascript
console.log(printGreeting("Slimer"));
```

> => Hello there, Slimer!




const printGreeting = (name) => {
  console.log(`Hello there, ${name}!`);
}

printGreeting("Slimer");

*/



/*


// ### reverseWordOrder

// Write a function `reverseWordOrder` that accepts a single argument,
//  a string. The function should return a string with the order
//   of the words reversed. Don't worry about punctuation.


// const reverseWordOrder = (string) => {
//   return string.split(' ').reverse().join(' ');
// }

// console.log(reverseWordOrder("hello there"));

// console.log(reverseWordOrder("feel the rhythm, feel the ride, get on up it's bobsledtime"));

*/


// ### calculate

// Write a function called `calculate`.

// This function should take three arguments, two numbers and a string.

// Name the parameters `num1`, `num2`, and `operation`.

    // If the function receives the string "add" for the operation parameter,
    //   it will return the sum of num1 and num2.

    // If the function receives the string "sub" for the operation parameter,
    //    it will return num1 minus num2.

    // Do the same thing for multiplication "mult", division "div",
    //   and exponent "exp" (where num2 is the exponent of num1).

/*

const calculate = (num1, num2, operation) => {

    if (operation === 'add') {
      return num1 + num2

        } else if (operation === 'sub') {
          return num1 - num2

        } else if (operation === 'mult') {
          return num1 * num2

        } else if (operation === 'div') {
          return num1 / num2

        } else if (operation === 'exp') {
          return num1 ** num2

            } else {
              return "math please"

  }

}

console.log(calculate(4, 3, "sub"));

console.log(calculate(4, 3, "exp"));

console.log(calculate(2, 2, "mercator projection"));

*/










// # 1

// Write a function `printCool` that accepts one parameter, `name` as an argument. The function should print the name and a message saying that that person is cool.

/*

const printCool = (name) => {
  return `${name} is cool`
}

console.log(printCool("tommy caldwell"));

*/




// # 2

// Write a function `calculateCube` that takes a single number and prints
// the volume of a cube made from that number.

/*
const calculateCube = (num) => {
  return num ** 3
}

console.log(calculateCube(3));
*/


// # 3

// Write a function `isAVowel` that takes a character (i.e. a string of length
// 1) and returns true if it is a vowel, false otherwise.
//   The vowel could be upper or lower case.


/*

const isAVowel = (string) => {

  let stringLowerCase = string.toLowerCase();


  if (string === 'a' || string === 'e' || string === 'i' || string === 'o' || string === 'u') {
    return true
  } else {
return false
  }
}


*/







// # 4

// Write a function `getTwoLengths` that accepts two parameters (strings).
// The function should return an _array_ of numbers where each number is the
// length of the corresponding string.

/*

const getTwoLengths = (string1, string2) => {
  let string1Length = string1.length;
  let string2Length = string2.length;
  let arr = [];

  arr.push(string1Length);
  arr.push(string2Length);

  return arr
}

console.log(getTwoLengths("germany", "colombia")); //  => [7, 8]


*/







// # 5

// Write a function `getMultipleLengths` that accepts a single parameter as
// an argument: an **array** of **strings**. The function should return an array
// of **numbers** where each number is the length of the corresponding string.

/*

const getMultipleLengths = (stringArr) => {
  let stringLength;
  let lengthOfStringsArr = [];


    for (let i = 0; i < stringArr.length; i++) {

      stringLength = stringArr[i].length;

      lengthOfStringsArr[i] = stringLength;

    }

    return lengthOfStringsArr

  }

console.log(getMultipleLengths(["hello", "bonjour", "buenas"])); // => [5, 7, 6]


*/


// # 6

// Define a function `maxOfThree` that takes three numbers as arguments
// and returns the largest of them. If all numbers are the same,
// it doesn't matter which one is returned. If the two largest numbers
// are the same, one of them should be returned.


/*
const maxOfThree = (num1, num2, num3) => {
  return Math.max(num1, num2, num3);
}

console.log(maxOfThree(4,5,6));   => 6

*/






// # 7

// Write a function `printLongestWord` that accepts a single argument,
// an **array** of **strings**. The method should return the longest word in the array.
// In case of a tie, the method should return the word that appears first in the array.


/*
const printLongestWord = (stringArr) => {

let longestWordLength = 0;
let longestWord;


    for (let i = 0; i < stringArr.length; i++) {
      if (stringArr[i].length > longestWordLength) {
        longestWordLength = stringArr[i].length;
        longestWord = stringArr[i]
             }
        }

  return longestWord

}

console.log(printLongestWord(["southsudan", "pakistan", "bangladesh", "kiribati",]));       //  => "southsudan"

*/





// # 8

// Write a Javascript function called `transmogrify`. This function should
//  accept three arguments, which you can assume will be numbers.
//   Your function should return the "transmogrified" result.


// The transmogrified result of three numbers is the product of the first
 // two numbers, raised to the power of the third number.


// For example, the transmogrified result of 5, 3, and 2 is `(5 times 3) to the
// power of 2` is 225.


/*

const transmogrify = (num1, num2, num3) => {
  return (num1 * num2) ** num3
  }

console.log(transmogrify(5, 3, 2)); //      => 225
console.log(transmogrify(9, 2, 3));  //     => 5832

*/




// ### Objects

// ## Syntax

// List and describe each individual piece of syntax that we use to construct
//   an object. Don't leave anything out! The list is finite.

/*

{} curly braces define the object.
properties/value pairs are inside of {}s
Each keys and values are seperated by a colon :
key/value pairs are also seperated by (,)s

*/

// ## Me

// 1. Create an empty object called `me`.

// 2. Assign it properties for **name**, **age**, and **email** with corresponding values.


/*

  const me = {
    name: 'nate',
    age: 29,
    email: 'natepappenhagen@gmail.com',
  }

  console.log(me);

// 3. Using dot notation, access the **name** property in your object.
  console.log(me.name);

// 4. Without writing directly into the object, update the value of **age** to be 1000 years old.

  me.age = 1000;

// 5. Using dot notation, verify that **age** has been updated.
  console.log(me.age);


//  6. Add a key to this object called: "place of residence" and give it a
//  value of your hometown. Note that the key has spaces, therefore you cannot use dot notation.

 me['place of residence'] = 'downtowndenver';

 console.log(me['place of residence']);



*/





// ## Slimer
/*
```javascript
const monster = {
   name: "Slimer",
   color: "greenish",
   type: "plasm or ghost or something"
}
```
*/

// * Given the **slimer** object:
//     - What would you write to access the `name` and console.log it?
// console.log(monster.name);


//     - What would you write to change the `type` to 'creature' (without changing it inside the object)
// monster.type = "creature";
// console.log(monster.type);

//     - What would you write to add a key to the object called `age`, and set the age to 6?
// monster.age = 6;

//     - console.log the object to make sure `type` is creature, and `age` is 6
// console.log(monster);






// ## Ogres

// Let's say you want to make an adventure game where you are an adventurer
 // and you are going to fight **ogres**.

// Using **objects**, create **models** and have them interact.

// * how would you model your `adventurer`? Your adventurer will want a **name**
    // and **hitpoints**. What else would your adventurer need?

// * how would you model an `ogre`? Your ogre will want **hitpoints**.

// * Write a very small program that will simulate a battle between your
  // adventurer and an ogre.

	// * When your adventurer's hitpoints reach 0 the game is over.

	// * When your ogre's hitpoints reach 0 the game is over.

// * If you want to provide input to the game, you can run it in the Chrome
  // console (but that isn't strictly necessary for now).

  const adventurer = {
  	name: "finn",
  	hitpoints: 20,
  	weapon: "grass sword",
  	adventurerAttack() {
  		wizard.hitpoints -= 5;
  	}
  }

  const wizard = {
  	name: "iceKing",
  	hitpoints: 101,
  	weapon: "existential paralysis",
  	wizardAttack() {
  		adventurer.hitpoints -= 2;
  	}
  }



  const battle = (input1, input2) => {
  	while (adventurer.hitpoints > 0 && wizard.hitpoints > 0) {

  		     wizard.wizardAttack();
              console.log(`${wizard.name} attacked ${adventurer.name} with his ${adventurer.weapon} for ${wizard.hitpoints}`);
  		     adventurer.adventurerAttack();
  		        console.log(`${adventurer.name} attacked ${wizard.name} with his ${wizard.weapon} for 2 ${wizard.weapon}`);


          if (adventurer.hitpoints === 0 || wizard.hitpoints === 0) {
  				      console.log("Game over!")

  			}
  		}
  }

  console.log(fight(adventurer, wizard));









/*


# EXTRA STUFF

## Cat Combinator

### 1. Mama cat
* Define an object called `cat1` that contains the following properties:
	* name
	* breed
	* age (a number)

* console.log the cat's age
* console.log the cat's breed


### 2. Papa cat
* Define an object called `cat2` that also contains the properties:
	* name
	* breed
	* age (a number)


### 3. Combine Cats!

The cats are multiplying!

Write a function `combineCats` that has two parameters `mama`, and `papa`. The function will take two arguments -- each a cat object.

* Pass `cat1` and `cat2` as arguments to the `combineCats` function. The function should console.log them.

Example:

```javascript
combineCats(cat1, cat2)
```

> { name: "Joe", age: 19, breed: "Mog" }

> { name: "Jam", age: 45, breed: "Siamese" }


**This is to demonstrate that functions can take objects as arguments**

You could also invoke the `combineCats` function by writing the objects straight into the parentheses:

```javascript
combineCats({ name: "Craig", age: 20, breed: "unknown" }, { name: "Linda", age: 20, breed: "undefined" });
```
<br>

* Make it so the `combineCats` function will return a combination of the two incoming cats
	* The result should be an object wherein the
		* name is a concatenation of the parents' names
		* the age is 1
		* the breed is each of the parents' breeds with a hyphen in between

Example:

```javascript
console.log(combineCats(cat1, cat2));
```

Result:

![](https://i.imgur.com/CEB2ire.png)

**This is to demonstrate that a function can return an object**

<br>
<hr>

## 4. Cat brain bender

If `catCombinator` returns an **object**, and if `catCombinator` takes **objects** as **arguments**, then it stands to reason that:

`catCombinator` can use **itself** as its own argument.

Take a second to stew on that . . .

What is the result of:

```javascript
console.log(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)));
```

Whoa . . .

The above console.log is **two levels** deep of combineCats.

* Write a console.log that is **three levels** deep of combineCats.
 combineCats should have two arguments, each which are combineCats,
  each which have two arguments, each which are combineCats.

Your output should look something like:

![](https://i.imgur.com/zuTzm5X.png)
*/
