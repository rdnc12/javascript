// 1. Reverse text
// Given a string of characters as input, write a function that returns it with the characters reversed.
//Don't use reverse function, use loops.

// Example input: reverseText(Hello World!)
// Example output: "!dlroW olleH"

function reverseText(stringValue) {

    let stringValueWords = stringValue.split(' ');
    console.log(stringValueWords);
    var reverseSentence = ' ';
    let temp = '';
    for (let i = 0; i < stringValueWords.length; i++) {
        let word = stringValueWords[i];
        console.log(word);


        for (let j = word.length - 1; j >= 0; j--) {
            temp += word[j];
            console.log(temp);
        }
        console.log(temp + ' ');

    }

    return reverseSentence = temp + '';
}

// 2. Palindrome checker
// A palindrome is a word or phrase that reads the same backward as forward.Write a function that checks for this.
// Don't use reverse function, use loops.

// Example input: isPalindrome('kayak')
// Example output: true

function isPalindrome(stringValue) {

    if (reverseText(stringValue) === stringValue)
        return true;
    else
        return false;

}
console.log(isPalindrome(''));

// 3. FizzBuzz
// Given a number as an input, print out every integer from 1 to that number.However, 
// when the integer is divisible by 2, print out “Fizz”; when it’s divisible by 3, print out “Buzz”;
// when it’s divisible by both 2 and 3, print out “Fizz Buzz”.Use for loops.

// Example input: fizzBuzz(11)
// Example output: [1, "Fizz", "Buzz", "Fizz", 5, "Fizz Buzz", 7, "Fizz", "Buzz", "Fizz", 11]

function fizzBuzz(numb) {

    var arraynumber = [];
    console.log(arraynumber);
    for (let i = 1; i < numb; i++) {

        if (i % 2 === 0 && i % 3 === 0)
            arraynumber.push("Fizz Buzz");
        else if (i % 2 === 0)
            arraynumber.push('Fizz');
        else if (i % 3 === 0)
            arraynumber.push('Buzz');
        else arraynumber.push(i);

    }
    console.log(arraynumber);
}
fizzBuzz(10);

// 4. Reverse Array
// Given an array of items, reverse the order.Don't use reverse function, use loops.

// Example input: reverseArray([22, 'hi', 12])
// Example output: [12, 'hi', 22]

function reverseArray([arrItems]) {

    let revArr = [];

    for (var i = arrItems.length - 1; i >= 0; i--) {
        revArr.push(arrItems[i]);
    }
    return revArr;
}
var a = [22, 'hi', 12];
console.log(reverseArray([a]));


// 6. Capitalization
// Given a phrase, capitalize every word.

// Example input: capitalizeWords('i love javaScript!')
// Example output: 'I Love JavaScript!

function capitalizeWords(input) {

    let wordInput = input.split(' ');

    for (let i = 0; i < wordInput.length; i++) {
        var lettersUp = ((wordInput[i])[0]).toUpperCase();
        wordInput[i] = wordInput[i].replace((wordInput[i])[0], lettersUp);
    }
    return console.log(wordInput.join(" "));
}

capitalizeWords('i love javaScript!');

// 7. Subtract two Sets
// Given two arrays that contains integers, remove the integers of second array from the first.

// Example input: subctractArray([1, 2, 4, 6], [2, 6])
// Example output: [1, 4]

function subctractArray(arr1, arr2) {

    arr1.sort(sortNumber);
    arr2.sort(sortNumber);
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j])
                arr1.splice(i, 1);
        }
    }
    return arr1;
}

function sortNumber(a, b) {
    return a - b;
}
var c = subctractArray([5, 1, 2, 9, 8], [1, 8, 5]);
console.log(c);

// 1. Find Highest Number inside an array
// Write a function that takes an array returns highest number of the array
function highestNumber([numberArray]) {
    numberArray.sort(sortNumber);
    return numberArray[numberArray.length - 1];
}

// 2. count words inside a string
// Write a function that takes an and retruns a nmuber of words. ('words leave after space')

// Example input: countWords('Hello World!')
// Example output: "2"

function countWords(stringValue) {

    let wordsCount = stringValue.split(' ');
    return wordsCount.length;

}
// 3. find number of the letters
// write a function that takes 2 elements one is a letter the other is an array.

// first convert to array to a string.return numbers of the letters inside the string

// Example input: countLetters('e', ['Hello', 'Worlds!'])
// Example output: "1"

function countLetters(wanted,arrayString) {
    let newArr = arrayString.join('').split('');   
    let count=0;
    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i]===wanted)
        count++;
    }
    return count;
}
console.log(countLetters('e', ['erdincv','eeee']));