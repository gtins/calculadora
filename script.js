function calc()
{
var n1 = parseInt(document.getElementById('n1').value);
var n2 = parseInt(document.getElementById('n2').value);
var resultado = document.querySelector('span');          
var oper = document.getElementById('operadores').value;
var sinal = document.querySelector('sinal');

    if(oper === 'soma')
    {
    resultado.innerHTML = n1 + n2
    }
    if(oper === 'subtrair')
    {
    resultado.innerHTML = n1 - n2
    }
    if(oper === 'divisao')
    {
    if(n2 == 0){
        alert("Não é possível dividir por zero");
    }
    else {
    resultado.innerHTML = n1 / n2
    }
    }
    if(oper === 'multiplicar')
    {
    resultado.innerHTML = n1 * n2
    }
}
function sinais ()
{
var oper = document.getElementById('operadores').value;
var sinal = document.querySelector('sinal');

    if(oper === 'soma')
    {
    sinal.innerHTML = '+'
    }
    if(oper === 'subtrair')
    {
    sinal.innerHTML = '-'
    }
    if(oper === 'divisao')
    {
    sinal.innerHTML = '÷'
    }
    if(oper === 'multiplicar')
    {
    sinal.innerHTML = 'x'
    }
}