var elemento = document.getElementById("caixa");
var i = 1;

document.getElementById('area1').addEventListener('mousemove', function(event) {

    // obtem a posição do mouse
    var posX = event.clientX,
        posY = event.clientY;
    setTimeout(function move() {
        // Modifica o elemento
        elemento.style.display = "unset";
        elemento.style.position = 'absolute';
        elemento.style.left = (posX)+"px";
        elemento.style.top = (posY-100) +"px";
    }, 60)
  });

  document.getElementById('area2').addEventListener('click', function(event) {

    // obtem a posição do mouse
    var posX = event.clientX,
        posY = event.clientY;
    
    var area = document.getElementById('area2');
    var ponto = document.createElement("point");
    ponto.setAttribute('id', i)
    area.appendChild(ponto)

    var point = document.querySelector('[id="'+i+'"');

    point.style. position = 'absolute';
    point.style.left = (posX-5)+"px";
    point.style.top = (posY-5) +"px";

    console.log("Novo ponto")

    i++
  })