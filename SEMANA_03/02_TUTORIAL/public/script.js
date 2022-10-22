/* Função que calcula uma soma e mostra a operação realizada e o resultado obtido */
function calcula(x, y){
    var op = "+";
    var resultado;
    if (op == "+") {
        resultado = x + y;
    };
    document.getElementById("saida").innerHTML = `${x} ${op} ${y} = ${resultado}`;
    console.log(`<br /> ${x} ${op} ${y} = ${resultado}`)
}

