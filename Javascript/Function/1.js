function Hello(){
    console.log('hello world..');
}

//calling function
Hello();

function Greet(name){
    Hello();
    console.log(`hello ${name}`);
}

Greet('sachin');
Greet('rahul');

function Add(a,b) {
    let result=a+b;
    console.log(`${a}+${b}=${result}`)
}

Add (3,5);

function Sum(a,b=10) {
    let result=a+b;
    console.log(`${a}+${b}=${result}`)
}

Sum(12);
Sum(13,20);