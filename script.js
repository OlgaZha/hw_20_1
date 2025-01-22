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