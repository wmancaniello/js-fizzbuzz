// TEST
// alert("Ciao");

// Seleziono la row che conterrà le box
const rowElem = document.querySelector(".row");

// Scrivo i numeri da 1 a 100

for (let i = 1; i <= 100; i++) {
  let bgClass = "";
  let result = i;

  // Se il numero è un multiplo sia di 3 che di 5, stampo FizzBuzz
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
    bgClass = "fizzbuzz";
    result = "FizzBuzz";
  }
  // Se il numero è un multiplo di 3 allora stampo Fizz
  else if (i % 3 === 0) {
    console.log("Fizz");
    bgClass = "fizz";
    result = "Fizz";
  }
  // Se il numero è un multiplo di 5, stampo Buzz
  else if (i % 5 === 0) {
    console.log("Buzz");
    bgClass = "buzz";
    result = "FizzBuzz";
  }
  // Se il numero non è un multiplo né di 3 né di 5, stampo il numero stesso
  else {
    console.log(i);
    bgClass = "normal";
  }

  const boxElem = `<div class="box ${bgClass}">${result}</div>`; // string
  rowElem.innerHTML += boxElem;
}
