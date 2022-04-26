function greet() {
  console.log("Hello World");
}

greet();

//FizzBuzz Exercise

// 1. print numbers 1 - 100
// 2. print “Fizz“ whenever the number is a multiple of 3 instead of the number itself.
// 3. print “Buzz” whenever the number is a multiple of 5, instead of the number itself.
//      Also, make it that “FizzBuzz” is printed whenever the number is a multiple of 3 and 5.
// 4. If a number is a multiple of 7, print "Bang" instead of the number.
//      For numbers which are multiples of seven and three / five, append Bang to what you'd have printed anyway.
//5. If a number is a multiple of 11, print "Bong" instead of the number.
//      Do not print anything else in these cases

function otherPhraseNeeded(currentNum) {
  return (
    currentNum % 3 === 0 ||
    currentNum % 5 === 0 ||
    currentNum % 7 === 0 ||
    currentNum % 11 === 0
  );
}

function getOtherPhrases(currentNum) {
  let phrase = "";

  if (currentNum % 3 === 0) phrase += "Fizz";
  if (currentNum % 5 === 0) phrase += "Buzz";
  if (currentNum % 7 === 0) phrase += "Bang";

  //completely removes all other cases except 11
  if (currentNum % 11 === 0) phrase = "Bong";

  return phrase;
}

for (let i = 1; i <= 100; i++) {
  if (otherPhraseNeeded(i)) {
    console.log(getOtherPhrases(i));
  } else {
    console.log(i.toString());
  }
}

// Questions
// line 33 use comment? also, could straight away return "Bong" rather than setting it
