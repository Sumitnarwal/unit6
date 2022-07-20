///curring closure
// function sum(a) {
//     console.log("a", a)
//     let b = 3
//    return  function (b) {
//          console.log(a + b)
//     }

// }
// sum(4)(5)

//////////////////////////////////////////
// let sum=function(a){
//     console.log("a",a)
//     let b=3
//     return function(b){
//         return a+b
//     }
// }

// let store=sum(2)

// console.log(store(5))

/////////////////////

// let sum=function(a,b,c){
//     return{
//         getSumTwo:function(){
//             return a+b;
//         },
//         getSumThree:function(){
//             return a+b+c
//         }
//     }
// }
// let store=sum(3,4,5)
// console.log(store.getSumTwo())
// console.log(store.getSumThree())






async function test(delay) {
    let promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("done!");
        }, delay);
    })

    let result = await promise;

  //  console.log(result);
}

test(1000);




