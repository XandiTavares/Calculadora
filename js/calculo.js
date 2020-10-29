var valor
var resultado
function calculo(num) {
    valor = document.calc.visor.value += num
}
function reset() {
    document.calc.visor.value = ""
}
function resul() {
    resultado = eval(valor);
    document.calc.visor.value = resultado;
}