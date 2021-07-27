//Array of students

let students=[
    {Sid:1,Sname:'Rohan',age:10},
    {Sid:2,Sname:'ram',age:11},
    {Sid:3,Sname:'karan',age:10},
    {Sid:4,Sname:'john',age:11},
    {Sid:5,Sname:'jeson',age:10},
    {Sid:6,Sname:'tina',age:17},
    {Sid:7,Sname:'meena',age:10},
    {Sid:8,Sname:'monica',age:20},
]

let student=students[0];
console.log(`sid ${student.Sid} sname ${student.Sname} age ${student.age}`);


for(let student of students) {
    console.log(`sid ${student.Sid} sname ${student.Sname} age ${student.age}`);
}