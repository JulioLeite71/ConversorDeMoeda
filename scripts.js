const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")



function convertValues(){
    const inputCurencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".curency-value-to-convert")//valor em real
    const currencyValueconverted = document.querySelector(".curency-value")//outras moedas
    
    

    const dolarToday = 5.14
    const euroToday = 5.43
    const libraToday = 6.36

    

    if(currencySelect.value == "dolar") {
        //se o select estiver selecionado o valor de dolar, entra aqui
        currencyValueconverted.innerHTML = new Intl.NumberFormat ("en-US", {
            style:"currency",
            currency:"USD"
            
        }).format(inputCurencyValue/dolarToday)
    }

    if(currencySelect.value == "euro") {
        //se o select estiver selecionado o valor de euro, entra aqui
        currencyValueconverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurencyValue/euroToday)
    }

    if(currencySelect.value == "libra") {
        //se o select estiver selecionado o valor de libra, entra aqui
        currencyValueconverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurencyValue/libraToday)
    }



    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
}).format(inputCurencyValue)
}


function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    
    const currencyImage = document.querySelector(".currency-img")



    if(currencySelect.value == "dolar"){
        currencyName.innerHTML = "Dólar americano"
        currencyImage.src = "./assets/Dolar.png"
    }
    if(currencySelect.value == "euro"){
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/Euro.png"   
    }

    if(currencySelect.value == "libra"){
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/Libra.png"
        }

    convertValues()


    

}

    currencySelect.addEventListener("change", changeCurrency)

    convertButton.addEventListener("click", convertValues)