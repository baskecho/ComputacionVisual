var w = 60;

var lienzo_01;
var lienzo_02;
var img_01;
var img_02;

// It's possible to convolve the image with many different 
// matrices to produce different effects. This is a high-pass 
// filter; it accentuates the edges. 
let matrixsize;
var matrix;


function setup() { 
	var myCanvas = createCanvas(1100, 450);
	 myCanvas.parent('editar-imagen-2');
	background(0);
	pixelDensity();

	img_01 = loadImage('https://upload.wikimedia.org/wikipedia/en/7/7d/Lenna_%28test_image%29.png');
    img_02 = loadImage('https://upload.wikimedia.org/wikipedia/en/7/7d/Lenna_%28test_image%29.png');

	lienzo_01 = createGraphics(512, 550);
	lienzo_02 = createGraphics(512, 550);
} 

function draw() {
    drawImage_01();
    drawImage_02();

    image(lienzo_01, 0, 0);
    image(lienzo_02, 562, 0);
}
// Dibuja la imagen de la Izquierda
drawImage_01 = () => {
	lienzo_01.image(img_01, 0, 0);
    var title = "IMAGEN ORIGINAL";
	
	lienzo_01.textSize(14);
	lienzo_01.textAlign(CENTER);
    lienzo_01.text(title, 0, 20,lienzo_01.width); 
}
// Dibuja la imagen de la Derecha
function drawImage_02() {
    lienzo_02.image(img_02, 0, 0);
	var title = "MATRIZ DE CONVOLUCION";

	lienzo_02.textSize(14);
	lienzo_02.textAlign(CENTER);
	lienzo_02.text(title, 0, 20,lienzo_02.width);
}

function convolutions()
{
    regresar()
    
    img_02.loadPixels();

	for (let x = 0; x < img_02.width; x++) {
		for (let y = 0; y < img_02.height; y++ ) { 
			let c = convolutionAux(x, y, matrix, matrixsize, img_02);
			let loc = (x + y*img_02.width)*4;

			img_02.pixels[loc] = red(c);
			img_02.pixels[loc+1] = green(c);
			img_02.pixels[loc+2] = blue(c);
			img_02.pixels[loc+3] = alpha(c);
		}
    }
    
    img_02.updatePixels();
}

function convolutionAux(x, y, matrix, matrixsize, img){

	var rtotal = 0;
	var gtotal = 0
	var btotal = 0;
	var atotal = 0;
	for (let i = 0; i < matrixsize; i++){
		for (let j= 0; j < matrixsize; j++){
			var xloc = x+i;
			var yloc = y+j;
			var loc = (xloc + img.width*yloc)*4;

			loc = constrain(loc,0,img.pixels.length-1);
			rtotal += ((img.pixels[loc]) * matrix[i][j]);
			gtotal += ((img.pixels[loc+1]) * matrix[i][j]);
			btotal += ((img.pixels[loc+2]) * matrix[i][j]);
			atotal += ((img.pixels[loc+3]) * matrix[i][j]);
		}
	}

	// Make sure RGB is within range
	rtotal = constrain(rtotal, 0, 255);
	gtotal = constrain(gtotal, 0, 255);
	btotal = constrain(btotal, 0, 255);
	atotal = constrain(atotal, 0, 255);
	// Return the resulting color
	return color(rtotal, gtotal, btotal);
}


function complementary()
{
    regresar();
    let img2 = createImage(512, 550);

	//loadPixels();
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

function regresar()
{
    img_02.loadPixels();
    img_01.loadPixels();

    for(y = 0; y < img_02.height; y++ )
    {
        for(x = 0; x < img_02.width; x++)
        {
            let index = (y + x*img_02.width)*4;
            img_02.pixels[index + 0] = img_01.pixels[index + 0];
            img_02.pixels[index + 1] = img_01.pixels[index + 1];
            img_02.pixels[index + 2] = img_01.pixels[index + 2];
            img_02.pixels[index + 3] = img_01.pixels[index + 3];
        }
    }

    img_01.updatePixels();
    img_02.updatePixels();
}

function keyPressed() 
{
    matrixsize = 3;
	if (key === '0') { // Identidad
    matrix = [ [  0,  0,  0 ],
               [  0,  1,  0 ],
               [  0,  0,  0 ] ]; 
        convolutions();
    } else if (key === '1') { // Enfocar. Acentúa los bordes
        matrix = [ [ -1, -1, -1 ],
                [ -1,  9, -1 ],
                [ -1, -1, -1 ] ]; 
        convolutions();
    } else if (key === '2') { // Repujado
        matrix = [ [ -2, -1,  0 ],
                [ -1,  1,  1 ],
                [  0,  1,  2 ] ]; 
        convolutions();
    } else if (key === '3') { // Detección de bordes
        matrix = [ [  1,  0, -1 ],
                [  0,  0,  0 ],
                [ -1,  0,  1 ] ]; 
        convolutions();
    } else if (key === '4') {
        matrix = [ [  0,  1,  0 ],
                [  1, -4,  1 ],
                [  0,  1,  0 ] ]; 
        convolutions();
    } else if (key === '5') {
        matrix = [ [ -1, -1, -1 ],
                [ -1,  8, -1 ],
                [ -1, -1, -1 ] ]; 
        convolutions();
    } else if (key === '6') { // Enfocar
        matrix = [ [  0, -1,  0 ],
                [ -1,  5, -1 ],
                [  0, -1,  0 ] ];
        convolutions();
    } else if (key === '7') { // Desenfoque de cuadro (normalizado)
        matrix = [ [ 1/9, 1/9, 1/9 ],
                [ 1/9, 1/9, 1/9 ],
                [ 1/9, 1/9, 1/9 ] ]; 
        convolutions();
    } else if (key === '8') { // Desenfoque gaussiano 5 × 5 (aproximación)
        matrixsize = 5;
        matrix = [ [ 1/256,  4/256,  6/256,  4/256, 1/256 ],
                [ 4/256, 16/256, 24/256, 16/256, 4/256 ],
                [ 6/256, 24/256, 36/256, 24/256, 6/256 ],
                [ 4/256, 16/256, 24/256, 16/256, 4/256 ],
                [ 1/256,  4/256,  6/256,  4/256, 1/256 ] ];
        convolutions();
    } else if (key === '9') { // Máscara de desenfoque 5 × 5 (sin máscara de imagen)
        matrixsize = 5;
        matrix = [ [ -1/256,  -4/256,  -6/256,  -4/256, -1/256 ],
                [ -4/256, -16/256, -24/256, -16/256, -4/256 ],
                [ -6/256, -24/256, 476/256, -24/256, -6/256 ],
                [ -4/256, -16/256, -24/256, -16/256, -4/256 ],
                [ -1/256,  -4/256,  -6/256,  -4/256, -1/256 ] ];
        convolutions();
    } else if (key == 'g'){
        complementary();
    }else if (key == 'r'){
        regresar();
    }
    

    
}