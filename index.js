console.log("Hello");

// let lastName = "Babbar"; //String

// let firstName = new String("Love");  //typeof : Object

//Split...
// let message = `Hello ${lastName}

// Thanks for the opportunity

// Regards 
// Aagam`;

// console.log(message);

// let words = message.split(' ');
// console.log(words);

//Date...
// let date = new Date();
// console.log(date);

// let date2 = new Date(1998, 11, 26, 7);
// console.log(date2);

// date2.setFullYear(1999);
// console.log(date2);



//Arrays.....(Primitive)...

// let numbers  = [1,3,5,7];
// console.log(numbers);

//Insertion...

// End -> Push
// Start -> unshift
// Middle -> splice

// Searching....

// console.log(numbers.indexOf(9 ));

// //We want to check if the number present in array
// if(numbers.indexOf(3) != -1)
//     console.log("present");    //#1


// console.log(numbers.includes(7)); //#2

// console.log(numbers.indexOf(4,2));

//Arrays......Object....
//  let courses = [
//     {No:1, Name:'Agam'},
//     {No:2, Name:'Isha'}
//  ];

//  console.log(courses);

 //CallBack Function.....
//  let course =courses.find(function(course){
//     return course.Name === 'Isha';
//  });

//Arrow Function....
// let course =courses.find(course => course.Name === 'Agam');

//  console.log(course);

 
//Remove Element...
// let numbers = [1,2,3,4,5,6,7];

// numbers.pop();
// numbers.shift();
// numbers.splice(2,1);

// console.log(numbers);


//Emptying an Array......
// let numbers = [1,2,3,4,5];
// let numbers2 = numbers;

// numbers = [];             #1
// numbers.length = 0;       #2
// numbers.splice(0, numbers.length);  #3

// console.log(numbers);
// console.log(numbers2); 


//Combining and Slicing Array......
//Combining....
// let first = [1,2,3,4];
// let second = [5,6,7,8];

// let combined = first.concat(second);
// console.log(combined);

// //Slicing...
// let numbers = [1,2,3,4,5,6];

// let sliced = numbers.slice(2,4);
// console.log(sliced);

//Spread Operator....
// let first = [1,2,3];
// let second = [7,8,9];

// let combined = [...first,...second];
// console.log(combined);

// let another = [...combined];
// console.log(another);


//Iterating an array...
// let arr = [10,20,30,40,50];

//For of Loop
// for(let value of arr){
//     console.log(value);
// }

//For Each Loop
// arr.forEach(number => console.log(number));  //Arrow Function


//Joined Arrays...
// let numbers = [10,20,30,40,50];

// let joined = numbers.join(',');
// console.log(joined);


//Split Method
// let message = 'This is my first messgae';
// let parts = message.split(' ');

// console.log(parts);
// let joined = parts.join('_');
// console.log(joined); 


//Sorting Arrays
// let numbers = [20,40,10,60,50];

// numbers.sort();
// console.log(numbers); 

//Filtering Arrays....
// let numbers = [1,3,-4,-9];

// let filtered = numbers.filter(value => value >= 0);

// console.log(filtered);

//Mapping Arrays....
//  let numbers = [7,8,9,10];

//  let items  = numbers.map (value => 'Student No.' + value);
//  console.log(items)


//Mapping with Ojects......
// let numbers = [1,3,-6,-9];
// let filtered = numbers.filter(value => value >= 0);

// let items = filtered.map(function(num){
//     // let obj = {value : num};
//     // return obj;
//     return {value:num};
// });

// let items = filtered.map( num => {value:num});

// let items = numbers.filter(value => value >=0).map(num => {value:num});  //Chaining

// console.log(items); 


//Reducing Arrays
let arr = [1,4,5];

let totalSum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(totalSum);


const x = [1,2,3];
x.push(4);
console.log(x.length);