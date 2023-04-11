const button = document.getElementById('convert-button')
const select = document.getElementById('curency-troca')

const converterValores = async () => {
    const input = document.getElementById('valorDaConversao').value
    const valor_real = document.getElementById('valorEmReal')
    const valor_covertido = document.getElementById('valorConvertido')

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(resposta => resposta.json())


    const dolar = data.USDBRL.high
    const Euro = data.EURBRL.high
    const Bitcoin = data.BTCBRL.high

    valor_real.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(input)

    if (select.value === "US$ Dólar americano") {
        valor_covertido.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(input / dolar)
    }

    if (select.value === "€ Euro") {
        valor_covertido.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(input / Euro)
    }

    if (select.value === "Bitcoin") {
        valor_covertido.innerHTML = new Intl.NumberFormat("BTC", {
            style: "currency",
            currency: "BTC",
        }).format(input / Bitcoin)

    }


}
changeCurrency = () => {
    const conteinerText = document.getElementById("text")
    const IMG = document.getElementById("currency-img")


    if (select.value === 'US$ Dólar americano') {
        conteinerText.innerHTML = "Dólar Americano"
        IMG.src = "./assets/img/estados-unidos.png"
    }

    if (select.value === '€ Euro') {
        conteinerText.innerHTML = "Euro"
        IMG.src = "./assets/img/Euro.png"
    }
    if (select.value === "Bitcoin") {
        conteinerText.innerHTML = "Bitcoin"
        IMG.src = "./assets/img/Bitcoin.png"
    }

    converterValores()

}


button.addEventListener('click', converterValores)
select.addEventListener("change", changeCurrency)
