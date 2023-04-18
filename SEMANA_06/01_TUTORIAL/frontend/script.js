var calcResDiv = "#calc";

//Evento após a submissão do form
$('#form1').on('submit', function(event) {     
    // Prevenir recarregamento de página
    event.preventDefault();
    // Obter os valores vindos do form
    let num1 = $('#num1').val();
    let num2 = $('#num2').val();
    let op   = $('#op').val();
    Calculadora(num1, num2, op);
});

/* Função que calcula uma soma e mostra a operação realizada e o resultado obtido */
function Calculadora(x, y, op){
    let resultado = eval(x + op + y);
    $(calcResDiv).empty();
    $(calcResDiv).append(`${x} ${op} ${y} = ${resultado} `);
}