//nested-if
let a=10,b=20,c=12;
if(a>b){
    if(a>c)
    console.log(`max:${a}`)
    else
    console.log(`max:${c}`)
}
else{
    if(b>c)
    console.log(`max:${b}`)
    else
    console.log(`max:${c}`)
}