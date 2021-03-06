let angle = 0;
let angle2 = 0;
let img_01;
let img_02;
let matrixsize;
var matrix;
var w = 60;
let linezo_01;

function setup() { 
	var myCanvas = createCanvas(1200, 500, WEBGL);
	myCanvas.parent('escala_grices');

    img_01 = loadImage('https://upload.wikimedia.org/wikipedia/en/7/7d/Lenna_%28test_image%29.png');
    //img_01 = loadImage('https://miro.medium.com/max/2000/1*E3DrG0S77WuiXaPYmXMn4Q.jpeg');
    img_02 = loadImage('https://upload.wikimedia.org/wikipedia/en/7/7d/Lenna_%28test_image%29.png');
    //img_02 = loadImage('https://miro.medium.com/max/2000/1*E3DrG0S77WuiXaPYmXMn4Q.jpeg');

    lienzo_01 = createGraphics(512, 550, WEBGL);

} 

function draw() {
    background(175);
    noStroke();
    texture(img_01);

    pointLight(255, 255, 255, 0, 0, 1250);
    

    translate(-width/2 +350,0);
    push();
    rotateX(angle);
    rotateY(angle*0.3);
    rotateZ(angle*0.2);
    box(200,200,200);
    pop();
    

    translate(width/2 - 80 ,0);
    push();
    noStroke();
    texture(img_02);
    rotateX(angle2);
    rotateY(angle2*0.3);
    rotateZ(angle2*0.2);
    box(200,200,200);
    pop();


    angle += 0.003;
    angle2 += 0.003;
}





function draw02()
{
    background(175);
    noStroke();

    texture(img_01);

    background(222,207,205);

    translate(-250,0);
    rotateX(angle2);
    rotateY(angle2*0.3);
    rotateZ(angle2*0.2);
    box(200,200,200);
    angle2 += 0.003;
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

function filtrosBlancoNegro(gray)
{
    let lightness = 210;

    img_02.loadPixels();
   
	for (let y = 0; y < img_02.height; y++) {
		for (let x = 0; x < img_02.width; x++){ 
            let index = (x+y*img_02.width)*4; // Posicion del pixel
            
            let r=img_02.pixels[index+0]; // Componente Red
            let g=img_02.pixels[index+1]; // Componente Green
            let b=img_02.pixels[index+2]; // Componente Blue
            let a=img_02.pixels[index+3]; // Componente Alpha
			
			if (gray===1){
				let I=(r+g+b)/3; // Promedio de los tres componentes
				lightness = I;
			} else if (gray===2){
				let V= max(r,g,b); // Componente mas grande de un color
				lightness = V;
			} else if (gray===3){
				let L=(max(r,g,b)+min(r,g,b))/2; // Promedio entre el componente mas grande y el mas pequeño
				lightness = L;
			} else if (gray===4){ // Promedio ponderado de RGB con corrección gamma (Luma)
				let Y601= 0.2989*r + 0.5870*g + 0.1140*b; // SDTV
				lightness = Y601;
			} else if (gray===5){ 
				let Y240= 0.212*r + 0.701*g + 0.087*b; // Adobe
				lightness = Y240;
			} else if (gray===6){ 
				let Y709= 0.2126*r + 0.7152*g + 0.0722*b; // HDTV
				lightness = Y709;
			} else if (gray===7){ 
				let Y2020= 0.2627*r + 0.6780*g + 0.0593*b; // UHDTV,HDR
				lightness = Y2020;
			} 
			
			            
			img_02.pixels[index+0]=lightness;
			img_02.pixels[index+1]=lightness;
			img_02.pixels[index+2]=lightness;
			img_02.pixels[index+3]=a;
			
			if (gray===0){ // Imagen original
				pixels[index+0]=r;
				pixels[index+1]=g;
				pixels[index+2]=b;
				pixels[index+3]=a;
			}
		}
	}
	img_02.updatePixels();
	//image(img, 12, 12, img.width *0.26, img.height *0.26);
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
    } else if (key == 'c'){
        complementary();
    }else if (key == 'f'){
        regresar();
    }else if (key == 'q'){
        regresar();
        filtrosBlancoNegro(1);
    }else if (key == 'w'){
        regresar();
        filtrosBlancoNegro(2);
    }else if (key == 'e'){
        regresar();
        filtrosBlancoNegro(3);
    }else if (key == 'r'){
        regresar();
        filtrosBlancoNegro(4);
    }else if (key == 't'){
        regresar();
        filtrosBlancoNegro(5);
    }else if (key == 'y'){
        regresar();
        filtrosBlancoNegro(6);
    }else if (key == 'u'){
        regresar();
        filtrosBlancoNegro(7);
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
    ambientMaterial(255, 255, 255);

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
