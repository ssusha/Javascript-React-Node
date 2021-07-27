if(true){
    var test = true;
}
console.log(test) // the variable exists after the block also

if(true){
    let test1=false;
}
console.log(test1) //exception

function f() {
    if(true){
        var msg='hi';
    }
    console.log(msg) //accessible
}
f();
console.log(msg) // not accessible

function f() {
    if(true){
        let msg='hi';
    }
    console.log(msg) //not accessible limited to block scope
}
f();
console.log(msg) // not accessible


let user='hari';
let user='jeson';
console.log(user); //error

var user='hari';
var user='jeson';
console.log(user); //prints jeson