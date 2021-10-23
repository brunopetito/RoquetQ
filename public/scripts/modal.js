export default function Modal(){
    const modalWrapper = document.querySelector(".modal-wrapper")
    const cancelButton= document.querySelector('.button.cancel')
    cancelButton.addEventListener("click", close) // depois de adicionar um event listener, close já fechou a modal nao precisou fazer document.querry('...').classList.remove
        

    function open(){
        //atribuir classe active para da modal
        modalWrapper.classList.add("active")
    }
    function close(){
        //remover a classe actvie para da modal.
       modalWrapper.classList.remove("active")
    }

    return{
        open,
        close
    }
}