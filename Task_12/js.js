var man = {
  "name" : "Dima",
  "age" : 33,
  "gender": "male",
  "INN": "2003919292"
};

console.log(man);

var today = new Date();
var year = today.getFullYear();
var birthYear = year - man.age;

console.log("Год рождения ",birthYear);
