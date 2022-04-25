function greet() {
  console.log("Hello World");
}

greet();

for (let index = 1; index <= 100; index++) {
  let phrase = "";

  //set phrase

  if (index % 3 == 0 && index % 5 == 0) {
    console.log("FizzBuzz");
    continue;
  } else if (index % 3 == 0) {
    console.log("Fizz");
    continue;
  } else if (index % 5 == 0) {
    console.log("Buzz");
    continue;
  } else {
    console.log(index);
  }
}
