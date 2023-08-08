function calcularIMC() {
    var peso = Number(document.getElementById("peso").value);
    var altura = Number(document.getElementById("altura").value);
    var imc = peso / (altura * altura);
    
    if (imc < 18) {
        document.getElementById("resultadoo").innerHTML = imc+ "<br>"+"(Abaixo do peso)";
    } else if (imc >= 18 && imc < 25) {
        document.getElementById("resultadoo").innerHTML = imc+ "<br>"+"(Peso normal)";
    } else{
        document.getElementById("resultadoo").innerHTML = imc+ "<br>"+"Sobrepeso";
    }
}
