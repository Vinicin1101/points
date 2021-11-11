const Borracha = document.getElementById("eraser");
var pontos = document.getElementsByTagName('point');
const onOff = document.getElementById("borracha");
var sizeEraser = document.getElementById("size-borracha");
var sizePonto = document.getElementById("size-ponto");
var sizeEraserValue = 20;
var sizePontoValue = 10;
var area = document.getElementById('area2');

// Resize
sizeEraser.addEventListener('input', function () {
    sizeEraserValue = parseInt(sizeEraser.value);
    document.getElementById("value-borracha").innerText = sizeEraserValue + 'px';
    Borracha.style.width = sizeEraserValue + 'px';
    Borracha.style.height = sizeEraserValue + 'px';
})
sizePonto.addEventListener('input', function () {
    sizePontoValue = parseInt(sizePonto.value);
    document.getElementById("value-ponto").innerText = sizePontoValue + 'px';
})

// Criador de pontos
area.addEventListener('click', function(event) {

// obtem a posição do mouse
var posX = event.clientX,
    posY = event.clientY;

if (!onOff.checked) {
    const area = document.getElementById('area2');
    var ponto = document.createElement("point");
    ponto.setAttribute('id', pontos.length + 1)
    ponto.style.width = sizePontoValue + 'px';
    ponto.style.height = sizePontoValue + 'px';
    area.appendChild(ponto)

    var point = document.querySelector('[id="'+pontos.length+'"');

    point.style. position = 'absolute';
    point.style.left = (posX-(sizePontoValue/2))+"px";
    point.style.top = (posY-(sizePontoValue/2)) +"px";

    console.log("Ponto criado")
}
})

// Borracha
function getBelowElements() {
    const borracha = Borracha.getBoundingClientRect();

    for (var j = 0; pontos.length ; j++) {

        var pontinho = pontos[j].getBoundingClientRect();

        if (!(borracha.right < pontinho.left ||
            borracha.left > pontinho.right ||
            borracha.bottom < pontinho.top ||
            borracha.top > pontinho.bottom)) {

            console.log("Ponto removido")
            pontos[j].remove()
        }
    }
}

// Borracha Tacker
area.addEventListener('mousemove', function(event) {

    // obtem a posição do mouse
    var posX = event.clientX,
        posY = event.clientY;
    
    if (onOff.checked) {
        // delay function
        setTimeout(function move() {
            // Modifica o Borracha
            Borracha.style.display = "unset";
            Borracha.style.visibility = 'visible';
            Borracha.style.left = (posX-(sizeEraserValue/2))+"px";
            Borracha.style.top = (posY-(sizeEraserValue/2)) +"px";
        }, 70)

        getBelowElements();
    }else{
        Borracha.style.display = "none";
        Borracha.style.visibility = 'hidden';
    }

});
