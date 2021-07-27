let numbers=[11,22,33,44,55,66];
//access all array elements
for(let i=0;i<numbers.length;i++){
    console.log(numbers[i]);
}
for (let i in numbers){ // index is assigned in in loop
    console.log(numbers[i]);
}

for (let i of numbers){  // only value is assigned in of loop
    console.log(i);
}