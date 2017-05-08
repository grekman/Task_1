var man = {
  "name" : "Dima",
  "age" : 33,
  "gender": "male",
  "INN": "2003919292",
  "mas" : [5,6,34,12,45],
  masSum : function() {
    var sum = 0;
    for (i in man.mas){
      var sum = sum + man.mas[i];
    }
    return sum;
  }
};

console.log(man);

var today = new Date();
var year = today.getFullYear();
var birthYear = year - man.age;

console.log("Год рождения ",birthYear);
console.log(man.mas[2]);
console.log(man.masSum());
