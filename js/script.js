
const bottone = document.getElementById("genera");

bottone.addEventListener("click", function(){
    let nome = document.getElementById("nome").value;
    let km = document.getElementById("km").value;
    let eta = document.getElementById("eta").value;

    console.log(nome);
    console.log(km);
    console.log(eta);

// assegno valore a variabile prezzo_km

    const prezzo_km = 0.21;
    console.log(prezzo_km);

// calcolo il prezzo in base ai km da percorrere

    let prezzo_biglietto = prezzo_km * km;
    console.log(prezzo_biglietto);

    // confronto età per calcolare lo sconto
    
    if(eta < 18){
        prezzo_biglietto -= prezzo_biglietto * 0.20; 
    }
    
    else if(eta > 65) {
        prezzo_biglietto -= prezzo_biglietto * 0.40; 
    }
    //  else già calcolato in precedenza con variante prezzo_biglietto

    let prezzo = prezzo_biglietto.toFixed(2);
    console.log(prezzo);
    
    document.getElementById("prezzo-biglietto").innerHTML = prezzo + "€";

})







