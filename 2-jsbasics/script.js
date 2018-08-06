/*console.log('Hello World');*/
//variables
/*
var name='John';
console.log(name);

var lastName='Smith';
console.log(lastName);

var age=25;
console.log(age);

var fullAge=true;
console.log(fullAge);*/

/*
var age=25;
var name="Trisa";
console.log(age+name);
console.log(age+age);

var job,isMarried;
console.log(job);

job="teacher";
isMarried=false;
console.log(name + 'is a' + age + 'year old' + job + 'Is he mariied?' + isMarried);

job='driver';
age='thirty six';
console.log(name + 'is a ' + age + 'year old ' + job + ' Is he married? ' + isMarried);


//prompt
//var lastName=prompt('What is the last name?');
//console.log(lastName);

//alert
alert(name + ' is a ' + age + ' year old ' + job + ' Is he mariied? ' + isMarried);*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//operator
/*var now=2016;
var birthDate=now - 25;

var birthDate=now - 25*2;
//console.log(birthDate);

var ageJohn = 30;
var ageMark = 30;

ageJohn=ageMark=(3 + 5) * 4 - 6;
ageJohn++;//ageJohn=ageJohn+1;

ageMark*=2; //ageMark=ageMark*2;
console.log(ageJohn);
console.log(ageMark);
var name="John";
var age=26;
var isMarried='no';

  if(isMarried === 'yes')
  {
    console.log(name + 'isMarried');
  }
  else{
      console.log(name + ' will happily married soon :)');
  }*/


  /*isMarried=false;
if(isMarried){
	console.log('yes');
}
else{
console.log('no');
}


if(23=="23"){
	console.log("Something to print");// Something to print
}

if(23==="23"){
	console.log("Something to print");
}//type version will not work. ie string will not convert to int and vice versa
*/
/////////////////////////////////////////////////////////////////////////////////////////////////////
//boolean logic and switch
/*
var age=16;
if(age < 20){
	console.log("John is a teenager");
}
else if(age >= 20 && age < 30){
	console.log("john is a young man ");
}
else{
	console.log("not a man");
}

//switch 
var job = 'teacher';

job=prompt(" What does john do? ");
switch (job){
	case 'teacher':
		console.log("John teaches kids. ");
		break;
	case 'driver':
		console.log(" John drives a cab in Delhi.");
		break;
	case 'cop':
		console.log("John helps fight crime");
		break;
	default:
		console.log("John does something else ");
}*/

////////////////////////////////////////////////////
//challenge 1
/*var h1=160;
var age1=19
var h2=170;
var age2=23;

var h3=165;
var age3=25;
var s1=h1 + (5 * age1);
var s2= h2 + (5 * age2);

if(s1 > s2){
	console.log("John won the game ");

}
else if(s1<s2){
	console.log(" Smith won the game ");
	
}
else{
	console.log("both players have same value");
}



var score3=h3 + (5 * ages);

if(s1>s2 && s1>s3){
	console.log("John won the game ");
}
else if(s2>s1 && s2>s3){
	console.log("Smith won the game ");	
}
else if(s3>s1 && s3>s2){
	console.log("Kiran won the game ");	
}
else{
	console.log("game is a draw ");	
}*/

//////////////////////////////////////////////////////
//functions
/*function calculateAge(yearOfBirth){
	var age=2016-yearOfBirth;
	return age;
}
var ageJohn=calculateAge(1990);
var ageMike=calculateAge(1969);
var ageMary=calculateAge(1948);
console.log(ageJohn);
console.log(ageMike);
console.log(ageMary);


function yearsUntilRetirement(name,year){
	var age= calculateAge(year);
	var retirement = 65 -age;
	if(retirement >= 0){
	console.log(name + ' retires in ' + retirement + ' years.');
	}
	else{
		console.log(name + 'is already retired.');
	}
}
yearsUntilRetirement('John',1990);
yearsUntilRetirement('Mike',1969);
yearsUntilRetirement('Mary',1948);*/
/////////////////////////////////////////////////////
// Statements and expressions

/*function someFun(para){ //fn stmt bcz it is just an action
	//code
}
var someFun = function(para){ //fn exp bcz it produces a value
	//code
}

//expressions
3+5;
var x=3;

//statements
if(x === 5){
	// do something
}*/

////////////////////////////////////////////////////////////
//arrays
/* var names=['John','Mark','Jane'];
var years= new Array(1990,1964,1945);

console.log(names);
console.log(names[0]);
names[1]='Ben';
console.log(names);

var john=['John','Smith',1990,'teacher',false];

john.push('blue'); //add a value at the end of the arrays
john.unshift('Mr.'); // adds a value at the beginning of the array
john.pop(); // removes a value from the end of the array
john.shift(); // removes a value from the begining of the array
console.log(john);

john.indexOf('Smith'); // retures the index of the array if we pass a value
alert(john.indexOf('Smith'));

if(john.indexOf('teacher')=== -1){
	console.log('John is not a teacher'); 
} */

///////////////////////////////////////////////////////////////
// Objects
/*var john ={
	name: 'John',
	lastName:'Smith',
	yearOfBirth:1990,
	job:'teacher',
	isMarried:false
};
console.log(john);
console.log(john.lastName);
console.log(john['lastName']); // two ways to retreive a value out of a object

var xyz='job';
console.log(john[xyz]);

john.lastName='Miller';
john['job']='programmer';
console.log(john);

var jane= new Object();
jane.name='Jane';
jane.lastName='Smith';
jane.['yearOfBirth']=1969;
jane.['job']='retired';
jane.isMarried=true;

console.log(jane); */

/////////////////////////////////////////////////////////////
// functions in objects
/*
var john ={
	name: 'John',
	lastName:'Smith',
	yearOfBirth:1990,
	job:'teacher',
	isMarried:false,
	family:['Jane','Mark','Bob'],
	calculateAge: function(yearOfBirth){
		return 2016-yearOfBirth;
	}
};
console.log(john.family);
console.log(john.family[2]);
console.log(john.calculateAge(1990));

// version 1
var john ={
	name: 'John',
	lastName:'Smith',
	yearOfBirth:1990,
	job:'teacher',
	isMarried:false,
	family:['Jane','Mark','Bob'],
	calculateAge: function(){
		return 2016-this.yearOfBirth; // it will take the yearOfBirth as 1990
	}
};
console.log(john.calculateAge());

var age=john.calculateAge();
john.age=age;

console.log(john); */

//verssion 2
/*var john ={
	name: 'John',
	lastName:'Smith',
	yearOfBirth:1990,
	job:'teacher',
	isMarried:false,
	family:['Jane','Mark','Bob'],
	calculateAge: function(){
		//return 2016-this.yearOfBirth; // it will take the yearOfBirth as 1990
		this.age=2016-this.yearOfBirth;
	}
};
john.calculateAge();
console.log(john);


var mike ={
	yearOfBirth:1958,
	calculateAge: function(){
		//return 2016-this.yearOfBirth; // it will take the yearOfBirth as 1990
		this.age=2016-this.yearOfBirth;
	}
};
mike.calculateAge();
console.log(mike);*/
//////////////////////////////////////////////////////////////////////////////////////////////////
//Loops

/////////////////for loop
/*for(var i=0; i<10; i++){
	console.log(i);
}

var names=['John','Jane','Mary','Mark','Bob'];
for(var i=0;i<5;i++)
{
	console.log(names[i]);
}

var names=['John','Jane','Mary','Mark','Bob'];
for(var i=0;i<names.length;i++)
{
	console.log(names[i]);
}

for(var i=names.length-1; i>=0; i--){
  console.log(names[i]);
}

///////while loops
var names=['John','Jane','Mary','Mark','Bob'];
var i=0;
while(i<names.length){
  console.log(names[i]);
  i++;
}

for(var i=1;i<=5;i++)
{
  console.log(i);
  if(i===3){
    break;
  }
}

for(var i=1;i<=5;i++)
{
  if(i===3){
    continue;
  }
  console.log(i);
}*/

///////////////////////////////////////////////////////
//coding challenge 2
/* 
var years=[1959,1990,2010,1995];
var ages=[];


for(var i=0;i<years.length;i++){
    ages[i]=2016-years[i];
    console.log(ages[i]);
}

for(i=0;i<ages.length;i++){
  if(ages[i]>=18){
    console.log('Persion '+ (i+1) + 'with age'+ ages[i]+'is of full age');
  }
  else{
    console.log('Persion' + (i+1) + ' with age'+ ages[i]+'is not a full age');
  }
}

function printFullAge(years){
  var ages=[];
  var fullAges=[];

for(var i=0;i<years.length;i++){
    ages[i]=2016-years[i];
    console.log(ages[i]);
}

for(i=0;i<ages.length;i++){
  if(ages[i]>=18){
    console.log('Persion' + (i+1) + ' with age'+ ages[i]+'is of full age');
    fullAges.push(true);
  }
  else{
    console.log('Persion' + (i+1) + ' with age'+ ages[i]+'is not a full age');
    fullAges.push(false);
  }
}
return fullAges;
}

var full_1=printFullAge(years);
var full_2=printFullAge([2001,1991,1985]); */

//////////////////////////////////////////////////////////
//versions of js
// version- ECMAScript 1/ ES5 /ES2015 /ES2016








  

