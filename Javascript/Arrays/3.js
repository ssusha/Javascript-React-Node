//different array types

let items = [
    12,
    23.34,
    true,
    'Ram',
    {sid:1,sname:'cherri'},
    ()=>5
];
console.log(items[0]);
console.log(items[1]);
console.log(items[2]);
console.log(items[3]);
console.log(`id:${items[4].sid} name :${items[4].sname}`);
console.log(items[5]());