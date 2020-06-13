// the image to asciify
let img;
let img2;
let contador = 0;
 
// sampling resolution: colors will be sampled every n pixels 
// to determine which character to display
let resolution = 6;
let repaint = 0;
let intensity = 1;
let lienzo01;
let lienzo02;
//let letters = "@&$o%#*+=-':. .";
let letters = ". $%, . $ #$, .,% & & , . ";
//let letters = ".   .  .   .  .   ;:&         . . .  ";

 
// array to hold characters for pixel replacement
let ascii=[];
let link='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Keel-billed_toucan.jpg/466px-Keel-billed_toucan.jpg';
 

function preload() {
    //img = loadImage(link);
    img2 = loadImage(link);
    img3 = loadImage(link);

    img = createCapture(VIDEO, () => {
        img_01.size(img3.width,img3.height);
    });

    img_01 = createCapture(VIDEO, () => {
        img_01.size(img3.width,img3.height);
    });
}
function setup() {    
    var myCanvas = createCanvas(1100, 600);
    myCanvas.parent('ascii_video');
    background(255);
    fill(0);
    noStroke();
 
    // build up a character array that corresponds to brightness values
    //ascii = new char[256];
    let mono = textFont("Georgia", resolution + 2);
    textFont(mono);
    
    

    lienzo01 = createGraphics(img3.width, img3.height);
    lienzo02 = createGraphics(img3.width, img3.height);
}

function draw(){

    /*if (repaint < 1){
        asciify();
        repaint += 1;
    }*/

    lienzo01.background(255);

    calcArray();

    asciify();
    drawLienzo02();
    image(lienzo01,500,0);
    image(lienzo02,0,0);

    //resetCanvas(w,h)
}

function calcArray(){

    //let letters;
    contador += 1;


    for (let i = 0; i < 256; i++) {
        let index = int(map(i, 0, 256, 0, letters.length));
        ascii[i] = letters.charAt(index);
    }

    
}

function drawLienzo02(){
    lienzo02.image(img_01,0,0);
}


function asciify() {
  // since the text is just black and white, converting the image
  // to grayscale seems a little more accurate when calculating brightness
    //img.filter(GRAY);
    img.loadPixels();
    img2.loadPixels();

    // grab the color of every nth pixel in the image
    // and replace it with the character of similar brightness
    for (let y = 0; y < img.height; y += resolution) {
    for (let x = 0; x < img.width; x += resolution) {
        
        let index = (x+y*img.width)*4; // Posicion del pixel
        let r=img.pixels[index+0]; // Componente Red
        let g=img.pixels[index+1]; // Componente Green
        let b=img.pixels[index+2]; // Componente Blue
        let a=img.pixels[index+3]; // Componente Alpha

        //asciiPaint(R,G,B,A,x,y); // Color de los caracteres
        
        lienzo01.text(ascii[int(brightness(color(r,g,b,a)))], x, y); // Dibuja los caracteres
    }
    }
    
  //img.updatePixels();
}

// Se ejecuta cuando se presiona cualquier tecla

// Resetea el lienzo y el contador de pintado
function resetCanvas(){
    resizeCanvas(0, 0);
    resizeCanvas(img3.width,img3.height);
    repaint=0;
}
