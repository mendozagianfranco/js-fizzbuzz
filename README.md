# FizzBuzz

Scrivere un programma che stampi i numeri da 1 a 100 ma seguendo queste regole:

-   I multipli di 3 stampa "Fizz" al posto del numero
-   I multipli di 5 stampa "Buzz" al posto del numero
-   I multipli di 3 e 5 stampa "FizzBuzz" al posto del numero

---

## Pseudocode

-   Controllo Numero

> 1. **SE** il numero è multiplo di 3 e 5 stampare _"FizzBuzz"_
>
> 2) **ALTRIMENTI SE** il numero è un multiplo di 3 stampare _"Fizz"_
>
> 2. **ALTRIMENTI SE** il numero è un multiplo di 5 stampare _"Buzz"_
>
> 3. **ALTRIMENTI** stampare numero

-   Numero di partenza 1

    1.  1° Caso numero = 1

        -   Controllo numero
        -   OUTPUT = _1_

    2.  2° Caso numero = 3

        -   Controllo numero
        -   OUTPUT = _"Fizz"_

    3.  3° Caso numero = 5

        -   Controllo numero
        -   OUTPUT = _"Buzz"_

    4.  4° Caso numero = 15

        -   Controllo numero
        -   OUTPUT = _"FizzBuzz"_

-   Numero finale 100

> [!NOTE]
> Si controlla prima se sono entrambi multipli di 3 e 5 perchè se prendendo il **4° caso** si controlla le altri condizioni prima stamperà _"Fizz"_ invece che _"FizzBuzz"_
