window.addEventListener('blur', () => {
    document.title = "Venha jogar novamente 🍪"})

window.addEventListener('focus', () => {
    document.title = "Clicker"})

const audio = document.getElementById('audio')
audio.volume = 0.5
window.addEventListener('focus', () => {
    audio.play()
})
window.addEventListener('blur', () => {
    audio.pause()
})

const claroEscuro = document.querySelector('.claro-escuro')
const fundo1 = document.querySelector('#fundo')
const spanClaridade = document.querySelector('.span-claridade')
let corFundoo = true

function mudarClaroEscuro (){
    if (corFundoo){
        corFundoo = false
        console.log(corFundoo)
        fundo1.classList.add('escuro')
        fundo1.classList.remove('colorido')
        fundo1.classList.remove('colorido2')
        fundo1.classList.remove('claro')
        spanClaridade.innerHTML = "Claro"
    } else {
        corFundoo = true
        console.log(corFundoo)
        fundo1.classList.add('claro')
        fundo1.classList.remove('colorido')
        fundo1.classList.remove('colorido2')
        fundo1.classList.remove('escuro')
        spanClaridade.innerHTML = "Escuro"
    }
}

claroEscuro.addEventListener('click', mudarClaroEscuro)