
let butmenu = document.getElementById('but-abrir-menu-mob')
let menumobile = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu-mob')


butmenu.addEventListener('click', ()=>{
    menumobile.classList.add('abrir_menu')
})

menumobile.addEventListener('click', ()=>{
    menumobile.classList.remove('abrir_menu')
})

overlay.addEventListener('click', ()=>{
    menumobile.classList.remove('abrir_menu')
})

window.addEventListener("scroll", function(){
    let header = document.querySelector('#header')
    header.classList.toggle('rolagem', window.scrollY > 0)
})
