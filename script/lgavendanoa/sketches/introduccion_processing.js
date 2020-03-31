var leftBuffer;
var rightBuffer;
var bajoBuffer;
var lienzo_04;
var lienzo_05;

function setup() 
{

    var myCanvas = createCanvas(1000, 2050);
    myCanvas.parent('ejemplos-processing');
    
    leftBuffer = createGraphics(350, 350);
    rightBuffer = createGraphics(350, 350);
    bajoBuffer = createGraphics(350, 350);
    lienzo_04 = createGraphics(350, 350);
    lienzo_05 = createGraphics(350, 350);


    leftBuffer.background(255,255,255);
    rightBuffer.background(255,255,255);
    lienzo_04.background(255,255,255);
    lienzo_05.background(255,255,255);
}

function draw() {
    // Draw on your buffers however you like

    drawLeftBuffer();
    drawRightBuffer();
    drawBajoBuffer();
    drawLienzo04();
    drawLienzo05();

    image(leftBuffer, 100, 0);
    image(rightBuffer, 100, 400);
    image(bajoBuffer, 100, 800);
    image(lienzo_04, 100, 1200);
    image(lienzo_05, 100, 1600);
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
    bajoBuffer.background(255,255,255);

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
        if(mouseIsPressed)
        {
            lienzo_05.fill(215,215,215);
        }
        else
        {
            lienzo_05.fill(12, 220,115);
        }

        lienzo_05.ellipse(mouseX -100, mouseY-1600, 20, 20);
        lienzo_05.line(175, 175, mouseX-100, mouseY-1600);
    }

}