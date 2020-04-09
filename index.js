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
const starCounter= document.querySelector('.starCounter');
const watchDropdown= document.querySelector('.watchDropdown');
const watchMarks=document.querySelectorAll('input[name="watchMark"');
const watchState=document.querySelector('.watchState')
const ignoreSVG=document.querySelector('.ignoreSVG')
const watchEye=document.querySelector('.watchEye')
const watchCount=document.querySelector('.watchCount')
let isStarred=false;
let countNum=0;
actions.forEach(action=>action.addEventListener('click',(e)=>{
    let div=e.target.closest('div');
    if(div.dataset.action ==="fork") modalToggle();
    if(div.dataset.action ==="star") starToggle(div);
    if(div.dataset.action === "watch"){
            watchDropdown.classList.toggle('toggleWatch')
    }
}))


watchDropdown.addEventListener('click',e=>{
   [...e.target.closest('li').children].forEach(element=>{
      if(element.tagName === 'INPUT'){
          element.checked=true;
         [...watchMarks].forEach(ele=>{
             if(ele.checked){
                 ignoreSVG.style.display="none"
                 watchEye.style.display="block"
                 let watch=ele.nextElementSibling.dataset.watchstate;
                 ele.nextElementSibling.classList.add('showCheck')
                 watchState.textContent=watch;
                 watchCount.textContent=watch === 'Unwatch'?countNum+1:0
                 if(watch == 'Stop ignoring'){
                     ignoreSVG.style.display="block"
                     watchEye.style.display="none"
                 }
                 watchDropdown.classList.remove('toggleWatch')
             }else{
                ele.nextElementSibling.classList.remove('showCheck')
             }
         })
      }
    })
})




closeBtn.onclick=e=>overlayClick(e);
function overlayClick(e){
let str=[...e.target.classList].join()
if(str.includes('open')||str.includes('closeModal')){
   overlay.classList.remove('open')
  document.removeEventListener('click',overlayClick)
}
}

function modalToggle(){
    let repoName=document.title.split('/')[1]
    headerText.textContent=`fork ${repoName}`
    modalBodyText.textContent=`Where should we fork ${repoName} ? `
    overlay.classList.add('open')
    document.addEventListener('click',overlayClick)
}

function starToggle(div){
    [...div.children].forEach(element=>{
        if(element.tagName === 'P' ){
            let text= isStarred? 'Star':'Unstar'
            element.textContent=text
            starCounter.textContent=isStarred? --countNum:++countNum;
            isStarred=!isStarred;
        }
        })
}

