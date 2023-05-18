const button = document.getElementById('convert-button')
const select = document.getElementById('currencySelect')
const dolar = 5.2
const euro = 5.9
const bitcoin = 138403.00
const libra = 6.16
const convertValues = () => {
    const inputReais = document.getElementById('inputReal').value
    const realTextValue = document.getElementById('realTextValue')
    const currencyTextValue = document.getElementById('currencyTextValue')

    realTextValue.innerHTML = new Intl.NumberFormat('pt-BR',
        { style: 'currency', currency: 'BRL' }
    ).format(inputReais);

    if (select.value === 'US$ Dólar americano') {
        currencyTextValue.innerHTML = new Intl.NumberFormat('en-US',
            { style: 'currency', currency: 'USD' }
        ).format(inputReais / dolar);
    }
    if (select.value === '€ Euro') {
        currencyTextValue.innerHTML = new Intl.NumberFormat('de-DE',
            { style: 'currency', currency: 'EUR' }
        ).format(inputReais / euro);
    }
    if (select.value === 'Bitcoin') {
        currencyTextValue.innerHTML = new Intl.NumberFormat('en-UK',
            { style: 'currency', currency: 'XBT' }
        ).format(inputReais / bitcoin);



    }
    if (select.value === '£ Libra') {
        currencyTextValue.innerHTML = new Intl.NumberFormat('en-UK',
            { style: 'currency', currency: 'GBP' }
        ).format(inputReais / libra);
    }

}

const changeCurrency = () => {
    const currencyName = document.getElementById('euroOuDolar')
    const currencyImg = document.getElementById('imgCurrency')

    if (select.value === '€ Euro') {
        currencyName.innerHTML = 'Euro'
        currencyImg.src = './img/Design sem nome 1.svg'
    }
    if (select.value === 'US$ Dólar americano') {
        currencyName.innerHTML = 'Dólar americano'
        currencyImg.src = './img/estados-unidos (1) 1.svg'
    }
    if (select.value === 'Bitcoin') {
        currencyName.innerHTML = 'Bitcoin'
        currencyImg.src = './img/Design sem nome (1) 1.png'

    }
    if (select.value === '£ Libra') {
        currencyName.innerHTML = '£ Libra'
        currencyImg.src = './img/libra 1.png'

    }
    convertValues()
}

button.addEventListener('click', convertValues)
select.addEventListener('change', changeCurrency)