console.log('Form biglietto del treno');

const PREZZO_PER_KM = 0.21
const SCONTO_UNDER_18 = 20
const SCONTO_OVER_65 = 40

// - chiedere al passeggero i km da percorrere
const inputDOMElement = document.getElementById ("distance");
console.log("inputDOMElement");

// - chiedere al passeggero l'età
const selDOMElement = document.getElementById ("age");
console.log(selDOMElement);

// - premere il bottone per recuperare i dati
const btnDOMElement = document.getElementById("ticket-price");

btnDOMElement.addEventListener("click", function() {

})