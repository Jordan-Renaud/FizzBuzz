function greet() {
  console.log("Hello World");
}

greet();

for (let index = 1; index <= 100; index++) {
  let phrase = "";

  //set phrase
  if (index % 3 == 0 && index % 5 == 0) {
    phrase = "FizzBuzz";
  } else if (index % 3 == 0) {
    phrase = "Fizz";
  } else if (index % 5 == 0) {
    phrase = "Buzz";
  } else if (index % 11 == 0) {
    phrase = "Bong";
  } else {
    phrase = `${index}`;
  }

  if (index % 7 == 0) {
    phrase += "Bang";
  }

  console.log(phrase);
}
