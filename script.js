let second = 00
let tens = 00

let detik = document.querySelector('.detik')
let puluhan = document.querySelector('.puluhan')

let mulai = document.querySelector('#start')
let berhenti = document.querySelector('#stop')
let ulang = document.querySelector('#reset')

let selang;

let jalankanTimer = () => {
    tens++
    if (tens <= 9) puluhan.innerHTML = '0' + tens
    if (tens > 9) puluhan.innerHTML = tens
    if (tens > 99) {
        second++
        detik.innerHTML = '0' + second
        tens = 0
        puluhan.innerHTML = '0' + 0
    }
    if (second > 9) detik.innerHTML = second
}


mulai.addEventListener('click', () => {
    clearInterval(selang)
    selang = setInterval(jalankanTimer, 10)
})
berhenti.addEventListener('click', () => clearInterval(selang))
ulang.addEventListener('click', () => {
    clearInterval(selang)
    console.log(second)
    if (second != 0) second = '0' + second
    if (`${second}:${tens}` != '00:00') {
        if (`${second}:${tens}` != '0:0') { document.querySelector('.history').innerHTML += `${second}:${tens}<br>`
        }
    }
    tens = '00'
    second = '00'
    puluhan.innerHTML = tens
    detik.innerHTML = second
})