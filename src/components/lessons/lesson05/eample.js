// Задача: вернуть новый макссив, значением которого будут длины строк исходного массива

const numbersArray = ['one', 'two', 'three', 'four', 'five'];

const newArray = numbersArray.map((number)=>number.length);
console.log(newArray);
