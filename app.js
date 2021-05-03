// -----------------------------------------------
// TRANSACTIONS CLASS :D :D
// -----------------------------------------------
class Transaction {

    constructor(id, day, month, purchase, store, amount, comment) {
        this.id = id
        this.day = day
        this.month = month
        this.purchase = purchase
        this.store = store
        this.amount = amount
        this.comment = comment
        this.nodes = {
            'tWrap': document.createElement('DIV'),
            'tElementWrap': document.createElement('DIV'),
            'dateWrap': document.createElement('DIV'),
            'dateDay': document.createElement('DIV'),
            'dateMonth': document.createElement('DIV'),
            'purchaseWrap': document.createElement('DIV'),
            'purchaseName': document.createElement('DIV'),
            'purchaseStore': document.createElement('DIV'),
            'amountWrap': document.createElement('DIV'),
            'amountWrapAmount': document.createElement('DIV'),
            'more': document.createElement('DIV'),
            'detailsWrap': document.createElement('DIV'),
            'detailsOptionsWrap': document.createElement('DIV'),
            'detailsOptionsEdit': document.createElement('DIV'),
            'detailsOptionsdelete': document.createElement('DIV'),
            'comment': document.createElement('DIV'),
        }
    }

    showHideDetails() {
        let moreStatus = this.nodes.detailsWrap.style.display
        if (moreStatus === 'none' || moreStatus === '') {
            this.nodes.more.innerHTML = '▲'
            this.nodes.detailsWrap.style.display = 'flex'
        }
        else {
            this.nodes.detailsWrap.style.display = 'none'
            this.nodes.more.innerHTML = '▼'
        }
    }

    edit() {
        alert("editando transaccion")
        showForm()
    }

    delete() {
        alert("Eliminando transaccion")
        this.showHideDetails()
    }

    setNodesStyle() {
        this.nodes.tWrap.classList.add('transaction-wrap')
        this.nodes.tElementWrap.classList.add('transaction')
        this.nodes.dateWrap.classList.add('te-wrap')
        this.nodes.purchaseWrap.classList.add('te-wrap')
        this.nodes.purchaseName.classList.add('product')
        this.nodes.purchaseStore.classList.add('store')
        this.nodes.amountWrap.classList.add('te-wrap')
        this.nodes.amountWrapAmount.classList.add('amount')
        this.nodes.more.classList.add('more')
        this.nodes.detailsWrap.classList.add('t-details')
        this.nodes.detailsOptionsWrap.classList.add('te-wrap')
        this.nodes.detailsOptionsEdit.classList.add('opt')
        this.nodes.detailsOptionsEdit.classList.add('edit')
        this.nodes.detailsOptionsdelete.classList.add('opt')
        this.nodes.detailsOptionsdelete.classList.add('delete')
        this.nodes.comment.classList.add('comment')
    }

    setNodesId() {
        this.nodes.tWrap.id = `tWrap${this.id}`
        this.nodes.tElementWrap.id = `tElementWrap${this.id}`
        this.nodes.dateWrap.id = `dateWrap${this.id}`
        this.nodes.purchaseWrap.id = `purchaseWrap${this.id}`
        this.nodes.purchaseName.id = `purchaseName${this.id}`
        this.nodes.purchaseStore.id = `purchaseStore${this.id}`
        this.nodes.amountWrap.id = `amountWrap${this.id}`
        this.nodes.amountWrapAmount.id = `amountWrapAmount${this.id}`
        this.nodes.more.id = `more${this.id}`
        this.nodes.detailsWrap.id = `detailsWrap${this.id}`
        this.nodes.detailsOptionsWrap.id = `detailsOptionsWrap${this.id}`
        this.nodes.detailsOptionsEdit.id = `detailsOptionsEdit${this.id}`
        this.nodes.detailsOptionsEdit.id = `detailsOptionsEdit${this.id}`
        this.nodes.detailsOptionsdelete.id = `detailsOptionsdelete${this.id}`
        this.nodes.detailsOptionsdelete.id = `detailsOptionsdelete${this.id}`
        this.nodes.comment.id = `comment${this.id}`
    }

    setNodesAssembly() {
        this.nodes.dateWrap.appendChild(this.nodes.dateDay)
        this.nodes.dateWrap.appendChild(this.nodes.dateMonth)
        this.nodes.tElementWrap.appendChild(this.nodes.dateWrap)
        this.nodes.purchaseWrap.appendChild(this.nodes.purchaseName)
        this.nodes.purchaseWrap.appendChild(this.nodes.purchaseStore)
        this.nodes.tElementWrap.appendChild(this.nodes.purchaseWrap)
        this.nodes.amountWrap.appendChild(this.nodes.amountWrapAmount)
        this.nodes.tElementWrap.appendChild(this.nodes.amountWrap)
        this.nodes.tElementWrap.appendChild(this.nodes.more)
        this.nodes.detailsOptionsWrap.appendChild(this.nodes.detailsOptionsEdit)
        this.nodes.detailsOptionsWrap.appendChild(this.nodes.detailsOptionsdelete)
        this.nodes.detailsWrap.appendChild(this.nodes.detailsOptionsWrap)
        this.nodes.detailsWrap.appendChild(this.nodes.comment)
        this.nodes.tWrap.appendChild(this.nodes.tElementWrap)
        this.nodes.tWrap.appendChild(this.nodes.detailsWrap)
        let mainContainer = document.getElementById('mainContainer')
        mainContainer.appendChild(this.nodes.tWrap)
    }

    setNodesValue() {
        this.nodes.dateDay.innerHTML = this.day
        this.nodes.dateMonth.innerHTML = this.month
        this.nodes.purchaseName.innerHTML = this.purchase
        this.nodes.purchaseStore.innerHTML = this.store
        this.nodes.amountWrapAmount.innerHTML = this.amount
        this.nodes.more.innerHTML = '▼'
        this.nodes.detailsOptionsEdit.innerHTML = '&#128394;'
        this.nodes.detailsOptionsdelete.innerHTML = '&#128465;'
        this.nodes.comment.innerHTML = this.comment
    }

    setNodesBehavior() {
        this.nodes.more.addEventListener('click', this.showHideDetails.bind(this))
        this.nodes.detailsOptionsEdit.addEventListener('click', this.edit.bind(this))
        this.nodes.detailsOptionsdelete.addEventListener('click', this.delete.bind(this))
    }

    createTransaction() {
        this.setNodesStyle()
        this.setNodesId()
        this.setNodesAssembly()
        this.setNodesValue()
        this.setNodesBehavior()
    }

}
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

let transaction1 = new Transaction(1, '28', 'Abril', 'Pizza', 'Pizza Comics', '$ 10.000', 'Hay que volver.')
transaction1.createTransaction()

let transaction2 = new Transaction(2, '29', 'Abril', 'Lasagna', 'Donde Luigi', '$ 15.000', 'Tocó solito.')
transaction2.createTransaction()

// -----------------------------------------------
// -----------------------------------------------------------------

