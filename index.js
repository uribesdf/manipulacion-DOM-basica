
const h1 = document.querySelector("h1")
const input1 = document.querySelector('#t1')
const input2 = document.querySelector('#t2')
const frm = document.querySelector('#form')
const btn = document.querySelector('#btnCalcular')
const resultado = document.querySelector('#result')

frm.addEventListener('submit', calculo) 

function calculo(event){
    event.preventDefault()
    resultado.textContent = "Resultado: " + input1.value + input2.value
}