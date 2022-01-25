// Divisibility

//let number = Math.floor((Math.random() * 100) + 1);

for (let number = 1; number <= 100; number++) {
    //  if (number) {
    let result = "";
    if (number % 3 == 0)
        result += "Fizz";
    if (number % 5 == 0)
        result += "Bazz";

    console.log(result, number);
}