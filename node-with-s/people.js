var people = ['sakib', 'tamim', 'bipon']

var a = 6;

function test(){
    console.log("test")
}
// console.log(module)
// module.exports = people;

module.exports = {
    people: people,
    a: a,
    test: test
}

// (function(){
//     var a = 5;
// })();