function greet() {
  console.log("Hello World");
}

greet();

//FizzBuzz Exercise

// 1. print numbers 1 - 100
// 2. print “Fizz“ whenever the number is a multiple of 3 instead of the number itself.
// 3. print “Buzz” whenever the number is a multiple of 5, instead of the number itself.
//      Also, make it that “FizzBuzz” is printed whenever the number is a multiple of 3 and 5.

function FizzBuzzNeeded(currentNum) {
  return currentNum % 3 == 0 || currentNum % 5 == 0;
}

function setFizzBuzz(currentNum) {
  let phrase = "";

  if (currentNum % 3 == 0) phrase += "Fizz";
  if (currentNum % 5 == 0) phrase += "Buzz";

  return phrase;
}

for (let i = 1; i <= 100; i++) {
  let phrase = "";

  if (FizzBuzzNeeded(i)) {
    phrase = setFizzBuzz(i);
  } else {
    phrase = `${i}`;
  }

  console.log(phrase);
}

// Questions
// == vs === preferences? - currently easier to read with ==
// readability with line 33?
