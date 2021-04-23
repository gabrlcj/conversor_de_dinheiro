let valorInicial = document.getElementById("valor-inicial");
    let tipoDaMoeda = document.getElementById("tipo-da-moeda");
    let valorResultante = document.getElementById("res");
 
    const moeda = () => {
        let valorDaMoeda = 0
        if(tipoDaMoeda.value === "Dólar 🇺🇸") {
            valorDaMoeda = 5.54
        }else if(tipoDaMoeda.value === "Euro 🇪🇺") {
            valorDaMoeda = 6.60
        }else {
            valorDaMoeda = 7.66
        }
        let valorConvertido = (valorInicial.value * valorDaMoeda).toFixed(2)
        return valorResultante.innerHTML = "R$" + valorConvertido
    }