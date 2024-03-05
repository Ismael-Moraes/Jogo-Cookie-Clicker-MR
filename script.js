const biscoito = document.querySelector('#biscoito')
const meusCookies = document.querySelector('#meus-cookies')
const up = document.querySelector('#up')

const upgrade1 = document.getElementById('upgrade-1')
const span1 = document.querySelector('#span-1')
let valor1 = 100
const upgrade2 = document.getElementById('upgrade-2')
const span2 = document.querySelector('#span-2')
let valor2 = 1700
const upgrade3 = document.getElementById('upgrade-3')
const span3 = document.querySelector('#span-3')
let valor3 = 4000
const upgrade4 = document.getElementById('upgrade-4')
const span4 = document.querySelector('#span-4')
let valor4 = 13500
const upgrade5 = document.getElementById('upgrade-5')
const span5 = document.querySelector('#span-5')
let valor5 = 25000
const upgrade6 = document.getElementById('upgrade-6')
const span6 = document.querySelector('#span-6')
let valor6 = 75000

let valorClick = 1
let quantidadeCookies = 0
meusCookies.innerHTML = "Seus cookies: " + quantidadeCookies

function clicado(){
    quantidadeCookies = quantidadeCookies + valorClick
    meusCookies.innerHTML = "Seus cookies: " + quantidadeCookies
}

function botao1(){
    if (valor1 <= quantidadeCookies){
        valorClick = valorClick + 1
        up.innerHTML = "Valor do click: " + valorClick
        quantidadeCookies = quantidadeCookies - valor1
        meusCookies.innerHTML = "Seus cookies: " + quantidadeCookies
        valor1 = Math.floor(valor1*1.3)
        span1.innerHTML = "Valor: " + valor1
    }
}

function botao2(){
    if (valor2 <= quantidadeCookies){
        valorClick = valorClick + 3
        up.innerHTML = "Valor do click: " + valorClick
        quantidadeCookies = quantidadeCookies - valor2
        meusCookies.innerHTML = "Seus cookies: " + quantidadeCookies
        valor2 = Math.floor(valor2*1.2)
        span2.innerHTML = "Valor: " + valor2
    }
}

function botao3(){
    if (valor3 <= quantidadeCookies){
        valorClick = valorClick + 6
        up.innerHTML = "Valor do click: " + valorClick
        quantidadeCookies = quantidadeCookies - valor3
        meusCookies.innerHTML = "Seus cookies: " + quantidadeCookies
        valor3 = Math.floor(valor3*1.1)
        span3.innerHTML = "Valor: " + valor3
    }
}

function botao4(){
    if (valor4 <= quantidadeCookies){
        valorClick = valorClick + 12
        up.innerHTML = "Valor do click: " + valorClick
        quantidadeCookies = quantidadeCookies - valor4
        meusCookies.innerHTML = "Seus cookies: " + quantidadeCookies
        valor4 = Math.floor(valor4*1.05)
        span4.innerHTML = "Valor: " + valor4
    }
}

function botao5(){
    if (valor5 <= quantidadeCookies){
        valorClick = valorClick + 25
        up.innerHTML = "Valor do click: " + valorClick
        quantidadeCookies = quantidadeCookies - valor5
        meusCookies.innerHTML = "Seus cookies: " + quantidadeCookies
        valor5 = Math.floor(valor5*1.05)
        span5.innerHTML = "Valor: " + valor5
    }
}

function botao6(){
    if (valor6 <= quantidadeCookies){
        valorClick = valorClick + 65
        up.innerHTML = "Valor do click: " + valorClick
        quantidadeCookies = quantidadeCookies - valor6
        meusCookies.innerHTML = "Seus cookies: " + quantidadeCookies
        valor6 = Math.floor(valor6*1.025)
        span6.innerHTML = "Valor: " + valor6
    }
}


biscoito.addEventListener('click', clicado)
upgrade1.addEventListener('click', botao1)
upgrade2.addEventListener('click', botao2)
upgrade3.addEventListener('click', botao3)
upgrade4.addEventListener('click', botao4)
upgrade5.addEventListener('click', botao5)
upgrade6.addEventListener('click', botao6)

/* multiplicaaaaaaaaaaaaaar */

const upgrade7 = document.getElementById('upgrade-7')
const span7 = document.querySelector('#span-7')
let valor7 = 225000
const upgrade8 = document.getElementById('upgrade-8')
const span8 = document.querySelector('#span-8')
let valor8 = 750000
const upgrade9 = document.getElementById('upgrade-9')
const span9 = document.querySelector('#span-9')
let valor9 = 5250000
const upgrade10 = document.getElementById('upgrade-10')
const span10 = document.querySelector('#span-10')
let valor10 = 13050000
const upgrade11 = document.getElementById('upgrade-11')
const span11 = document.querySelector('#span-11')
let valor11 = 80000000
const upgrade12 = document.getElementById('upgrade-12')
const span12 = document.querySelector('#span-12')
let valor12 = 855000000
const upgrade13 = document.getElementById('upgrade-13')
const span13 = document.querySelector('#span-13')
let valor13 = 52500050000
const upgrade14 = document.getElementById('upgrade-14')
const span14 = document.querySelector('#span-14')
let valor14 = 2559040028922

function botao7(){
    if (valor7 <= quantidadeCookies){
        valorClick = Math.floor(valorClick * 1.5 + 200)
        up.innerHTML = "Valor do click: " + valorClick
        quantidadeCookies = quantidadeCookies - valor7
        meusCookies.innerHTML = "Seus cookies: " + quantidadeCookies
        valor7 = Math.floor(valor7*1.25)
        span7.innerHTML = "Valor: " + valor7
    }
}

function botao8(){
    if (valor8 <= quantidadeCookies){
        valorClick = Math.floor(valorClick * 2.6)
        up.innerHTML = "Valor do click: " + valorClick
        quantidadeCookies = quantidadeCookies - valor8
        meusCookies.innerHTML = "Seus cookies: " + quantidadeCookies
        valor8 = Math.floor(valor8*1.35)
        span8.innerHTML = "Valor: " + valor8
    }
}

function botao9(){
    if (valor9 <= quantidadeCookies){
        valorClick = Math.floor(valorClick * 3.6)
        up.innerHTML = "Valor do click: " + valorClick
        quantidadeCookies = quantidadeCookies - valor9
        meusCookies.innerHTML = "Seus cookies: " + quantidadeCookies
        valor9 = Math.floor(valor9*1.45)
        span9.innerHTML = "Valor: " + valor9
    }
}

function botao10(){
    if (valor10 <= quantidadeCookies){
        valorClick = Math.floor(valorClick * 5.5 + 20000)
        up.innerHTML = "Valor do click: " + valorClick
        quantidadeCookies = quantidadeCookies - valor10
        meusCookies.innerHTML = "Seus cookies: " + quantidadeCookies
        valor10 = Math.floor(valor10*1.55)
        span10.innerHTML = "Valor: " + valor10
    }
}

function botao11(){
    if (valor11 <= quantidadeCookies){
        valorClick = Math.floor(valorClick * 10.6)
        up.innerHTML = "Valor do click: " + valorClick
        quantidadeCookies = quantidadeCookies - valor11
        meusCookies.innerHTML = "Seus cookies: " + quantidadeCookies
        valor11 = Math.floor(valor11*1.65)
        span11.innerHTML = "Valor: " + valor11
    }
}

function botao12(){
    if (valor12 <= quantidadeCookies){
        valorClick = Math.floor(valorClick * 15.6)
        up.innerHTML = "Valor do click: " + valorClick
        quantidadeCookies = quantidadeCookies - valor12
        meusCookies.innerHTML = "Seus cookies: " + quantidadeCookies
        valor12 = Math.floor(valor12*1.75)
        span12.innerHTML = "Valor: " + valor12
    }
}

function botao13(){
    if (valor13 <= quantidadeCookies){
        valorClick = Math.floor(valorClick * 50)
        up.innerHTML = "Valor do click: " + valorClick
        quantidadeCookies = quantidadeCookies - valor13
        meusCookies.innerHTML = "Seus cookies: " + quantidadeCookies
        valor13 = Math.floor(valor13*1.85)
        span13.innerText = "Valor: " + valor13
    }
}

function botao14(){
    if (valor14 <= quantidadeCookies){
        valorClick = Math.floor(valorClick * 100)
        up.innerHTML = "Valor do click: " + valorClick
        quantidadeCookies = quantidadeCookies - valor14
        meusCookies.innerHTML = "Seus cookies: " + quantidadeCookies
        valor14 = Math.floor(valor14*1.95)
        span14.innerText = "Valor: " + valor14
    }
}

upgrade7.addEventListener('click', botao7)
upgrade8.addEventListener('click', botao8)
upgrade9.addEventListener('click', botao9)
upgrade10.addEventListener('click', botao10)
upgrade11.addEventListener('click', botao11)
upgrade12.addEventListener('click', botao12)
upgrade13.addEventListener('click', botao13)
upgrade14.addEventListener('click', botao14)

/* mudar imageeeeem */

const imagemCookie = document.getElementById('biscoito')
const botaoImagem = document.querySelector('.mudar-imagem')
const spanImagem = document.querySelector('#span-imagem')
let imagemAtual = 1;
let valorImagem = 10000

function mudarImagem (){
    if (valorImagem <= quantidadeCookies){
        if (imagemAtual <= 5){
            imagemAtual = imagemAtual + 1
            quantidadeCookies = quantidadeCookies - valorImagem
            imagemCookie.src = "./imagens/" + imagemAtual +".png"
            valorImagem = Math.floor(valorImagem*30)
            spanImagem.innerHTML = "Valor: " + valorImagem
            meusCookies.innerHTML = "Seus cookies: " + quantidadeCookies
            if(valorImagem >= 8000000000){
                valorImagem = 0
                spanImagem.innerHTML = "Valor: 0"
            }
            if (imagemAtual >= 6) {
                imagemAtual = 1
                imagemCookie.src = "./imagens/" + imagemAtual +".png"
            }
        }
    }
}

botaoImagem.addEventListener('click', mudarImagem)

/* mudar muuuuuuuusicaaaa */

const musica = document.getElementById('audio')
const botaoMusica = document.querySelector('.mudar-musica')
const spanMusica = document.querySelector('#span-musica')
let musicaAtual = 1
let valorMusica = 50000

function mudarMusica (){
    if (valorMusica <= quantidadeCookies){
        if (musicaAtual <= 4){
            musicaAtual = musicaAtual + 1
            quantidadeCookies = quantidadeCookies - valorMusica
            musica.src = "./musicas/" + musicaAtual +".mp3"
            valorMusica = Math.floor(valorMusica*30)
            meusCookies.innerHTML = "Seus cookies: " + quantidadeCookies
            spanMusica.innerHTML = "Valor: " + valorMusica
            if(valorMusica >= 8000000000){
                spanMusica.innerHTML = "Valor: 0"
            }
        }
    }
}

botaoMusica.addEventListener('click', mudarMusica)

/* fundo coloridooooooo */

const botaoColorido = document.querySelector('.rainbow')
const spanColorido = document.getElementById('span-colorido')
const fundo = document.querySelector('.fundo')
let valorColorido = 2500000

function mudarFundo (){
    if (valorColorido <= quantidadeCookies){
        quantidadeCookies = quantidadeCookies - valorColorido
        meusCookies.innerHTML = "Seus cookies: " + quantidadeCookies
        fundo.classList.toggle('colorido')
        biscoito.classList.add('biscoito')
        biscoito.classList.remove('biscoito2')
        fundo.classList.remove('colorido2')
        fundo.classList.remove('claro')
        fundo.classList.remove('escuro')
        spanColorido.innerText = "Valor: 0"
        valorColorido = ''
    }
}

botaoColorido.addEventListener('click', mudarFundo)

/* autocliiiiiiiiiiick */

const autoUp = document.querySelector('#auto-up')
let compras = 0
const botaoAuto1 = document.querySelector(".auto-click-1")
const spanAuto1 = document.querySelector('#span-auto1')
let valorAuto1 = 1000
const botaoAuto2 = document.querySelector(".auto-click-2")
const spanAuto2 = document.querySelector('#span-auto2')
let valorAuto2 = 25000
const botaoAuto3 = document.querySelector(".auto-click-3")
const spanAuto3 = document.querySelector('#span-auto3')
let valorAuto3 = 75000
const botaoAuto4 = document.querySelector(".auto-click-4")
const spanAuto4 = document.querySelector('#span-auto4')
let valorAuto4 = 175000

function autoClick1(){
    if (valorAuto1 <= quantidadeCookies){
        quantidadeCookies = quantidadeCookies - valorAuto1
        valorAuto1 = Math.floor(valorAuto1*1.25)
        compras = compras + 1
        autoUp.innerText = "Valor do autoclick: " + compras
        function click1 (){
            quantidadeCookies = quantidadeCookies + 1
            meusCookies.innerHTML = "Seus cookies: " + quantidadeCookies
            spanAuto1.innerText = "Valor: " + valorAuto1
    }}
    setInterval(click1, 1000)
}

function autoClick2(){
    if (valorAuto2 <= quantidadeCookies){
        quantidadeCookies = quantidadeCookies - valorAuto2
        valorAuto2 = Math.floor(valorAuto2*1.2)
        compras = compras + 25
        autoUp.innerText = "Valor do autoclick: " + compras
        function click2 (){
            quantidadeCookies = quantidadeCookies + 25
            meusCookies.innerHTML = "Seus cookies: " + quantidadeCookies
            spanAuto2.innerText = "Valor: " + valorAuto2
    }}
    setInterval(click2, 1000)
}

function autoClick3(){
    if (valorAuto3 <= quantidadeCookies){
        quantidadeCookies = quantidadeCookies - valorAuto3
        valorAuto3 = Math.floor(valorAuto3*1.15)
        compras = compras + 75
        autoUp.innerText = "Valor do autoclick: " + compras
        function click3 (){
            quantidadeCookies = quantidadeCookies + 75
            meusCookies.innerHTML = "Seus cookies: " + quantidadeCookies
            spanAuto3.innerText = "Valor: " + valorAuto3
    }}
    setInterval(click3, 1000)
}

function autoClick4(){
    if (valorAuto4 <= quantidadeCookies){
        quantidadeCookies = quantidadeCookies - valorAuto4
        valorAuto4 = Math.floor(valorAuto4*1.1)
        compras = compras + 150
        autoUp.innerText = "Valor do autoclick: " + compras
        function click4 (){
            quantidadeCookies = quantidadeCookies + 150
            meusCookies.innerHTML = "Seus cookies: " + quantidadeCookies
            spanAuto4.innerText = "Valor: " + valorAuto4
    }}
    setInterval(click4, 1000)
}

botaoAuto1.addEventListener('click', autoClick1)
botaoAuto2.addEventListener('click', autoClick2)
botaoAuto3.addEventListener('click', autoClick3)
botaoAuto4.addEventListener('click', autoClick4)

// quebrar a velocidadeeeeeeeee

const botaoVelo = document.querySelector('.speed')
const spanVelo = document.getElementById('span-speed')
let valorVelo = 200000000

function quebrarVelocidade (){
    if (quantidadeCookies >= valorVelo) {
        quantidadeCookies = quantidadeCookies - valorVelo
        spanVelo.innerText = "Valor: 0"
        meusCookies.innerHTML = "Seus cookies: " + quantidadeCookies
        biscoito.classList.toggle('biscoito')
        biscoito.classList.toggle('biscoito2')
        valorVelo = 0
        if (fundo.classList.contains('colorido')) {
            fundo.classList.remove('colorido')
            fundo.classList.add('colorido2')
        }
        if (fundo.classList.contains('colorido2')) {
            fundo.classList.remove('colorido2')
            fundo.classList.add('colorido')
        }
    }
}
botaoVelo.addEventListener("click", quebrarVelocidade)

// Multiplicar cookies

const botaoMulti = document.querySelector('.multi-cookies')
const spanMulti = document.getElementById('span-multi')
let valorMulti = 12500

function multiplicarCookies (){
    if (quantidadeCookies >= valorMulti) {
        quantidadeCookies = quantidadeCookies - valorMulti
        quantidadeCookies = quantidadeCookies * 2
        meusCookies.innerHTML = "Seus cookies: " + quantidadeCookies
        valorMulti = Math.floor(valorMulti*33)
        spanMulti.innerText = "Valor: " + valorMulti
    }
}

botaoMulti.addEventListener("click", multiplicarCookies)

// ovniiii

const botaoVoar = document.querySelector('.voar')
const ovni = document.getElementById('ovni')
let tempoVariavel = (Math.random() + 1) * 2000000
let valorToddy = Math.random() * 2000

function ovniPassa() {
    ovni.classList.add('ovni-voando')
    ovni.classList.remove('ovni')
    setTimeout(ovniNaoPassa, 1300)
    
}

function ovniNaoPassa() {
    ovni.classList.add('ovni')
    ovni.classList.remove('ovni-voando')
}

function maisToddy (){
    quantidadeCookies = quantidadeCookies + Math.floor(valorToddy)
    meusCookies.innerText = "Seus cookies: " + quantidadeCookies
}

function aumentarValor() {
    valorToddy = Math.floor(valorToddy * 9.5)
}

setInterval(aumentarValor, 10000000)
setInterval(ovniPassa, tempoVariavel)
botaoVoar.addEventListener('click', maisToddy)

//  biscoitinhoooooooooooooooooooos

const botaoB1 = document.querySelector(".b1")
const botaoB2 = document.querySelector(".b2")
const botaoB3 = document.querySelector(".b3")
const botaoB4 = document.querySelector(".b4")
const spanB1 = document.getElementById('span-b1')
const spanB2 = document.getElementById('span-b2')
const spanB3 = document.getElementById('span-b3')
const spanB4 = document.getElementById('span-b4')
let vida1 = 10000
let vida2 = 500000
let vida3 = 25000000
let vida4 = 1250000000

function bossb1 (){
    vida1 = vida1 - valorClick
    spanB1.innerHTML = vida1
    if (vida1 <= 0) {
        quantidadeCookies = quantidadeCookies + 15000
        meusCookies.innerText = "Seus cookies: " + quantidadeCookies
        vida1 = 10000
        spanB1.innerHTML = vida1
    }
}

function bossb2 (){
    vida2 = vida2 - valorClick
    spanB2.innerHTML = vida2
    if (vida2 <= 0) {
        quantidadeCookies = quantidadeCookies + 250000
        meusCookies.innerText = "Seus cookies: " + quantidadeCookies
        vida2 = 500000
        spanB2.innerHTML = vida2
    }
}

function bossb3 (){
    vida3 = vida3 - valorClick
    spanB3.innerHTML = vida3
    if (vida3 <= 0) {
        quantidadeCookies = quantidadeCookies + 4500000
        meusCookies.innerText = "Seus cookies: " + quantidadeCookies
        vida3 = 25000000
        spanB3.innerHTML = vida3
    }
}

function bossb4 (){
    vida4 = vida4 - valorClick
    spanB4.innerHTML = vida4
    if (vida4 <= 0) {
        quantidadeCookies = quantidadeCookies + 85000000
        meusCookies.innerText = "Seus cookies: " + quantidadeCookies
        vida4 = 1250000000
        spanB4.innerHTML = vida4
    }
}

botaoB1.addEventListener('click', bossb1)
botaoB2.addEventListener('click', bossb2)
botaoB3.addEventListener('click', bossb3)
botaoB4.addEventListener('click', bossb4)