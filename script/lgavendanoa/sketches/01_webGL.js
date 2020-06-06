let angle = 0;
let lienzo_01;
let lienzo_02;

function setup() { 
	var myCanvas = createCanvas(1000, 4000, WEBGL);
    lienzo_01 = createGraphics(350, 350);
    lienzo_02 = createGraphics(350, 350);
	myCanvas.parent('3d-develop');


    lienzo_01.background(0);
	
} 



function draw() {

    drawLienzo01();
    drawLienzo02();
    image(lienzo_01, 100, 0);
    image(lienzo_02, 100, 400);
}

function drawLienzo01()
{
    if( mouseY > 0 && mouseY <= 350)
    {
        background(222,207,205);
        rectMode(CENTER);
        fill(0,0,255);
        translate(mouseX - width/2, mouseY-height/2);
        rotateX(angle);
        rotateY(angle*0.3);
        rotateZ(angle*0.2);
        box(100,50,70);
        angle += 0.03;
    }
}

function drawLienzo02()
{
    if( mouseY > 350 && mouseY <= 700)
    {
        background(255);
        rectMode(CENTER);
        fill(98,223,235);
        translate(mouseX - width/2, mouseY-height/2);
        rotateX(angle);
        rotateY(angle*0.3);
        rotateZ(angle*0.2);
        torus(100,50);
        angle += 0.03;
    }
}
