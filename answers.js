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

// for (let k = 1; k <= 100; k++){
//     if(k % 3  === 0 && k % 5 === 0){
//         console.log("FizzBuzz" )
//     }else if(k % 3 === 0){
//         console.log("Fizz")
//     }else if (k % 5 === 0){
//         console.log("BUZZ")
//     }else{
//         console.log(k)
//     }
// }

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

// Yell at the Ninja Turtles
// Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)
// Use a for of loop(not a typo - try it out! Try a for ofloop) to call toUpperCase()on each of them and print out the result.
const ninjaTurtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo'];

for (let elementToUpperCase of ninjaTurtles){
    console.log(elementToUpperCase.toUpperCase())
}

// Methods, Revisited

const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

// Console log: the index of Titanic
console.log(favMovies.indexOf('Titanic'))

// Do the following and console.log the final results (I have included some thought questions, you don't have to write out an answer for those marked as such):

// use the .sort method Thought question: what did this do to the array? Did it permanently alter it? 
// It permanently alter the array and make it in aphebetical order
favMovies.sort()
console.log(favMovies)

// Use the method pop
favMovies.pop();
console.log(favMovies)

// push"Guardians of the Galaxy"
favMovies.push("Guardians of the Galaxy")
console.log(favMovies)
// Reverse the array
favMovies.reverse()

// Use the shift method
favMovies.shift()
console.log(favMovies)

// unshift- what does it return?
favMovies.unshift("Guardians of the Galaxy")
console.log(favMovies)

// splice"Django Unchained" and add "Avatar" (try finding the index of "Django Unchained", instead of counting it yourself) Thought question: did this permanently alter our array?
// (favMovies.indexOf("Django Unchained"))  -- This to get the index of the element
favMovies.splice(favMovies.indexOf("Django Unchained"), 1, "Avatar");

console.log(favMovies)


// slice the last half of the array (challenge yourself and try to programatically determine the middle of the array rather than counting it and hard coding it) - Thought question: did this permanently alter our array?
console.log(favMovies.slice(favMovies.length - 5))    // This does not remain permanent. Th next line shows back everything that the array contain
console.log(favMovies)

// store the value of your slicein a variable, console.log it - Thought question: what is going on here?
let sliceArr = favMovies.slice(favMovies.length - 5)

// console.log your final results
console.log(sliceArr)

// After running the above tasks, console.log the index of "Fast and Furious" -We removed it from the array, what value do we get when we look for the index of something that is not in the array?
console.log(favMovies.indexOf("Fast and Furious"))
console.log(sliceArr.indexOf("Fast and Furious"))

//Thought question: that we declared the variable favMovieswith const, and yet, we were allowed to change the array. Weird? Should we have used let?
// const will work very well here since we are not reassigning but mutating. Let will work best when we are reassigning.

// Where is Waldo
// With the following multi-dimensional array
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];

// Remove Eggbert (hint look at the slice/splice method(s))
whereIsWaldo.splice(1, 1)
console.log(whereIsWaldo)

// Change "Neff" to "No One"
whereIsWaldo[1][2] = "No One";
console.log(whereIsWaldo)

// Access and console.log "Waldo"
console.log(whereIsWaldo[2][1][1]);

// Excited Kitten
// Write code that logs "Love me, pet me! HSSSSSS!" 20 times.
// For every even number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", or "...why does the red dot always get away..." at random.


// Find the Median
// Find the median number in the following numsarray, then console.log that number.
// hint if you check the length of the array / 2, you might get not get a whole number. In which case, look into Math.floor( // something )
const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];

let newNums = nums.sort()
function median(){
    for (let l = 0; l < nums.length; l++){
    let u = Math.floor(nums.length/2)
    if (nums.length % 2 === 0){
        return nums[u]
    }else if(nums.length % 2 != 0){
        return Math.floor((nums[u - 1] + nums[u])/2)
    }
    
    }

}
console.log(median())