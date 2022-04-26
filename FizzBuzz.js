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
// 5. If a number is a multiple of 11, print "Bong" instead of the number.
//      Do not print anything else in these cases
// 6. If a number is a multiple of 13, print "Fezz" instead of the number.
//      For multiples of most other numbers, the Fezz goes immediately in front of the first thing
//      beginning with B, or at the end if there are none.

function otherPhraseNeeded(currentNum) {
  const multiples = [3, 5, 7, 11, 13];
  const multipleCheck = (x) => currentNum % x === 0;

  return multiples.some(multipleCheck);
}

function getOtherPhrases(currentNum) {
  let phrase = "";

  //multiples of 11 should only contain Bong
  if (currentNum % 11 === 0) return "Bong";

  if (currentNum % 3 === 0) phrase += "Fizz";
  //order important for placement of Fezz
  if (currentNum % 13 === 0) phrase += "Fezz";
  if (currentNum % 5 === 0) phrase += "Buzz";
  if (currentNum % 7 === 0) phrase += "Bang";

  return phrase;
}

for (let i = 1; i <= 100; i++) {
  if (otherPhraseNeeded(i)) {
    const phrase = getOtherPhrases(i);
    console.log(phrase);
  } else {
    console.log(i.toString());
  }
}

// Questions
