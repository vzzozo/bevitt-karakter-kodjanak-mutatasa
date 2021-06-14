const bemenet = document.getElementById('bemenet')

window.addEventListener('keydown', (event)=>{
    bemenet.innerHTML=
    `<div class="gomb">
        ${event.key === ' ' ? 'Space' : event.key}
        <small>Billentyű gomb:</small>
    </div>

    <div class="gomb">
        ${event.keyCode}
        <small>Billentyű kód:</small>
    </div>
    <div class="gomb">
        ${event.code}
        <small>Kód:</small>
    </div>`
})