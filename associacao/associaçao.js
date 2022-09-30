/*===== SHOW NAVBAR  =====*/
const showNavbar = (toggleId, navId, bodyId, headerId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId),
        bodypd = document.getElementById(bodyId),
        headerpd = document.getElementById(headerId)

    // Validate that all variables exist
    if (toggle && nav && bodypd && headerpd) {
        toggle.addEventListener('click', () => {
            // show navbar
            nav.classList.toggle('show')
            // change icon
            toggle.classList.toggle('bx-x')
            // add padding to body
            bodypd.classList.toggle('body-pd')
            // add padding to header
            headerpd.classList.toggle('body-pd')
        })
    }
}

showNavbar('header-toggle', 'nav-bar', 'body-pd', 'header')

/*===== LINK ACTIVE  =====*/
const linkColor = document.querySelectorAll('.nav__link')

function colorLink() {
    if (linkColor) {
        linkColor.forEach(l => l.classList.remove('active'))
        this.classList.add('active')
    }
}
linkColor.forEach(l => l.addEventListener('click', colorLink))











//constante para identificar a tag h3:
const saida1 = document.querySelector(".div1"); //retorna uma referência ao elemento que possui a class div1
const saida2 = document.querySelector("#div2"); //retorna uma referência ao elemento que posssui o id div2
 
//referência aos botões de operação e ao h3:
const somar = document.getElementById("somar")

//referências aos campos de texto
const campoNumero1 = document.getElementById("num1")
const campoNumero2 = document.getElementById("num2")
 
//função disparada pelo evento de submeter do form (clique no botão);
 
somar.addEventListener("click", (e) => {
    //referência ao número 1 digitado:
    const num1 = Number(campoNumero1.value)
 
 
    //referência ao número 2 digitado:
    const num2 = Number(campoNumero2.value)
 
    //operações básicas entre os dois números digitados
    const soma = num1 + num2
   
    //conteúdo digitado
    saida1.innerText = `o total é ${soma} Ω `; //incluí uma frase no componente h3;  
    e.preventDefault(); //evita o envio do formulário
});

