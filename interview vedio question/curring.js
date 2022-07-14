///////////Normal function
//Currying is an advanced technique of working with functions. It’s used not only in JavaScript, but in other languages as well.
//Currying is a transformation of functions that translates a function from callable as f(a, b, c) into callable as f(a)(b)(c).


// function add(a, b, c) {
//     return a + b + c
// }
// let res = add(2, 3, 4)
// console.log(res)

//////////////// curring method
// function add(a) {
//     return function (b) {
//         return function (c) {
//             return a + b + c
//         }
//     }
// }

// let res = add(2)
// let data = res(3)
// let data1 = data(4)
// console.log(data1)
///or
//let res=add(2)(3)(4)

 ////////////////////////////


 let useObj={
    name:"sumit",
    age:26
 }

 function userInfo(obj){
    return function(userinfo){
        return obj[userinfo]
    }
 }
 let res=userInfo(useObj)
 console.log(res("age"))