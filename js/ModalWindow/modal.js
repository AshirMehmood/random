const modal= document.querySelector('.modal');
const overlay= document.querySelector('.overlay');
const closeBtnModal= document.querySelector('.close-modal');
const showBtnModal= document.querySelectorAll('.show-modal');
const OpenModal=function(){
    console.log("button clicked");
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
    }
for(let i=0;i<showBtnModal.length;i++){
    showBtnModal[i].addEventListener('click',OpenModal);
    
}
const CloseModal=function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
closeBtnModal.addEventListener('click',CloseModal);
overlay.addEventListener('click',CloseModal);

// keyboard even exit by pressing escape key
// keyboard events are global events
document.addEventListener('keydown',function(e){
    console.log(e.key);
    if(e.key==='Escape'){
        if(!modal.classList.contains('hidden'))
        CloseModal();
    }
})