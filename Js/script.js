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
/*window.addEventListener("scroll", function(){
    let header = document.querySelector('#header')
    header.classList.toggle('rolagem', window.scrollY > 0)
})
// Fim do Header
*/

// Formulário
    let form = document.querySelector('#form')
    let nome = document.querySelector('input#formnome')
    let email = document.querySelector('input#email')
    let telefone = document.querySelector('input#telefone')
    let assunto = document.querySelector('textarea#assunto')
    

    window.addEventListener('submit', (enviar) => {
        enviar.preventDefault()
        //verificar se o nome esta vazio
        if(nome.value == ''){
            alert('Por favor, preencha seu nome!!!')
            return  
        }
        //Verificando se o email esta fazio e esta validando
        else if(email.value == '' || !validaremail(email.value)){
            alert('Por favor, preencha seu email!!!')
            return 
        }
        //Verificando se o assunto esta fazio
        else if(assunto.value == ''){
            alert('Por favor, Informe a Mensagem!!!')
            return 
        }
        
    
        form.submit()
    })
    
    // função para validar o email
    function validaremail(email){
        let emailRegex = new RegExp(
            // criar uma regex para validar o email
            /^[a-zA-Z0-9._]+@[a-zA-Z0-9._]+\.[a-zA-Z]{2,}$/
            )

            if(emailRegex.test(email)){
                return true
            }
                return false
            
        }

        

