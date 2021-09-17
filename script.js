function Converter() {
    var valorHTML = document.querySelector('#valor');
    var valorEmDolar = valorHTML.value;
    var valorFloat = parseFloat(valorEmDolar);

    var valorEmReal = valorFloat * 5;

    var valorConvertidoHTML = document.querySelector('#valorConvertido');
    var valorFinal = `O Resultado é R$ ${valorEmReal}!`;
    valorConvertidoHTML.innerHTML = `<h2 class="resultado">${valorFinal}</h2>`;
};