const modal= document.querySelector(".modal");
const openModalButton= document.querySelector(".openModalButton");
const closeModal= document.querySelector(".close_button");
const overlay= document.querySelector(".overlay");
const openModal=()=>{
    modal.classList.remove("close");
    document.body.classList.add("overflowHidden")
}
const closeModals=()=>{
    modal.classList.add("close");
    document.body.classList.remove("overflowHidden")
}

openModalButton.addEventListener("click",(e)=>{
    console.log(e.target);
    openModal()
})

// closeModal.addEventListener("click",(e)=>{
//    closeModals();
   
// })
// overlay.addEventListener("click",()=>{
//     closeModals();
// })

modal.addEventListener("click",(e)=>{
    //  console.log(e.target);
     const targetClassList= e.target.classList;
     if(targetClassList.contains("overlay") || targetClassList.contains("close_button")|| targetClassList.contains("modal_button_no")){
            closeModals()
     }
     if(targetClassList.contains("modal_button_yes")){
        alert("file deleted suceessfully");
        closeModals()
     }
})

