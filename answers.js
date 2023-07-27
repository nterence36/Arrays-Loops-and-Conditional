// Part II: JavaScript Reps
// Easy Going
// Write a for loop that will log the numbers 1 through 20.

// for (let i = 1; i <= 20; i++){
//     console.log(i)
// }

// Get Even
// Write a for loop that will log only the even numbers in 0 through 200.
// Hint: Think about the increment expression.

// for (let k = 1; k <= 20; k++){
//     if(k % 2 === 0){
//         console.log(k)
//     }
// }

// Fizz Buzz
// This is a classic problem that you should get really comfortable solving. If you've solved it before, try to make it more elegant and short.
// Write a javascript application that logs all numbers from 1 - 100.
// If a number is divisible by 3 log "Fizz" instead of the number.
// If a number is divisible by 5 log "Buzz" instead of the number.
// If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.

for (let k = 1; k <= 100; k++){
    if(k % 3  === 0 && k % 5 === 0){
        console.log("FizzBuzz" )
    }else if(k % 3 === 0){
        console.log("Fizz")
    }else if (k % 5 === 0){
        console.log("BUZZ")
    }else{
        console.log(k)
    }
}

// Wild Wild Life
// Use the following arrays to answer the questions below (name,species ,age, hometown): You should be modifying the elements by accessing them. It is up to you which methods to use.
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

// Plantee just had her birthday; change Plantee's array to reflect her being a year older.
plantee[2]++;
// console.log(plantee)

// Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
wolfy[3] = "Gotham City"
console.log(wolfy)

// Give D'Art a second hometown by adding "Hawkins"
dart.push("Gotham City")
console.log(dart)

// Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfyarray and replace it with "Gameboy".
wolfy[0] = "Gameboy";
console.log(wolfy)