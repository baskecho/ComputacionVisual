let angle = 0;
let lienzo_01;
let lienzo_02;

function setup() { 
	var myCanvas = createCanvas(1000, 4000, WEBGL);
    lienzo_01 = createGraphics(350, 350);
    lienzo_02 = createGraphics(350, 350);
	myCanvas.parent('3d-develop');


    background(0);
	
} 



function draw() {

    /*drawLienzo01();
    drawLienzo02();
    image(lienzo_01, 100, 0);
    image(lienzo_02, 100, 400);*/

    if( mouseY > 0 && mouseY <= 350){
        drawLienzo01(); 
    }
    else if(mouseY > 350 && mouseY <= 700){
        drawLienzo02();
    }
    else if(mouseY > 700 && mouseY <= 1050){
        drawLienzo03();
    }
    else if(mouseY > 1050 && mouseY <= 1400){
        drawLienzo04();
    }

}

function drawLienzo01()
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

function drawLienzo02()
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

function drawLienzo03()
{
    background(222,207,205);
    rectMode(CENTER);
    //fill(15,125,255);
   // normalMaterial();
    //noStroke();
    
    //ambientLight(0,0,255); // white light
    pointLight(0, 0, 255,0 -930, 0);
    pointLight(255, 0, 0, 0, 0, -930);
    pointLight(0, 255, 0, 950, 0, 0);
    ambientMaterial(255, 255, 255)

    translate(mouseX - width/2, mouseY-height/2);
    rotateX(angle);
    rotateY(angle*0.3);
    rotateZ(angle*0.2);
    //cone(140, 170);
    //torus(100,50);
    sphere(100);
    angle += 0.03;
}

function drawLienzo04()
{
    background(255);
    rectMode(CENTER);
    //fill(15,125,255);
   // normalMaterial();
    //noStroke();
    
    //ambientLight(0,0,255); // white light
    pointLight(0, 0, 255,0 -930, 0);
    pointLight(255, 0, 0, 0, 0, -930);
    pointLight(0, 255, 0, 950, 0, 0);
    ambientMaterial(255, 255, 255)

    //noStroke();
    translate(10, -750);
    rotateX(angle);
    rotateY(angle*0.3);
    rotateZ(angle*0.2);
    //cone(140, 170);
    torus(100,50);
    angle += 0.03;
}
