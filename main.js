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
const input3 = document.querySelectorAll('.input-3')
const btnValidar = document.querySelectorAll('.btn3')
const textResult = document.querySelectorAll('.result3')
let regExpVocal
btnValidar.forEach((x,i) =>{
    x.addEventListener('click', ()=>{
        switch(i){
            case 0: 
                regExpVocal = /[a-z][aeiou]|[aeiou][a-z]/ig
                validarTexto(regExpVocal,0)
                break;
            case 1:
                regExpVocal = /([a-z]\d|\d[a-z])/ig
                if(input3[1].value.length>6){
                    validarTexto(regExpVocal,1)
                }else {
                    textResult[i].style.color = 'red'
                    textResult[i].innerText = 'El texto tiene menos de 7 caracteres'
                }
                break;
            case 2: 
                regExpVocal = /\d/g
                validarTexto(regExpVocal,2)
                break;
        }       
    })
})

function validarTexto(expRegu,i){
    if(expRegu.test(input3[i].value)){
        textResult[i].style.color = 'green'
        textResult[i].innerText = 'El texto es correcto'
    } else {
        textResult[i].style.color = 'red'
        textResult[i].innerText = 'El texto es incorrecto'
    } 
}

//ejercicio 5

const imgBig = $('#big')
const imgs = document.querySelectorAll('.img')

imgs.forEach(x =>{
    x.addEventListener('click', ()=>{
        imgBig.src = x.src
    })

})

//ejercicio 6

const crearText = $('#crear')
const duplicarText = $('#duplicar')
const eliminarText = $('#eliminar')
const copia = $('#copia')

crearText.addEventListener('click',() =>{
    if(!copia.hasChildNodes()){
        const newParr = document.createElement('p')
        newParr.innerText = 'Nuevo texto generado'
        copia.appendChild(newParr)
    }
})

duplicarText.addEventListener('click',()=>{
    if(copia.hasChildNodes()) 
        copia.appendChild(copia.lastChild.cloneNode(true))
})

eliminarText.addEventListener('click',()=>{
    if(copia.hasChildNodes())
        copia.removeChild(copia.lastChild)
})

//ejercicio7 
const inputText = $('#txtElemento')
const btnAgregar = $('#btnAgregar')
const listElem = $('#elementos')
let eliminarElme = document.querySelectorAll('.delete')

btnAgregar.addEventListener('click', () =>{
    if(inputText.value){
        let list = document.createElement('li')
        list.classList.add('list-group-item')
        list.innerHTML = `${inputText.value} <button class="btn btn-light btn-outline-danger btn-sm float-end delete">X</button>`
        listElem.appendChild(list)
        inputText.value=''
        eliminarElme = document.querySelectorAll('.delete')
        eliminarElme.forEach((x,i) => {
            x.addEventListener('click', ()=>{
                listElem.removeChild(listElem.children[i])
                eliminarElme = document.querySelectorAll('.delete')
                console.log(eliminarElme)
            })
        });
    }else alert('Tienes que agregar contenido al elemento')
})
