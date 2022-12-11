function calc()
{
var n1 = parseInt(document.getElementById('n1').value);
var n2 = parseInt(document.getElementById('n2').value);
var resultado = document.querySelector('span');          
var oper = document.getElementById('operadores');

const casos = oper.selectedIndex;

    switch (casos){
        case 1:
            resultado.innerHTML = n1 + n2
            break;
        case 2:
            resultado.innerHTML = n1 - n2
            break;
        case 3:
            resultado.innerHTML = n1 * n2
            break;
        case 4:
            if(n2 == 0){
                alert("Não é possível dividir por zero");
            }else {
            resultado.innerHTML = n1 / n2
            }
            break; 
    }
}
function sinais ()
{
var sinal = document.querySelector('sinal');
var oper = document.getElementById('operadores');
const casos = oper.selectedIndex;

    switch (casos){
        case 1:
            sinal.innerHTML = '+'
            break;
        case 2:
            sinal.innerHTML = '-'
            break;
        case 3:
            sinal.innerHTML = 'x'
            break;
        case 4:
            sinal.innerHTML = '/'
            break; 
    }
}