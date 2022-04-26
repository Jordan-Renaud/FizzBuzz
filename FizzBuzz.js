function greet() {
  console.log("Hello World");
}

greet();

//FizzBuzz Exercise

// 1. print numbers 1 - 100
// 2. print “Fizz“ whenever the number is a multiple of 3 instead of the number itself.
// 3. print “Buzz” whenever the number is a multiple of 5, instead of the number itself.
//      Also, make it that “FizzBuzz” is printed whenever the number is a multiple of 3 and 5.

for (let currentNum = 1; currentNum <= 100; currentNum++) {
  let phrase = "";

  //set phrase to follow rules
  if (currentNum % 3 == 0 && currentNum % 5 == 0) {
    phrase = "FizzBuzz";
  } else if (currentNum % 3 == 0) {
    phrase = "Fizz";
  } else if (currentNum % 5 == 0) {
    phrase = "Buzz";
  } else {
    phrase = `${currentNum}`;
  }

  console.log(phrase);
}

// Questions
// i readability vs currentNum - read like english or follow javascript convention
// == vs === preferences? - currently easier to read with ==
