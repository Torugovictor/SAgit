var faixa1 = document.getElementById("faixa1")
var faixa2 = document.getElementById("faixa2")
var faixa3 = document.getElementById("faixa3")
var faixa4 = document.getElementById("faixa4")
var faixa5 = document.getElementById("faixa5")
var saida = document.getElementById("saida")
var botao = document.getElementById("exibir")

botao.addEventListener("click", function () {

    var concat = faixa1.value + faixa2.value + faixa3.value
    var calculo = Number(concat) * Number(faixa4.value)

    saida.innerHTML = `${calculo}Ω ${faixa5.value}`


})

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





