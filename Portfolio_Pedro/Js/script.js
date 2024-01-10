// Menu Mobile
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
// fim do Menu Mobile

// Do Header
window.addEventListener("scroll", function(){
    let header = document.querySelector('#header')
    header.classList.toggle('rolagem', window.scrollY > 0)
})
// Fim do Header

// Formulário
    let form = document.querySelector('#form')
    let nome = document.querySelector('input#formnome')
    let email = document.querySelector('input#email')
    let telefone = document.querySelector('input#telefone')
    let assunto = document.querySelector('textarea#assunto')
    

    window.addEventListener('submit', (enviar) => {
        enviar.preventDefault()

        if(nome.value == ''){
            alert('erro')
        }

        form.submit()
    })

