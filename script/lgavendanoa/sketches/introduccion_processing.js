var leftBuffer;
var rightBuffer;
var bajoBuffer;
var lienzo_04;
var lienzo_05;
var lienzo_06;
var lienzo_07;
var lienzo_08;
var lienzo_09;
var lienzo_10;

////////////////////////Variables para las funciones//////////////// 

var x = 1;

    //Lienzo 09
var movimientoX = 15;
var movimientoY = 15;
var anchoElipse;
var altoElipse;
var MOVIMIENTO = 5;
var sur = true;
var este = true;
var inicio = true;

    ///////Lienzo 10

var ancho = 0;



function setup() 
{

    var myCanvas = createCanvas(1000, 6000);
    myCanvas.parent('ejemplos-processing');
    
    leftBuffer = createGraphics(350, 350);
    rightBuffer = createGraphics(350, 350);
    bajoBuffer = createGraphics(350, 350);
    lienzo_04 = createGraphics(350, 350);
    lienzo_05 = createGraphics(350, 350);
    lienzo_06 = createGraphics(350, 350);
    lienzo_07 = createGraphics(350, 350);
    lienzo_08 = createGraphics(350, 350);
    lienzo_09 = createGraphics(350, 350);
    lienzo_10 = createGraphics(350, 350);

    leftBuffer.background(222,207,205);
    rightBuffer.background(222,207,205);
    lienzo_04.background(222,207,205);
    lienzo_05.background(222,207,205);
    lienzo_06.background(222,207,205);
    

    lienzo_07.smooth(4);
    lienzo_08.smooth(4);
    lienzo_09.smooth(2);
    lienzo_10.smooth(2);
}

function draw() {
    // Draw on your buffers however you like

    drawLeftBuffer();
    drawRightBuffer();
    drawBajoBuffer();
    drawLienzo04();
    drawLienzo05();
    drawLienzo06();
    drawLienzo07();
    drawLienzo08();
    drawLienzo09();
    drawLienzo10();

    image(leftBuffer, 100, 0);
    image(rightBuffer, 100, 400);
    image(bajoBuffer, 100, 800);
    image(lienzo_04, 100, 1200);
    image(lienzo_05, 100, 1600);
    image(lienzo_06, 100, 2000);
    image(lienzo_07, 100, 2400);
    image(lienzo_08, 100, 2800);
    image(lienzo_09, 100, 3200);
    image(lienzo_10, 100, 3600);
}


/////////////////////////////LIENZOS///////////////////////

function drawLeftBuffer()
 {
    var title = "PASA EL PUNTERO POR EL LIENZO";
    var title2 = "TAMBIEN PUEDES MANTENERLO OPRIMIDO";

    leftBuffer.fill(0);
    leftBuffer.textSize(12);
    leftBuffer.text(title, 80, 20);
    leftBuffer.text(title2, 50, 40);

    if( mouseY > 80 && mouseY <= 350)
    {
        if(mouseIsPressed)
        {
            leftBuffer.fill(255,125,251);
        }
        else
        {
            leftBuffer.fill(125,225,215);
        }

        leftBuffer.ellipse(mouseX-100, mouseY, 80, 80);
    }
}

function drawRightBuffer() 
{
    var title = "PASA EL PUNTERO POR EL LIENZO";
    var title2 = "TAMBIEN PUEDES MANTENERLO OPRIMIDO";

    rightBuffer.fill(0);
    rightBuffer.textSize(12);
    rightBuffer.text(title, 80, 20);
    rightBuffer.text(title2, 50, 40);

    if ( mouseY > 480 && mouseY <= 750)
    {
        if(mouseIsPressed)
        {
            rightBuffer.fill(18, 55, 184);
        }
        else
        {
            rightBuffer.fill(18, 184, 20);
        }

        rightBuffer.rect(mouseX -140, mouseY-440, 80, 80);
    }

    
}

function drawBajoBuffer() 
{
    bajoBuffer.background(222,207,205);

    var title = "PASA EL PUNTERO POR EL LIENZO";
    
    bajoBuffer.fill(0);
    bajoBuffer.textSize(12);
    bajoBuffer.text(title, 80, 20);

    bajoBuffer.strokeWeight(4);

    if (mouseY > 880 && mouseY <= 1250)
    {
        bajoBuffer.line(175, 175, mouseX-100, mouseY-800);
    }
    
}

function drawLienzo04()
{
    var title = "PASA EL PUNTERO POR EL LIENZO";
    var title2 = "TAMBIEN PUEDES MANTENERLO OPRIMIDO";

    lienzo_04.fill(0);
    lienzo_04.textSize(12);
    lienzo_04.text(title, 80, 20);
    lienzo_04.text(title2, 50, 40);


    if (mouseY > 1280 && mouseY <= 1550)
    {
        lienzo_04.line(175, 175, mouseX-100, mouseY-1200);
    }

}

function drawLienzo05()
{
    var title = "PASA EL PUNTERO POR EL LIENZO";
    var title2 = "TAMBIEN PUEDES MANTENERLO OPRIMIDO";

    lienzo_05.fill(0);
    lienzo_05.textSize(12);
    lienzo_05.text(title, 80, 20);
    lienzo_05.text(title2, 50, 40);


    if (mouseY > 1680 && mouseY <= 1950)
    {
        if(!mouseIsPressed)
        {
            lienzo_05.fill( Math.random() * 255, Math.random() * 255, Math.random() * 255);
        }

        lienzo_05.ellipse(mouseX -100, mouseY-1600, 20, 20);
        lienzo_05.line(175, 175, mouseX-100, mouseY-1600);
    }

}

function drawLienzo06()
{
    var title = "PASA EL PUNTERO POR EL LIENZO";
    var title2 = "TAMBIEN PUEDES MANTENERLO OPRIMIDO";

    lienzo_06.fill(0);
    lienzo_06.textSize(12);
    lienzo_06.text(title, 80, 20);
    lienzo_06.text(title2, 50, 40);


    if (mouseY > 2080 && mouseY <= 2350)
    {
        if(!mouseIsPressed)
        {
            lienzo_06.fill( Math.random() * 255, Math.random() * 255, Math.random() * 255);

            lienzo_06.triangle(mouseX -100, mouseY-2000, Math.random() * 350, 80 + Math.random() * 270, Math.random() * 350, 80 + Math.random() * 270);
        }
    }
}

function drawLienzo07()
{
    lienzo_07.background(222,207,205);

    var title = "OBSERVA LA ANIMACIÓN";
    

    lienzo_07.fill(0);
    lienzo_07.textSize(12);
    lienzo_07.text(title, 105, 20);

    lienzo_07.ellipse(x, 350/2, 350/2, 350/2);
    x = x + 2;
        
    if(x >= 350 + 350/2)
    {
        x =1;
    }
   
}

function drawLienzo08()
{
    lienzo_08.background(222,207,205);

    var title = "PASA EL PUNTERO POR EL LIENZO";
    var title2 = "TAMBIEN PUEDES MANTENERLO OPRIMIDO";

    lienzo_08.fill(0);
    lienzo_08.textSize(12);
    lienzo_08.text(title, 80, 20);
    lienzo_08.text(title2, 50, 40);


    if (mouseY > 2880 && mouseY <= 3150)
    {
        if(mouseIsPressed)
        {
            lienzo_08.fill(250,250,250);
        }
        else
        {
            lienzo_08.fill(Math.random() * 255, Math.random() * 255, Math.random() * 255)
        }

        lienzo_08.ellipse(mouseX - 100, mouseY - 2800, Math.random() * 80 + 20, Math.random() * 80 + 20);
        lienzo_08.ellipse(mouseX - 100, mouseY - 2800, Math.random() * 80 + 20, Math.random() * 80 + 20);
        lienzo_08.ellipse(mouseX - 100, mouseY - 2800, Math.random() * 80 + 20, Math.random() * 80 + 20);
    }
}

function drawLienzo09()
{
    lienzo_09.background(222,207,205);

    var title = "OBSERVA LA ANIMACIÓN";

    lienzo_09.fill(0);
    lienzo_09.textSize(12);
    lienzo_09.text(title, 100, 20);


    altoElipse = Math.random()* 15 + 20;
    anchoElipse = Math.random()* 15 + 20;
        
    lienzo_09.fill(Math.random()* 256, Math.random()* 256, Math.random()* 256);
        
    reiniciarVAlores();
    lienzo_09.ellipse(movimientoX, movimientoY , anchoElipse, altoElipse);
        
        
        
    if(sur && (movimientoY + altoElipse/2 <= 350))
    {
        movimientoY += MOVIMIENTO;
    }
    else
    {
        sur = false;
    }

        
    if(!sur && (movimientoY + altoElipse/2 >= 80))
    {
        movimientoY -= MOVIMIENTO;
    }
    else
    {
        sur = true;
    }

        
    if(este && (movimientoX + anchoElipse/2 <= 350))
    {
        movimientoX += MOVIMIENTO;
    }
    else
    {
        este = false;
    }
        
    if(!este && (movimientoX + anchoElipse/2 >= 15))
    {
        movimientoX -= MOVIMIENTO;
    }
    else
    {
        este = true;
    }
        
    inicio = false;
}
function drawLienzo10()
{
    lienzo_10.background(222,207,205);
    

    var title = "OBSERVA LA ANIMACIÓN";

    lienzo_10.fill(0);
    lienzo_10.textSize(12);
    lienzo_10.text(title, 100, 20);

    lienzo_10.fill(255,255,255);

    lienzo_10.strokeWeight(Math.random()*5);
    lienzo_10.ellipse(20 + ancho, 100, 50, 50);
    lienzo_10.fill(Math.random()*255, Math.random()*255, Math.random()*255);

    lienzo_10.strokeWeight(Math.random()*25);
    lienzo_10.ellipse(25 + ancho++, 200, 80, 80);

    if(ancho -15> 350)
    {
        ancho = -40;
    }
   
}



//////////////////////////////////FUNCIONES AUXILIARES////////////////////

    ////Lienzo 09
function reiniciarVAlores()
{
    if(inicio)
    {
        movimientoX = Math.random() * 351;
        movimientoY = Math.random() * 351;
    }
}