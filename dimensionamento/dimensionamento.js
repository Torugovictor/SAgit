const tensaoF = document.querySelector(".tensao1")
const tensaoL = document.querySelector(".tensao2")
const corrente = document.querySelector(".corrente")
const botao = document.querySelector(".botao")

const saida = document.querySelector(".saida")

botao.addEventListener("click", (e) => {
    const num1 = Number(tensaoF.value)
    const num2 = Number(tensaoL.value)
    const num3 = Number(corrente.value)

    const resistor = (num1 - num2) / num3
    const resistorT = resistor * 1000

    saida.innerText = `${resistorT} Ω`
    e.preventDefault();
});
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


