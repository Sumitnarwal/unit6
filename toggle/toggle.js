
let tog=null;

function toggler(a,b,c) {
   if(tog===null){
       tog=a
   }
   
   return function(){
    console.log(tog);
    if(tog==a){
        tog=b
    }else if (tog==b){
        tog=c
    }
   }
}

const toggle = toggler(1,2,3)

toggle()
// 1
toggle()
// 2
toggle()
// 3

