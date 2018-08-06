/////////////////////////////////////////////////////////
// Hoisting in case of functions
/*calculateAge(1990); // here hoisting works for method declaration

function calculateAge(year){
  console.log(2016-year);
}


//retirement(1985); //here hoisting will not work for the method expressions
var retirement = function(year){
  console.log(65-(2016-year));
}
retirement(1985);


//Hoisting in case of variables
console.log(age); //  here the age variable is undefined
var age=23;
//console.log(age);

function foo(){
  var age=65;
  console.log(age); //prints 65
}

foo();
console.log(age); //prints 23*/

////////////////////////////////////////////////////
//Scoping

/*var a='Hello';
first();

function first()
{
  var b='Hi';
  second();

    function second()
    {
      var c='Hey';
      console.log(a+ b + c);
    }
}

//eg 2
var a='Hello';
first();

function first()
{
  var b='Hi';
  second();

    function second()
    {
      var c='Hey';
      third();
    }
}

function third()
{
  var d='John';
  //console.log(c);//error
  console.log(a+d);
} */

/////////////////////////////////////////////////
//this keyword

//console.log(this);
/*calculateAge(1985);

function calculateAge(year){
  console.log(2016-year);
  console.log(this);
}*/

var john={
  name:'John',
  yearOfBirth:1990,
  calculateAge:function(){
    console.log(this);
    console.log(2016-this.yearOfBirth);

    /*function innerFunction(){
      console.log(this);
    }
    innerFunction();*/
  }
}
john.calculateAge();

var mike={
  name:'Mike',
  yearOfBirth:1984
};

mike.calculateAge=john.calculateAge;
mike.calculateAge();








