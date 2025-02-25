// Stampare numeri da 1 a 100

for (let i = 1; i <= 100; i++) {

    // Controllo mutiplo 3 e 5
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        // Controllo mutiplo 3
        console.log("Fizz");
    } else if (i % 5 === 0) {
        // Controllo mutiplo 5
        console.log("Buzz");
    } else {
        // Stampare il numero
        console.log(i);
    }

}