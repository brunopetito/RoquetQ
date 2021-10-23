import Modal from './modal.js'

const modal = Modal()

const modalTittle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

const checkButtons = document.querySelectorAll(".actions a.check") //pegando o botao dentro de actions que é um a.

checkButtons.forEach(button => {
 button.addEventListener('click',handleClick)
})



const deleteButton = document.querySelectorAll('.actions a.delete')

deleteButton.forEach(button =>{
    button.addEventListener("click", (event) => handleClick(event, false))
    // faz com que o check da função handleClick seja falso
})

function handleClick(event, check = true) {
    event.preventDefault() //não muda o link para room#
    //essa função está trocando o counteudo da modal, ela recebe true : false
    const text = check ? "Marcar como lida esta pergunta?" : 'Excluir esta pergunta'
    const slug = check ? 'check' : 'delete'
    const roomId =  document.querySelector('#room-id').dataset.id
    const questionId = event.target.dataset.id

    const form = document.querySelector(".modal form")
    form.setAttribute ('action', `/question/${roomId}/${questionId}/${slug}`)

    


    modalTittle.innerHTML = `${text}`
    modalDescription.innerHTML = check ? `Tem certeza que deseja ${text.toLowerCase()} ` : `Tem certeza que deseja  ${text.toLowerCase()}?`
    modalButton.innerHTML = check ? 'Sim,marcar como lida' :  'Sim, excluir'

    check? modalButton.classList.remove('red') : modalButton.classList.add('red')

      //abrir modal
      modal.open();
}










