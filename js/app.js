console.log('Form biglietto del treno');

const PRICE_PER_KM = 0.21
const DISCOUNT_UNDER_18 = 20
const DISCOUNT_OVER_65 = 40

// - chiedere al passeggero i km da percorrere
const inputDOMElement = document.getElementById ("distance");
console.log("inputDOMElement");

// - chiedere al passeggero l'età
const selDOMElement = document.getElementById ("age");
console.log(selDOMElement);

// - calcolare il prezzo del biglietto
// calcolare il prezzo base moltiplicando il numero dei km per la tariffa chilometrica
const basePrice = inputDOMElement * PRICE_PER_KM;
console.log(basePrice);

// - premere il bottone per recuperare i dati
const btnDOMElement = document.getElementById("ticket-price");

btnDOMElement.addEventListener("click", function() {

})