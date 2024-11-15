const modal= document.querySelector(".modal");
const openModalButton= document.querySelector(".openModalButton");
const closeModal= document.querySelector(".close_button");
const openModal=()=>{
    modal.classList.remove("close")
}
const closeModals=()=>{
    modal.classList.add("close")
}

openModalButton.addEventListener("click",(e)=>{
    console.log(e.target);
    openModal()
})

closeModal.addEventListener("click",(e)=>{
   closeModals()
})

