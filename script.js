function numberGraterThan100() {let number;

do {
  number = prompt("Please enter a number greater than 100:", "");
  if (number === null || number.trim() === "") {
    break;
  }
} while (number <= 100); 
}

function factorial(n) {
    if (n===0) return 1;
    let result = 1;
    for(let i = 1; i <= n; i++){
        result *= i;
    };
    return result;
}
console.log(factorial(5));

function stringLongestWord() {
    let phrase = "This is the most expensive piece of jewelry in the store."
    let words = phrase.split(" ");
    let theLongestWord = "";
    for(let i = 0; i < words.length; i++) {
        if (words[i].length > theLongestWord.length){
            theLongestWord = words[i];
        }
    }
    console.log(theLongestWord)
}
stringLongestWord();


function remoweDuplicatedValue() {
    let arr = [2, 4, 7, 1, 8, 2, 7, 7, 4, 5, 9];
    let newArr = [];
    for(let i = 0; i <arr.length; i++) {
        if(!newArr.includes(arr[i])){
            newArr.push(arr[i]);
        }
    }
console.log(newArr);
}
remoweDuplicatedValue();


function primeNumbers(){
let primeArray = [];
let num = 5;
for(let i = 2; i <= num; i++) {
   if(num%1===0 && num%num===0){
    primeArray.push(i);
    } 
}
console.log(primeArray)
}
//primeNumbers не вийшло


let array1 = [1, 0, 2, 3, 4];
let array2 = [3, 5, 6, 7, 8, 13];

let array3 = [];
let sum = 0;

let maxLength = array1.length > array2.length ? array1.length : array2.length;

for (let i = 0; i < maxLength; i++) {
    let val1 = 0;
    let val2 = 0;

    if (i < array1.length) {
        val1 = array1[i];
    }

    if (i < array2.length) {
        val2 = array2[i]
    }
    sum = val1 + val2;
    array3.push(sum)
}

console.log(array3)