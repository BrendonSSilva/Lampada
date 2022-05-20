let lampOnOff = document.querySelector('.lampOnOff');
let lamp = document.querySelector('.lamp');
let text = document.querySelector('p');
//variáveis que irão ajudar a definir quando alguma ação for executada
let acesa = 0;
let broken = 0;

function lampOn() {
    if (broken == 0) {
        acesa = 1;
        lamp.src = 'img/ligada.jpg';
        lampOnOff.innerHTML = 'Desligar'
    }
}
function lampOff() {
    if (broken == 0) {
        acesa = 0;
        lamp.src = 'img/desligada.jpg';
        lampOnOff.innerHTML = 'Ligar'
    }
}
lampOnOff.addEventListener('click', () => { return (acesa !== 0) ? lampOff() : lampOn() })
lamp.addEventListener('mouseover', lampOn)
lamp.addEventListener('mouseleave', lampOff)
lamp.addEventListener('dblclick', () => { broken = 1; lamp.src = './img/quebrada.jpg'; lampOnOff.style.display = 'none'; text.style.display = 'none'})