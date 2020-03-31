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

