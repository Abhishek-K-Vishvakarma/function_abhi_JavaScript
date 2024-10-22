function FunName(){
     
     this.item = (name, title, age, city)=>{
          this.name = name;
          this.title = title;
          this.age  = age;
          this.city = city;   
     }
     
     this.data = function(){
          console.log(this.name);
          console.log(this.title);
          console.log(this.age);
          console.log(this.city);
     };
};

let list = new FunName();
list.item('Abhishek', 'Vishvakarma', 23, 'Varanasi');
list.data();

// With arrow function >>>>>>>>>>>>>>>>>>>>

function FunName_name() {

     this.item_data = (name, title, age, city) => {
          this.name = name;
          this.title = title;
          this.age = age;
          this.city = city;
     }

     this.data_item = () =>  {
          console.log(this.name);
          console.log(this.title);
          console.log(this.age);
          console.log(this.city);
     };
};

let list_data = new FunName_name();
list_data.item_data('Abhi', 'Vishvakarma', 21, 'Varanasi');
list_data.data_item();


//  Second method of Prototype >>>>>>>>>>>>

function Funname(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;

        Funname.prototype.getFullData = function(){
          return this.firstName + " " + this.lastName;
        }
}

let all_list_of_data = new Funname('Peter', 'Parker');

console.log(all_list_of_data.getFullData());


function Readers() {
     this.name;
     this.sub = 2;
     this.p1;
     this.p2;
     this.compt = function (marks) {
          marks.sub -= 1;
          alert(this.name + " Pass  only " + marks.sub + " Subject ");
     }
     this.perc = function (per) {
          per.p1 = 100;
          per.p2 = 200
          alert("Alan= " + per.p1 + "," + " Peter= " + per.p2);
     }
}

var data1 = new Readers();
var data2 = new Readers();
data1.name = "Alan";
data2.name = "Peter";
data1.perc(data2);
data1.compt(data2);
data1.p1 = 100 / 200 * 100;
data2.p2 = 200 / 200 * 100;
alert(data2.name + " Pass " + " to " + data1.name + " into " + data2.p2);
alert(data1.name + " Fail " + " by " + data1.p1);
alert(data2.name + " destroye of " + data1.name + " by " + data1.sub + " Subject ");

Readers.prototype.totalmarks = 200;
alert("Total Marks of Subjects : " + data1.totalmarks);