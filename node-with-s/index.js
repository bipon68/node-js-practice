const _ = require('lodash')
const people = require('./people')

// console.log(_.last([1, 2, 3]))


// console.log(window)

// setTimeout(() => {
//     console.log('test')
// }, 1000)

// const a = 5;

// console.log(global.a)

console.log(people.people)
people.test();

console.log(_.last(people.people))



