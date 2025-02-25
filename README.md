# FizzBuzz

Scrivere un programma che stampi i numeri da 1 a 100 ma seguendo queste regole:

-   I multipli di 3 stampa "Fizz" al posto del numero
-   I multipli di 5 stampa "Buzz" al posto del numero
-   I multipli di 3 e 5 stampa "FizzBuzz" al posto del numero

---

## Pseudocode

-   Controllo Numero

> 1. **SE** il numero è multiplo di 3 e 5 stampare "FizzBuzz"
>
> 2) **ALTRIMENTI SE** il numero è un multiplo di 3 stampare "Fizz"
>
> 2. **ALTRIMENTI SE** il numero è un multiplo di 5 stampare "Buzz"
>
> 3. **ALTRIMENTI** stampare numero

-   Numero di partenza 1

    1.  1° caso numero = 1

        -   Controllo numero
        -   OUTPUT = 1

    2.  2° Caso numero = 3

        -   Controllo numero
        -   OUTPUT = "Fizz"

    3.  3° Caso numero = 5

        -   Controllo numero
        -   OUTPUT = "Buzz"

    4.  4° Caso numero = 15

        -   Controllo numero
        -   OUTPUT = "FizzBuzz"

-   Numero finale 100

> [!NOTE]
> Si controlla prima se sono entrambi multipli di 3 e 5 perchè se prendendo il **4° caso** si controlla le altri condizioni prima stamperà "Fizz" invece che "FizzBuzz"
