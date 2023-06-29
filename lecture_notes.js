let nums = [1, 2, 3, 4]

// arr1.push()
// arr1.pop()
// arr1.slice()

// arr1.forEach()
// arr1.map()

// for loop that does not keep track of index
// for(const num of nums){
//     console.log(num)
// }

// for loop that does not keep track of index; if you want it to, add the following mods
// for(const num of nums){
//     i = 0
//     console.log(num)
//     i++
// }

// Given an array, if we want to print "Element x is at index i":


// for (let i = 0; i < nums.length; i++) {
//     console.log(`Element ${nums[i]} is at index ${i}`)
// }   

// anonymous function with our parameters followed by function block in the curly braces
// nums.forEach(function(element, index) {
//     console.log(`Element ${element} is at index ${index}`)    
// })
// function(element, index) is our callback function

// translate into an arrow function
// nums.forEach((num, i) => console.log(`Element ${num} is at index ${i}`))

// different ways to use .forEach

let nums1 = [1, 2, 3, 4]

nums.forEach(function(num, i) {
    num += 10 // num = num + 10
    console.log(num)
})

console.log(nums)
// you can see the array is not modified

// nums.forEach(function(num, i) {
//     num += 10 // num = num + 10
//     console.log(num)
//     nums[i] = num // actually modifies the original nums array
//     console.log(nums)
// })

console.log(nums)

// nums.forEach((num, i) => num + 10) // doesn't modify original array
nums.forEach((num, i) => nums[i] = num + 10) // mutates nums array

console.log(nums)

nums.map(function(num) {
    return num =+ 2
    // the return is being sent to a new array created by '.map'
    // '.map' being the outer function here, the method
})

console.log(nums)

const mappedArr = nums.map(function(num) {
    return num += 2
})
// if we don't save it to a new variable, the new array being returned doesn't go anywhere

console.log(mappedArr)

// anonymous arrow function
const mappedArr2 = nums.map((num) => num += 2)

// writing out callback function explicitly so we can see what's happening

const cb = (num) => {
    return num + 2
}

const mappedArr3 = nums.map(cb)
console.log(mappedArr3)

const filteredArr = nums.filter((num) => num % 2 === 0)

// another way to write this
// const filteredArr = nums.filter((num) => {
//     return num % 2 === 0) // true/false
// })

console.log(filteredArr)

// Write the callback and write our own filter method separately?

// Callback - logic: outer fn will pass in each number in an array to this callback function. Callback must evaluate whether the num is even, if so return the number, and outer function will push this number to the new array.

const evenNumCallback = (num) => {
    if (num % 2 === 0) {
        return num
    }
}

// write the code for .filter
const filterCopy = (arr, cb) => {
    let newArray = [] // 1: [] // 2: [2]
    for (let i = 0; i < arr.length; i++) {
        let newValue = cb(arr[i]) // evenNumCallback(1) --> should have no return since 1 is not even number and will not evaluate
        // evenNumCallback(2) --> should return 2
        if (newValue) {
            newArray.push(newValue)
        }
    }
    return newArray
}

// const filteredNumArr = filterCopy(nums, evenNumCallback)
// console.log(filteredNumArr)

console.log(filterCopy(nums, evenNumCallback))
console.log(nums)

let nums2 = [0, 1, 2, 3, 4]
const reducedArr = nums2.reduce((acc, curr) => acc + curr)
// at first iteration, acc = 0, curr = 1 --> 0 + 1 = 1, next iteration acc will start as 1
// at second iteration, acc = 1, curr = 2 --> 1 + 2 = 3, next iteration acc will start as 3
// at first iteration, acc = 3, curr = 3 --> 3 + 3 = 6, next iteration acc will start as 6
// acc = 6, curr = 4, 6 + 4 = 10, return 10

console.log(reducedArr)

// const newReduced = nums2.reduce((a, c) => {return a + c}, 10) // a will equal 10 when c = 0
const newReduced = nums2.reduce((a, c) => a + c, 10)

// const newReduced = nums2.reduce((a, c) => {
//     return a + c
// }, 10)
// more common way to write this
// if you use curly braces, you have to write a return

console.log(newReduced)

const myNum = nums2.filter(num => num > 2) // [3, 4]
                    .map(num => num * 3) // [9, 12]
                    .reduce((acc, curr) => acc - curr) // -3

console.log(myNum)