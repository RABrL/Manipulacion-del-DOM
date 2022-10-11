//Ejercicio 1
const $ = selector => document.querySelector(selector)
const select = $('#colors')
const options = document.querySelectorAll('.opt')
const number = $('#number')
const text = $('#text1')
const colorValue = $('#text2')
const color = $('#value-color')

select.addEventListener('change',() =>{
    options.forEach((x,i) =>{
        if(select.value === x.value){
            number.value = i+1
            text.value = x.innerText
        }
    })
    colorValue.value = select.value
    color.value = `#${select.value}`
})

//ejercicio 2
