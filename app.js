let transactionT = document.getElementById('transactionT')
let informationT = document.getElementById('informationT')
let editT = document.getElementById('editT')
let deleteT = document.getElementById('deleteT')


function toggle() {
    if (informationT.style.display === 'none') {
        informationT.style.display = 'flex'
    }
    else {
        informationT.style.display = 'none'
    }
}

transactionT.addEventListener('click', toggle)

