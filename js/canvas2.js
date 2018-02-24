var canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

//Constantes
const CONST = {
    RADIO : 3,
    COLOR : 'rgba(255,255,255,',
    COLOR_BORDE : 'rgba(255,255,255,',
    NUM_BURBUJAS : 0
}

//Objetos para eventos
var mouse = {
    x : undefined,
    y : undefined
};
var teclado = {
    tecla : undefined
};

//Funciones útiles
function aleatorio(max,min){
    return Math.floor(Math.random() * (max - min) + min);
}
function distancia(circulo1,circulo2){
    return Math.sqrt(
        Math.pow(circulo1.x - circulo2.x,2) +
        Math.pow(circulo1.y - circulo2.y,2)
    )
}

window.addEventListener('mousemove', function(event){
    mouse.x = event.x;
    mouse.y = event.y;
});

window.addEventListener('keypress',function(event){


   teclado.tecla = event.key;

    switch (teclado.tecla){
        case ' ' :
            x = Math.random() * window.innerWidth;
            y = Math.random() * window.innerHeight;
            speedX = aleatorio(3,0.50);
            speedY = aleatorio(3,0.50);

            //radio = Math.random() * (3 - 6) + 6;
            radio = CONST.RADIO;
            opacidad = Math.random() * (0.50 - 0.05) + 0.05;

            var circulo = new Ciculo(x,y,speedX,speedY,radio,0,opacidad);

            circulosL.push(circulo);
            break;
    }

});

var circulosL = [];

function Circulo(x,y,speedX,speedY,radio,angulo,opacidad,color){
    this.x = x;
    this.y = y;
    this.speedX = speedX;
    this.speedY = speedY;
    this.radio = radio;
    this.angulo = angulo;
    this.opacidad = opacidad;
    this.color = color
    this.draw = function(){
        c.beginPath();
        c.arc(this.x,this.y, this.radio,this.angulo, Math.PI * 2, false);
        c.strokeStyle = CONST.COLOR_BORDE + this.opacidad+')';
        c.stroke();
        c.fillStyle = this.color + this.opacidad+')';
        c.fill();
    };
    //this.update = function(){

//Interactividad
        /**
        if(this.x + this.radio > innerWidth || this.x - this.radio <= 0){
            this.speedX = -this.speedX;
        }
        if(this.y + this.radio > innerHeight || this.y + this.radio <= 0){
            this.speedY = -this.speedY;
        }

        this.x = this.x + this.speedX;
        this.y = this.y + this.speedY;



        if( mouse.x - this.x < 50 && mouse.x - this.x > -50
            && mouse.y - this.y < 50 && mouse.y - this.y > -50  ){

            if(this.radio < 20){
                this.radio += 1;
            }
        }else if(this.radio > CONST.RADIO){
            this.radio -= 1
        }
         **/

        //this.draw();
    //}
}
var circulo_movimiento = new Circulo(100,100,0,0,20,0,1,'rgba(255,255,255,');
circulo_movimiento.update = function(){
    this.x = mouse.x;
    this.y = mouse.y;
    circulo_movimiento.draw();
}

var circulo_estatico = new Circulo(500,500,0,0,150,0,1,'rgba(255,255,255,');
    circulo_estatico.update = function(){


        if(distancia(circulo_estatico,circulo_movimiento) <= (circulo_estatico.radio + circulo_movimiento.radio) ){
            circulo_estatico.color = 'rgba(255,255,0,'
        }else{
            circulo_estatico.color = 'rgba(255,255,255,'
        }



/**

        if(circulo_estatico.x < circulo_movimiento.x){

        }else{

        }
**/
        circulo_estatico.draw();
    }





/**
for(var i = 0; i < CONST.NUM_BURBUJAS ; i++){

    var circulo = new Circulo(
        Math.random() * window.innerWidth,
        Math.random() * window.innerHeight,
        aleatorio(3,0.50),
        aleatorio(3,0.50),
        CONST.RADIO,
        0,
        Math.random() * (0.50 - 0.05) + 0.05
    );
    circulosL.push(circulo);
}
 **/




function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);


    circulo_estatico.update();
    circulo_movimiento.update();
    /**
    for(var i = 0; i < circulosL.length; i++){
        circulosL[i].update();
    }
     **/

}

animate();

