//Ejercicio 1
const $ = selector => document.querySelector(selector)
const select = $('#colors')
const options = document.querySelectorAll('.opt')
const number = $('#number')
const text = $('#text1')
const colorValue = $('#text2')
const color = $('#value-color')

select.addEventListener('change',() =>{
    /* options.forEach((x,i) =>{
        if(select.value === x.value){
            number.value = i+1
            text.value = x.text
        }
    }) */
    //indice del select
    number.value = select.selectedIndex
    //texte del select
    text.value = select.options[select.selectedIndex].text; 
    //numero del color
    colorValue.value = select.value
    //pintar color
    color.value = `#${select.value}`
})

//ejercicio 2

const textArea = $('#description')
const btnTextArea= $('#btnTextArea')

btnTextArea.addEventListener('click', ()=>{
    if(textArea.value.length>50){
        alert('Tiene mas de 50 caracteres')
    }else alert('Tiene menos de 50 caracteres')
})

//ejercicio 3
