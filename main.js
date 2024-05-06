const cambiarIdDoc =  document.querySelector("#cambiar")
const operador1Doc = document.querySelector("#operador1")
const operador2Doc = document.querySelector("#operador2")
const sumaDoc = document.querySelector("#suma")
const estilosDoc = document.querySelector("#estilos")


//Task 1
cambiarIdDoc.textContent = `Programacion FullStack.`

//Task 2
sumaDoc.textContent = `${parseInt(operador1Doc.textContent) + parseInt(operador2Doc.textContent)}`

//Task 3
estilosDoc.addEventListener('click', () => {
    //estilosDoc.style.backgroundColor = '#87CEEB'
    estilosDoc.classList.add('button')
})

// Task 4


var fruits = ["manzana", "mandarina", "pera"]
    
const ulDoc = document.createElement('ul')
fruits.forEach((e) => {
    const liDoc = document.createElement('li')
    liDoc.innerHTML = e
    ulDoc.appendChild(liDoc)
})
document.body.appendChild(ulDoc);