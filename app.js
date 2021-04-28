// -----------------------------------------------
// Funcion para mostrar y ocultar opciones de transaccion y más información
// -----------------------------------------------

const showHideTransactionDetails = function () {
    let transactionDetails = document.getElementById('transactionDetails')
    if (transactionDetails.style.display === 'none' || transactionDetails.style.display === '') {
        transactionMore.innerHTML = '▲'
        transactionDetails.style.display = 'flex'
    }
    else {
        transactionMore.innerHTML = '▼'
        transactionDetails.style.display = 'none'
    }
}

// -----------------------------------------------

// -----------------------------------------------
// Boton para desplegar más información de transacciones
// -----------------------------------------------

let transactionMore = document.getElementById('transactionMore')
transactionMore.addEventListener('click', showHideTransactionDetails)

// -----------------------------------------------



// -----------------------------------------------
// Botón para editar la transacción
// -----------------------------------------------

let editT = document.getElementById('editT')
editT.addEventListener('click', (e) => {
    alert("editando transaccion")
    showForm()
})

// -----------------------------------------------


// -----------------------------------------------
// Botón para eliminar la transacción
// -----------------------------------------------

let deleteT = document.getElementById('deleteT')
deleteT.addEventListener('click', (d) => {
    alert("Eliminando transaccion")
    showHideTransactionDetails()
})

// -----------------------------------------------







// -----------------------------------------------
// Crea los botones
// -----------------------------------------------
let plusButton = document.getElementById('plusButton')
let xmarkButton = document.getElementById('xmarkButton')
let thickButton = document.getElementById('thickButton')
// -----------------------------------------------


// -----------------------------------------------
// Establece Propiedades del boton +
// -----------------------------------------------
const showPlusButton = function () {
    plusButton.addEventListener('click', showForm)
    plusButton.style.display = 'flex'
}

const hidePlusButton = function () {
    plusButton.removeEventListener('click', showForm)
    plusButton.style.display = 'none'
}
// -----------------------------------------------


// -----------------------------------------------
// Establece Propiedades del boton ✗
// -----------------------------------------------
const showXmarkButton = function () {
    xmarkButton.addEventListener('click', cancelForm)
    xmarkButton.style.display = 'flex'
}
const hideXmarkButton = function () {
    xmarkButton.removeEventListener('click', cancelForm)
    xmarkButton.style.display = 'none'
}
// -----------------------------------------------


// -----------------------------------------------
// Establece Propiedades del boton ✔
// -----------------------------------------------
const showThickButton = function () {
    thickButton.addEventListener('click', acceptForm)
    thickButton.style.display = 'flex'
}
const hideThickButton = function () {
    thickButton.removeEventListener('click', acceptForm)
    thickButton.style.display = 'none'
}
// -----------------------------------------------



// -----------------------------------------------------------------
// Muestra opciones de formulario de creacion/edicion de transacciones
// -----------------------------------------------------------------

const showForm = function () {
    let formT = document.getElementById('formT')
    hidePlusButton()
    formT.style.display = 'flex'
    showThickButton()
    showXmarkButton()
}
const hideForm = function () {
    let formT = document.getElementById('formT')
    hideThickButton()
    hideXmarkButton()
    formT.style.display = 'none'
    showPlusButton()
}
const acceptForm = function () {
    console.log("formulario aceptado")
    hideForm()
}
const cancelForm = function () {
    console.log("formulario cancelado")
    hideForm()
}
// -----------------------------------------------------------------





// Programa principal
// -----------------------------------------------------------------
showPlusButton()
// -----------------------------------------------------------------

