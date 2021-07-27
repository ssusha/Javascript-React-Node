function Square(n){
    let result=n*n;
    return result;
}

function Greet(name){
    let message='hello'+name;
    return message;
}

function IsEven(number){
    //let IsEven=number%2==0?true:false
    //return IsEven;
    if(number%2==0)
    return true;
    else
    return false;
}
let result=Square(10);
console.log(result);
result=Greet('dhoni');
console.log(result);
console.log(IsEven(110)==true?'Even':'Odd');