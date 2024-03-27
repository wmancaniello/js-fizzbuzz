# Esercizio FizzBuzz

## Consegna

1. Scrivi un programma che stampi in console i numeri da 1 a 100, sostituendo:

   - I multipli di 3 con "Fizz";
   - I multipli di 5 con "Buzz";
   - I numeri che sono sia multipli di 3 che di 5 con "FizzBuzz".

2. Prima di scrivere il codice, poniamoci alcune domande:
   - Come possiamo determinare se un numero è divisibile senza resto per un altro?
   - Ci sono metodi particolari che possiamo utilizzare per semplificare il compito?

### Bonus

**Bonus 1**: Creare un container nel DOM, aggiungendo un elemento HTML con il numero o la stringa corretta da mostrare.

**Bonus 2**: Applicare stili differenti agli elementi aggiunti al DOM nel _Bonus 1_, a seconda che il valore inserito sia un numero, un "Fizz", un "Buzz" o un "FizzBuzz".

---

## Impostazione del lavoro

### LOGICA:

**Strutturare il ciclo `for`**:

- Utilizzare un ciclo `for` per stampare i numeri da 1 a 100;
- Per ogni numero determianre se:

  - Per ogni numero, in ordine, determinare se:
    - [x] è un multiplo di entrambi, successivamente attribuire "FizzBuzz";
    - [x] è un multiplo di 3, successivamente attribuire "Fizz";
    - [x] è un multiplo di 5, successivamente attribuire "Buzz";
    - [x] se il numero non è multiplo né di 3 nè di 5, stampare il numero stesso.

- [x] Dichiaro una variabile `bgClass` con una stringa vuota. La quale viene utilizzata per memorizzare la classe CSS che sarà assegnata a ciascun elemento box;
- [x] Dichiaro una variabile `result` con il valore di `i`. La quale viene utilizzata per memorizzare il valore da mostrare all'interno di ciascun elemento box, che inizialmente è il numero del ciclo.
## Stampa in HTML:

- Creo una stringa HTML che rappresenta un elemento `<div>` con classi CSS dinamiche (bgClass) e un contenuto (result);

- Stampo in pagina le stringhe, creando dinamicamente nuovi elementi `<div>` con lo stile creato nel CSS.
