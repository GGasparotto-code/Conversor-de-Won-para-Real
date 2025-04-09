function conversor() {
    let valorwons = prompt("Digite um valor em Wons");
    let umwon = 0.0040;

    if (valorwons !== null && valorwons !== "") {
        if (!isNaN(valorwons)) {
            let valorConvertido = parseFloat(valorwons) * umwon;
            alert("O valor convertido em reais é R$" + valorConvertido.toFixed(2));
        } else {
            alert("Valor inválido! Digite apenas números.");
        }
    } else {
        alert("Valor inválido! Digite um valor.");
    }
}