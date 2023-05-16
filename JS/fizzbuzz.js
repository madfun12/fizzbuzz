fizz = 0;
buzz = 0;
fizzBuzz = 0;
for (i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
        console.log("FizzBuzz");
        fizzBuzz += 1;
    } else if (i % 3 === 0) {
        console.log("Fizz");
        fizz += 1;
    } else if (i % 5 === 0) {
        console.log("Buzz");
        buzz += 1;
    } else {
        console.log(i);
    }
}
console.log(
    `There were ${fizz} fizzes, ${buzz} buzzes, and ${fizzBuzz} fizzbuzzes`
);
