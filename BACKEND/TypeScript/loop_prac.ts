// Print the numbers from 0 to 15.

// let i = 0
// let n = 15

// for (i; i <= n; i++)
// {

//     console.log(i);

// }


// Print the numbers from 12 to 24.

// let i = 12
// let n = 24

// for (i; i <= n; i++)
// {

//     console.log(i);

// }


// Print the ODD numbers from 7 to 31.

// let i = 7
// let n = 31

// for (i; i <= n; i++)
// {
//     if (i % 2 != 0) 
//     {

//         console.log(i);
//     }

// }


// Print the EVEN numbers from 10 to -20.

// let i = 10
// let n = -10

// for (i; i >= n; i--)
// {
//     if (i % 2 == 0) 
//     {

//         console.log(i);

//     }

// }


// Iterate through all numbers from 1 to 45.
// Print the following:
//   ● For multiples of 3 print “Fizz”
//   ● For multiples of 5 print “Buzz”
//   ● For multiples of 3 and 5 print “FizzBuzz”

// let i = 1
// let n = 45

// for (i; i <= n; i++)
// {
//     if (i % 3 == 0) 
//     {

//         console.log("Fizz");

//     }

//     else if (i % 5 == 0)
//     {

//         console.log("Buzz");

//     }

//     else if (i % 3 == 0 && i % 5 == 0) 
//     {

//         console.log("FizzBuzz");
//     }

//     else
//     {

//         console.log(i);
//     }

// }


// Print all the elements of the following array
// var thisIsAnArray = ["element1" , "element2" , "element3" , "element4"];

// var thisIsAnArray = ["element1", "element2", "element3", "element4"];

// for (var i = 0; i < thisIsAnArray.length; i++)
// {

//     console.log(thisIsAnArray[i]);

// }


// Calculate the sum of all the numbers in the following array
// var numbersArray = [1,13,22,123,49]

var numbersArray = [1, 13, 22, 123, 49];
var sum = 0;

for (let i = 0; i < numbersArray.length; i++) 
{
    sum = sum + numbersArray[i];
}

console.log("The sum is: " + sum);




