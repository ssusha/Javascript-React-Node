function GetFlowers(){
    return[
        'Rose',
        'lilly',
        'tulips',
        'jasmine'
    ];
}
for (let flower of GetFlowers()){
    console.log(flower);
}

for (let flower in GetFlowers()){
    console.log(GetFlowers()[flower]);
}

function getStudents(){
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
    return students;
}

for (let student of getStudents()){
    console.log(`sid ${student.Sid} sname ${student.Sname} age ${student.age}`);
}