// Задача 1
// У вас есть объект с данными о машине.
// Используйте деструктуризацию, чтобы извлечь марку и модель в отдельные переменные  {
//  brand: 'Toyota',
//  model: 'Corolla',
//  year: 2020,
//  color: 'red'
//  };

let car = {
    brand: 'Toyota',
    model: 'Corolla',
    year: 2020,
    color: 'red' 
}

// let brand = car.brand;
// let model = car.model;

//деструктуризация объекта
const {brand, model} = car;

console.log(brand);
console.log(model);

// let restfOfCar = {
    //     year: car.year, 
    //     color: car.color,
    // }

//rest-оператор   
const {...restfOfCar} = car;
console.log(restfOfCar);

// Задача 2
// У вас есть массив чисел. Верните только те числа, которые больше 10.
// const numbers = [5, 12, 8, 20, 15, 3];


const numbers = [5, 12, 8, 20, 15, 3];

let newNumbers = numbers.map(value => {
    return value *2;
});
console.log(newNumbers);


let bigerThenTen = numbers.filter((number)=> number > 10);




//примеры методов:
const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNumbers = numbers.map((value, index, array) => {
//   // console.log("1 argument: ", value);
//   // console.log("2 argument: ", index);
//   // console.log("3 argument: ", array);
//   return value * 2;
// });
// console.log(newNumbers);
// /const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filteredArray = numbers1.map((value) => {
  if (value <= 5) {
    return value;
  }
});
// const filteredArray = numbers1.filter((value) => {
//   return value <= 5;
// });
console.log(filteredArray);


// Создайте новый массив, в который будут входить только значения имен [
    // { name: "John", age: 20 },
    // { name: "Tom", age: 22 },
    // { name: "Bob", age: 21 },
//   ];

const users = [
    { name: "John", age: 20 },
    { name: "Tom", age: 22 },
    { name: "Bob", age: 21 },
];

const namesOfUsers = users.map((item)=>{
return item.name;
});

console.log(namesOfUsers);
