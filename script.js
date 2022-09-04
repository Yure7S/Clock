const handSecond = document.querySelector('.clock .second')
const handMinite = document.querySelector('.clock .minute')
const handHour = document.querySelector('.clock .hour')

/* Pointer change function */
// Será responsável por criar a movimentação do ponteiro
function setRotation(element, rotationPercent) {
    element.style.setProperty("--rotation", rotationPercent * 360);

}


/* Function set clock */
function setClock() {
    const currentDate = new Date() /* Capturando a data atual */

    /* Capturando segundos datas e horas */
    /* Usando os métodos "getSeconds, " */
    const secondsPercentage = currentDate.getSeconds() / 60 /* Ao dividir por 60, a procentagem dos segundos é obtida */
    const minutesPercentage = (secondsPercentage + currentDate.getMinutes()) / 60 /* Ao dividir por 60, a procentagem dos segundos é obtida */
    const hoursPercentage = (minutesPercentage + currentDate.getHours()) / 24 /* Ao dividir por 60, a procentagem dos segundos é obtida */

    setRotation(handSecond, secondsPercentage)
    setRotation(handMinite, minutesPercentage)
    setRotation(handHour, hoursPercentage)
}

/* O método "setInterval" executa uma função (ou ação) em no tempo informado */
setInterval(setClock, 1000) /* O intervalo é medido em milisegundos */

