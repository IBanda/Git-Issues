//DROPDOWN
const dropdownLI= document.querySelectorAll("li[data-dropdown");
const dropdown1= document.querySelector(".dropdown1")
const dropdown2= document.querySelector(".profileDropdown")
dropdownLI.forEach(el=>{
    el.addEventListener('click',()=>{
      if(Array.from(dropdown1.classList).length>2 ||
         Array.from(dropdown2.classList).length>2){
            dropdown1.classList.remove('open')
            dropdown2.classList.remove('open')
            return;
         }
         if(el.dataset.dropdown == 1){
             dropdown1.classList.toggle('open')
             return
         }
         dropdown2.classList.toggle('open')
    })
})

//ACTIONS
const actions = document.querySelectorAll('.action');
const overlay= document.querySelector('.overlay');
const closeBtn=document.querySelector('.closeModal');
const headerText=document.querySelector('.headerText');
const modalBodyText= document.querySelector('.modalBodyText')
actions.forEach(action=>action.addEventListener('click',(e)=>{
    let div=e.target.closest('div');
    if(div.dataset.action !=="fork") return
    let repoName=document.title.split('/')[1]
    headerText.textContent=`fork ${repoName}`
    modalBodyText.textContent=`Where should we fork ${repoName} ? `
    overlay.classList.add('open')
    document.addEventListener('click',overlayClick)
}))
closeBtn.onclick=e=>overlayClick(e);
function overlayClick(e){
let str=[...e.target.classList].join()
if(str.includes('open')||str.includes('closeModal')){
   overlay.classList.remove('open')
  document.removeEventListener('click',overlayClick)
}
}