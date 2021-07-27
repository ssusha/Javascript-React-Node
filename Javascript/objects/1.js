let date=new Date();
console.log(date);
//let date1=new Date(2018,11,24);
//console.log(date1);
//let date2=new Date(2018,10,13,10,33,44);
//console.log(date2);
console.log('year'+date.getFullYear());
console.log('Month'+date.getMonth());
console.log('date'+date.getDate());
console.log('day'+date.getday());
console.log('date&time'+date.toLocaleString());
console.log('full date'+date.toLocaleDateString());
let date2=new date('2015-03-23');
console.log(date2.toLocaleDateString());

