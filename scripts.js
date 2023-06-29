const button = document.getElementById("convert-button");
const select = document.getElementById("currencySelect");

const convertValues = async () => {
  const data = await fetch(
    "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,GBP-BRL"
  ).then((Response) => Response.json());

  console.log(data);

  const dolar = data.EURBRL.high;
  const euro = data.USDBRL.high;
  const bitcoin = data.BTCBRL.high;
  const libra = data.GBPBRL.high;

  const inputReais = document.getElementById("inputReal").value;
  const realTextValue = document.getElementById("realTextValue");
  const currencyTextValue = document.getElementById("currencyTextValue");

  realTextValue.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputReais);

  if (select.value === "US$ Dólar americano") {
    currencyTextValue.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputReais / dolar);
  }
  if (select.value === "€ Euro") {
    currencyTextValue.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputReais / euro);
  }
  if (select.value === "Bitcoin") {
    currencyTextValue.innerHTML = new Intl.NumberFormat("en-UK", {
      style: "currency",
      currency: "XBT",
    }).format(inputReais / bitcoin);
  }
  if (select.value === "£ Libra") {
    currencyTextValue.innerHTML = new Intl.NumberFormat("en-UK", {
      style: "currency",
      currency: "GBP",
    }).format(inputReais / libra);
  }
};

const changeCurrency = () => {
  const currencyName = document.getElementById("euroOuDolar");
  const currencyImg = document.getElementById("imgCurrency2");

  if (select.value === "€ Euro") {
    currencyName.innerHTML = "Euro";
    currencyImg.src = "./img/Design sem nome 1.svg";
  }
  if (select.value === "US$ Dólar americano") {
    currencyName.innerHTML = "Dólar americano";
    currencyImg.src = "./img/estados-unidos (1) 1.svg";
  }
  if (select.value === "Bitcoin") {
    currencyName.innerHTML = "Bitcoin";
    currencyImg.src = "./img/Bitcoin.png";
  }
  if (select.value === "£ Libra") {
    currencyName.innerHTML = "£ Libra";
    currencyImg.src = "./img/libra 1.png";
  }
  convertValues();
};

button.addEventListener("click", convertValues);
select.addEventListener("change", changeCurrency);
