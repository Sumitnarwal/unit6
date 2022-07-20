


// function sleep(dellay) {
//     return new Promise((res, rej) => {
//         if (typeof (dellay) !== "number") {
//             rej("type of della should be Number")
//             return
//         }

//         setTimeout(() => {
//             res("It is Printing After Dellay")
//         }, dellay)
//     })
//         .then((res) => console.log(res))
//         .catch((err) => console.log(err))
// }

// sleep("2000")




// function sleep(delay) {
//     return new Promise((res, rej) => {

//         if (typeof(delay) != "number") {
//             rej("delay is not a number")
//             return
//         }

//         setTimeout(() => {
//             res("Output comes after delay")
//         }, delay)

//     }).then((res) => {
//         console.log(res)
//     }).catch((err) => {
//         console.log(err)
//     })
// }


// sleep(2000)



























async function test(d) {
    let promise = await new Promise(function (resolve, reject) {

        if (typeof (d) === "string") {
            reject("d is not a number")
            return
        }

        setTimeout(function () {
            resolve("done!");
        }, d);
    }).then((res) => {
        console.log(res)
    }).catch((err) => {
        console.log(err)
    })
    // let result = await promise;

    //   console.log(result);

}
test(2000);





































