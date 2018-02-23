var canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// canvas.width = window.screen.availWidth;
// canvas.height = window.screen.availHeight;

var c = canvas.getContext('2d');

var mouse = {
    x : undefined,
    y : undefined
};

var teclado = {
    tecla : undefined
};

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
            speedX = Math.random() * (3 - 0.50) + 0.50;
            speedY = Math.random() * (3 - 0.50) + 0.50;


            //radio = Math.random() * (3 - 6) + 6;
            radio = 3;
            opacidad = Math.random() * (0.50 - 0.05) + 0.05;

            var circulo = new Ciculo(x,y,speedX,speedY,radio,0,opacidad);

            circulosL.push(circulo);
            break;
    }

});

var circulosL = [];

function Ciculo(x,y,speedX,speedY,radio,angulo,opacidad){
    this.x = x;
    this.y = y;
    this.speedX = speedX;
    this.speedY = speedY;
    this.radio = radio;
    this.angulo = angulo;
    this.opacidad = opacidad;
    this.draw = function(){
        c.beginPath();
        c.arc(this.x,this.y, this.radio,this.angulo, Math.PI * 2, false);
        c.strokeStyle = 'rgba(255,255,255,'+this.opacidad+')';
        c.stroke();
        c.fillStyle = 'rgba(255,255,255,'+this.opacidad+')';
        c.fill();
    };
    this.update = function(){

        if(this.x + this.radio > innerWidth || this.x - this.radio <= 0){
            this.speedX = -this.speedX;
        }
        if(this.y + this.radio > innerHeight || this.y + this.radio <= 0){
            this.speedY = -this.speedY;
        }

        this.x = this.x + this.speedX;
        this.y = this.y + this.speedY;


        //Interactividad
        if( mouse.x - this.x < 50 && mouse.x - this.x > -50
            && mouse.y - this.y < 50 && mouse.y - this.y > -50  ){

            if(this.radio < 20){
                this.radio += 1;
            }
        }else if(this.radio > 3){
            this.radio -= 1
        }

        // //treclado
        // switch (teclado.tecla){
        //     case '+' : this.speedX++;this.speedY++;break;
        //     case '-' : this.speedX--;this.speedY--;break;
        // }


        this.draw();
    }
}

for(var i = 0; i < 1; i++){

    x = Math.random() * window.innerWidth;
    y = Math.random() * window.innerHeight;
    speedX = Math.random() * (3 - 0.50) + 0.50;
    speedY = Math.random() * (3 - 0.50) + 0.50;


    //radio = Math.random() * (3 - 6) + 6;
    radio = 3;
    opacidad = Math.random() * (0.50 - 0.05) + 0.05;

    var circulo = new Ciculo(x,y,speedX,speedY,radio,0,opacidad);

    circulosL.push(circulo);

}




function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);

    for(var i = 0; i < circulosL.length; i++){
        circulosL[i].update();
    }

}

animate();






// //1. Modify Settings
// canvas.font = '30px Arial';
// canvas.fillStyle = 'red';
// // canvas.width = window.innerWidth;
// // canvas.height = window.innerHeight;
// canvas.globalAlpha = opacity;
//
// setInterval(update,1);
//
// function update() {
//     x += speedX;
//     y += speedY;
//     canvas.fillText('-',x,y); //(text,x,y)
//
//     if(x > 500){
//         speedX = -15;
//         opacity -= 0.10;
//         canvas.globalAlpha = opacity;
//     }
//
//     if(x < 0){
//         speedX = 15;
//         opacity -= 0.10;
//         canvas.globalAlpha = opacity;
//     }
//
//
// }

