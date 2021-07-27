//Syantax for Arrow function
//let func=(arg1,arg2...)=>XPathExpression
//arrow function
let Hello=()=>'hello world'
let result=Hello();
console.log(result);


let Greet=(n)=>{
    let message='hello'+n;
    return message;
}

console.log(Greet('sachin'));
console.log(Greet('dhoni'));
let sum=(a,b)=>a+b;
console.log(sum(2,5));

let age=18;
let message1=age=>18?()=>'you can vote':()=>'try next time'
console.log(message1);


function f(f1,f2){
    return f1()+ ' '+ f2();
}
result=f(()=>'hello',()=>'tina')
console.log(result);