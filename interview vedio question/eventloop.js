// function foo(b) {
//     let a = 10
//     return a + b + 11
//   }
  
//   function bar(x) {
//     let y = 3
//     return foo(x * y)
//   }
  
//   const baz = bar(7)

// console.log(baz)


(function() {

    console.log('this is the start');
  
    setTimeout(function cb() {
      console.log('Callback 1: this is a msg from call back');
    },1000); 
  
    console.log('this is just a message');
  
    setTimeout(function cb1() {
      console.log('Callback 2: this is a msg from call back');
    }, 0);
  
    console.log('this is the end');
  
  })
  
  ();