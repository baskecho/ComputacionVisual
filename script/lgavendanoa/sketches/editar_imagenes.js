var lienzo_01;
var lienzo_02;
var img_01;
var img_02;


////////////////////////Variables para las funciones//////////////// 


function setup() 
{

    var myCanvas = createCanvas(1074, 550);
    myCanvas.parent('editar-imagen');

    img_01 = loadImage('https://upload.wikimedia.org/wikipedia/en/7/7d/Lenna_%28test_image%29.png');
    img_02 = loadImage('https://upload.wikimedia.org/wikipedia/en/7/7d/Lenna_%28test_image%29.png');
    
    lienzo_01 = createGraphics(512, 550);
    lienzo_02 = createGraphics(512, 550);

    lienzo_01.background(222,207,205);
    lienzo_02.background(222,207,205);
  
}

function draw() {

    drawImage_01();
    drawImage_02();

    

    image(lienzo_01, 0, 0);
    image(lienzo_02, 562, 0);
}

function drawImage_01()
{
    lienzo_01.background(222,207,205);
    var title = "IMAGEN ORIGINAL";
    var title2 = "(LENA FORSÉN)";

    lienzo_01.fill(0);
    lienzo_01.textSize(12);
    lienzo_01.text(title, 190, 20);
    lienzo_01.text(title2, 195, 40);

    lienzo_01.image(img_01, 0, 50);
}

function drawImage_02()
{
    lienzo_02.background(222,207,205);
    var title = "OPRIMA UNA TECLA DEL MOUSE";
    var title2 = "OPRIMA LA TECLA 'C' DEL TECLADO";

    lienzo_02.fill(0);
    lienzo_02.textSize(12);
    lienzo_02.text(title, 165, 20);
    lienzo_02.text(title2, 160, 40);
    lienzo_02.image(img_02, 0, 50);
}

function complementary()
{
    img_02.loadPixels();

    for(var x = 0 ; x < img_02.width; x++)
    {
        for(var y = 0; y < img_02.width; y++)
        {
            var pixel = img_02.get(x,y);

            pixel[0] = 255 - pixel[0];
            pixel[1] = 255 - pixel[1];
            pixel[2] = 255 - pixel[2];

            img_02.set(x,y, pixel);

        }
    }

    img_02.updatePixels();
}

function mousePressed() 
{   
    complementary();
}

function keyPressed() 
{
    if(key == "c" || key == "C")
    {
        complementary();
    }
}

