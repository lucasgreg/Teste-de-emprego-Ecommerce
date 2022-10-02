// Validação Formulario 

const form = document.getElementById("conteudo-secundario-forms")
const formPrincipal = document.querySelector("#form-principal")
const botaoFormPrincipal = document.querySelector("#botaoFormPrincipal")


botaoFormPrincipal.onclick = clickBotaoForm


function clickBotaoForm() {
    form.onsubmit = function(evento) {
        evento.preventDefault()

        let inputNome = document.forms['conteudo-secundario-forms']['nome']
        let inputEmail = document.forms['conteudo-secundario-forms']['email']
        let inputCpf = document.forms['conteudo-secundario-forms']['cpf']
        let inputGenero = document.forms['conteudo-secundario-forms']['genero']

        if(!inputNome.value){
            inputNome.classList = 'inputError'
            let span = inputNome.nextSibling.nextSibling
            span.innerText = 'Digite o seu nome'
        } else {
            inputNome.classList.remove ('inputError')
            let span = inputNome.nextSibling.nextSibling
            span.innerText = ''
        }
    
        if(!inputEmail.value) {
            inputEmail.classList = 'inputError'
            let span = inputEmail.nextSibling.nextSibling
            span.innerText = 'Digite o seu E-mail'
        } else {
            inputEmail.classList.remove ('inputError')
            let span = inputEmail.nextSibling.nextSibling
            span.innerText = ''
        }
    
        if(!inputCpf.value) {
            inputCpf.classList = 'inputError'
            let span = inputCpf.nextSibling.nextSibling
            span.innerText = 'Digite o seu CPF'
        } else {
            inputCpf.classList.remove ('inputError')
            let span = inputCpf.nextSibling.nextSibling
            span.innerText = ''
        }

        if(inputNome.value && inputEmail.value &&  inputCpf.value && inputGenero.value === "on") {
            formPrincipal.innerHTML = `
            <h4 class="HTMLform">Dados cadastrado com sucesso!</h4>
            `
        }         
    }
} 


//Chamada API

function fazGet(url){
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function main() {
    dados = fazGet("https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1")
    listaProdutos = JSON.parse(dados)
    let produtos = listaProdutos.products

    
    incializarLoja = () => {
        let containerProdutos = document.getElementById('produtos')

        produtos.map((val)=> {
            containerProdutos.innerHTML += `
            
            <div class="produto-single">
                <img src=" `+val.image+` "/>
                <div class="escrita-news">
                    <p class="titulo">`+val.name+`</p>
                    <p class="discricao">`+val.description+`</p>
                    <p>De: R$`+val.oldPrice+`</p>
                    <p class="por">Por: R$`+val.price+`</p>
                    <p> ou `+val.installments.count+`x de R$`+val.installments.value+`</p>
                    <a href="" class="botao">Comprar</a>
                </div>    

            </div>
            `
        })

    }
        
 
    //Chamada mais produtos


    const maisProdutos = document.querySelector('#mais-produtos')    
    maisProdutos.onclick = clickMaisProdutos
    
    function clickMaisProdutos (){
        let urlNexPage = listaProdutos.nextPage

        function fazGet(url){
            let request = new XMLHttpRequest()
            request.open("GET", url, false)
            request.send()
            return request.responseText
        }


        function maisProdutos() {
            dados = fazGet("https://" + `${urlNexPage}`)
            listaProdutos = JSON.parse(dados)
            let produtos = listaProdutos.products


            incializarMaisProdutos = () => {
                var containerProdutos = document.getElementById('produtos')         
                
                containerProdutos.innerHTML = " "

                produtos.map((val)=> {
                    containerProdutos.innerHTML += `
                    
                    <div class="produto-single">
                        <img src=" `+val.image+` "/>
                        <div class="escrita-news">
                            <p class="titulo">`+val.name+`</p>
                            <p class="discricao">`+val.description+`</p>
                            <p>De: R$`+val.oldPrice+`</p>
                            <p class="por">Por: R$`+val.price+`</p>
                            <p> ou `+val.installments.count+`x de R$`+val.installments.value+`</p>
                            <a href="" class="botao">Comprar</a>
                        </div>    
        
                    </div>
                    `
                })

            }

            incializarMaisProdutos()
        }

        maisProdutos()

    }
    
    
    incializarLoja()
}

main()

// Validação Formulario News


const formNews = document.getElementById("forms-news")
const botaoFormsNews = document.querySelector("#botaoNews")

botaoFormsNews.onclick = clickBotaoNews

function clickBotaoNews() {

    formNews.onsubmit = function(evento) {
        evento.preventDefault()

        let inputNome = document.forms['forms-news']['nome']
        let inputEmail = document.forms['forms-news']['email']

        if(!inputNome.value){
            inputNome.classList = 'inputError'
            let span = inputNome.nextSibling.nextSibling
            span.innerText = 'Digite o seu nome'
        } else {
            inputNome.classList.remove ('inputError')
            let span = inputNome.nextSibling.nextSibling
            span.innerText = ''
        }


        if (!inputEmail.value) {
            inputEmail.classList = 'inputError'
            let span = inputEmail.nextSibling.nextSibling
            span.innerText = 'Digite o E-mail'
        } else {
            inputEmail.classList.remove ('inputError')
            let span = inputEmail.nextSibling.nextSibling
            span.innerText = ''
        }

        if(inputNome.value && inputEmail.value) {
            formNews.innerHTML = `
            <h4 class="HTMLform">Dados cadastrado com sucesso!</h4>
            `
            console.log("ok")
        }

    }


}

