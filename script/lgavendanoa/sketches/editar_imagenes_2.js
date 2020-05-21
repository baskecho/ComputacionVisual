var lienzo_01;
var lienzo_02;
var img_01;
var img_02;
var img_03;




function setup() 
{

    var myCanvas = createCanvas(1074, 550);
    myCanvas.parent('editar-imagen-2');

    img_01 = loadImage('https://upload.wikimedia.org/wikipedia/en/7/7d/Lenna_%28test_image%29.png');
    img_02 = loadImage('https://upload.wikimedia.org/wikipedia/en/7/7d/Lenna_%28test_image%29.png');
    img_03 = loadImage('https://upload.wikimedia.org/wikipedia/en/7/7d/Lenna_%28test_image%29.png');
    
    lienzo_01 = createGraphics(512, 550);
    lienzo_02 = createGraphics(512, 550);

   // lienzo_01.background(222,207,205);
    //lienzo_02.background(222,207,205);
  
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
    regresar()
    img_02.loadPixels();

    for(var y = 0 ; y < img_02.height; y++)
    {
        for(var x = 0; x < img_02.width; x++)
        {
            let index = (x + y * img_02.width) * 4;

            img_02.pixels[index + 0] = 255 - img_02.pixels[index + 0];
            img_02.pixels[index + 1] = 255 - img_02.pixels[index + 1];
            img_02.pixels[index + 2] = 255 - img_02.pixels[index + 2];
        }
    }

    img_02.updatePixels();
}

function convolutions()
{
    let convolution = 2;
    let filtro;
    let rgb = [0,0,0];
    let reduccion = 0;
    let divisor = 0;
    let contador = 0;
    
    if(convolution === 1)
    {
        filtro = [
                    [0, 0,  0],
                    [0, 1,  0],
                    [0, 0,  0]
                ];
        reduccion = 1;
        divisor = 1;
    }
    else if(convolution === 2)
    {
        filtro = [
            [0, 1,  0],
            [1, -4,  1],
            [0, 1,  0]
        ];
        reduccion = 1;
        divisor = 1;
    }

    //console.log(filtro.length);


    img_02.loadPixels();


    console.log(img_02.width);
    console.log(img_02.height);

    for(var y = 0 ; y < img_02.height; y++)
    {
        for(var x = 0; x < img_02.width; x++)
        {   
            let index2 = (x + y*img_02.width) * 4;

            for(let fila = 0; fila < filtro.length; fila++)
            {
                for(let columna = 0; columna < filtro.length; columna++)
                {
                    

                    /*if(contador < 1)
                        {z<
                            console.log(`${(y - reduccion) + fila >= 0} - ${(y - reduccion) + fila < img_02.height}`);
                            console.log(`${(x - reduccion) + columna >= 0} - ${(x - reduccion) + columna < img_02.width}`);

                            console.log(`(${(y - reduccion) + fila}, ${(x - reduccion) + columna})`);

                            console.log("//////////////////////////");

                        }*/
                        

                    if((y - reduccion) + fila >= 0 && 
                       (y - reduccion) + fila < img_02.height &&
                       (x - reduccion) + columna >= 0 && 
                       (x - reduccion) + columna < img_02.width)
                    {
                        let index = ((x - reduccion + columna) + (y - reduccion + fila) * img_02.width) * 4;
                        let valorFiltro = filtro[fila][columna];

                        rgb[0] += img_02.pixels[index + 0] * valorFiltro;
                        rgb[1] += img_02.pixels[index + 1] * valorFiltro;
                        rgb[2] += img_02.pixels[index + 2] * valorFiltro;

                        //if(contador < 512*2+1)
                        //{
                            //console.log(`${(y - reduccion) + fila > 0} - ${(y - reduccion) + fila < img_02.height}`);
                            //console.log(`${(x - reduccion) + columna > 0} - ${(x - reduccion) + columna < img_02.width}`);

                          /*  console.log(`${index} - ${fila} - ${columna} - (${img_02.pixels[index + 0]}x${valorFiltro}) - (${img_02.pixels[index + 1]}x${valorFiltro}) - (${img_02.pixels[index + 2]}x${valorFiltro})`)*/
                        //}
                        //rgb[3] += img_02.pixels[index + 3] * valorFiltro;
                    }
                }
            }

            /*if(contador < 512*2+1)
            {
                console.log("//////////////////" + contador);
            }*/

            


            contador += 1;
            

            /*if (contador < 5)
            {
                console.log(`${img_02.pixels[index2 + 0]},${img_02.pixels[index2 + 1]},${img_02.pixels[index2 + 2]}`);
                console.log(`${rgb[0]},${rgb[1]},${rgb[2]}`);
               // console.log("-----------------//////////////////////////---////////////-");
            }*/
            
            img_02.pixels[index2 + 0] = rgb[0]; 
            img_02.pixels[index2 + 1] = rgb[1];
            img_02.pixels[index2 + 2] = rgb[2];

            /*if (contador < 5)
            {
                console.log(`${img_02.pixels[index2 + 0]},${img_02.pixels[index2 + 1]},${img_02.pixels[index2 + 2]}`);
                console.log(`${rgb[0]},${rgb[1]},${rgb[2]}`);
                console.log("-----------------//////////////////////////---////////////-");
            }*/

            rgb[0] = 0;
            rgb[1] = 0;
            rgb[2] = 0;
            //rgb[3] = 0;
            //console.log(`${rgb[0]},${rgb[1]},${rgb[2]}`);
        }
    }
    console.log(contador);

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
    if(key == "r" || key == "R")
    {
        regresar();
    }
    if(key == "g" || key == "G")
    {
        convolutions();
    }
}

function regresar()
{
    img_02.loadPixels();
    img_03.loadPixels();

    for(var y = 0 ; y < img_02.height; y++)
    {
        for(var x = 0; x < img_02.width; x++)
        {
            let index = (x + y * img_02.width) * 4;

            img_02.pixels[index + 0] = img_03.pixels[index + 0];
            img_02.pixels[index + 1] = img_03.pixels[index + 1];
            img_02.pixels[index + 2] = img_03.pixels[index + 2];
        }
    }

    img_02.updatePixels();
    img_03.updatePixels();
}

