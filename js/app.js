console.log('Form biglietto del treno');

const PRICE_PER_KM = 0.21
const DISCOUNT_UNDER_18 = 20
const DISCOUNT_OVER_65 = 40

document.getElementById ("price-calc").addEventListener("click", function (){

    // - chiedere al passeggero i km da percorrere
    const inputDOMElement = document.getElementById ("distance");
    let kmToTravel = inputDOMElement.value;
    console.log("km dapercorrere", kmToTravel);

    // - chiedere al passeggero l'età
    const selDOMElement = document.getElementById ("age");

    // - calcolare il prezzo del biglietto
    //   - calcolare il prezzo base moltiplicando il numero dei km per la tariffa chilometrica
    let basePrice = kmToTravel * PRICE_PER_KM;
    console.log("basePrice", basePrice);

    // - applicare eventuali sconti
    let discount = 0;

    if (selDOMElement.value === "0") {
        discount = (basePrice * DISCOUNT_UNDER_18) / 100
        console.log("si applica lo sconto under 18")
    } else if (selDOMElement.value === "3") {
        discount = (basePrice * DISCOUNT_OVER_65) / 100
    }

    let finalPrice = basePrice - discount;
    console.log("finalPrice", finalPrice)

    // // -  stampare il prezzo
    //stampare nella pagina il costo con max 2 decimali
    const prezzoArrotondato = finalPrice.toFixed(2);
    console.log(typeof prezzoArrotondato, prezzoArrotondato);
    document.getElementById("ticket-price").innerHTML = prezzoArrotondato;
})