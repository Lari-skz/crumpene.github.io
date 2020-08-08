var picioarepui=2
var picioarecaine=4
var picioareom=2
function calculpicioare (){
   let firstNumber=parseFloat(document.getElementById("firstNumber").value,10) 
   let secondNumber=parseFloat(document.getElementById("secondNumber").value,10)
   let secondNumber=parseFloat(document.getElementById("thirdNumber").value,10)
 let result= picioarepui * firstNumber + picioarecaine * secondNumber + picioareom * thirdnumber

document.getElementById("result").innerHTML= `Rezultatul este ${result}`  
}
