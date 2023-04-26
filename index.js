let str = 'hello';
console.log(str.toUpperCase());
console.log(str.toLowerCase())
console.log(str.toLocaleLowerCase())
console.log(str.toLocaleUpperCase())
console.log(str.toString())


let number = 12.98765;
console.log(number.toFixed())
console.log(number.toLocaleString(2))
console.log(number.toString())
console.log(number.toExponential())

// let capitalizeWord = 'word';
// console.log(capitalizeWord.slice(1).toUpperCase)
function capitalizeWord(word) {
    return word[0].toUpperCase() + word.slice(1);
    //   return word[0].toUpperCase() + word.substring(1);
  }
  console.log(capitalizeWord('helloword ggg fff'))


  