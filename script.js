let canvas = document.getElementById('snake');
let context = canvas.getContext('2d');
let box = 32;
let cobra= [];
cobra[0] = {
    x: 8 * box,
    y: 8 * box
}
let sentido = "right";
let comida = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}

function criarBG() {
    context.fillStyle= "lavender";
    context.fillRect(0, 0, 16 * box, 16 * box);
    }

    function criarCobrinha(){
        for(i=0; i < cobra.length; i++){
            context.fillStyle="purple";
            context.fillRect(cobra[i].x, cobra[i].y, box, box);
          }
}

function desenharComida(){
    context.fillStyle = "grey";
    context.fillRect(comida.x, comida.y, box, box);
}

document.addEventListener('keydown', update);

function update (event){
    if(event.keyCode == 37 && sentido != "right") sentido= "left";
    if(event.keyCode == 38 && sentido != "down") sentido= "up";
    if(event.keyCode == 39 && sentido != "left") sentido= "right";
    if(event.keyCode == 40 && sentido != "up") sentido= "down";
}

function iniciarJogo(){

if(cobra[0].x > 15 * box && sentido == "rigth") cobra[0].x = 0;
if(cobra[0].x < 0 && sentido == "left") cobra[0].x = 16 * box;
if(cobra[0].y > 15 * box && sentido == "down") cobra[0].y = 0;
if(cobra[0].y < 0 && sentido == "up") cobra[0].y = 16 * box;


for(i = 1; i < cobra.length; i++){
if(cobra[0].x == cobra[i].x && cobra[0].y == cobra[i].y){
    clearInterval(jogo);
    alert("Game Over :(");
}

}
    criarBG( );
    criarCobrinha( );
    desenharComida( );


    let cobraX = cobra[0].x;
    let cobraY = cobra[0].y;

    if(sentido == "right") cobraX += box;
    if(sentido == "left") cobraX -= box;
    if(sentido == "up") cobraY -= box;
    if(sentido == "down") cobraY += box;

    if(cobraX != comida.x || cobraY != comida.y){
        cobra.pop();
    }
    else{ comida.x = Math.floor(Math.random() * 15 + 1) * box,
          comida.y = Math.floor(Math.random() * 15 + 1) * box

    }

    let newHead = {
        x: cobraX,
        y: cobraY
    }

    cobra.unshift(newHead);


}

let jogo = setInterval(iniciarJogo, 100);