var img;
var resolution = 9;
var ascii = new Array(256);

function setup() 
{
    var myCanvas = createCanvas(350, 310);
    myCanvas.parent('sketch-holder');
    img = createImg('https://www.cinemascomics.com/wp-content/uploads/2017/07/one-piece-accion-real.jpg');
    
    this.background(255);
    this.fill(0);
    this.noStroke();

    


   /* 
    var letters = "MN:#$%,*+. ";
    

    for (var i = 0; i < 256; i++) 
    {
        let index = map( i, 0, 256, 0, letters.length);
        ascii[i] = letters.charAt(index);
    }

    let mono = textFont("Courier", resolution + 2);*/
   
    
    
}

function draw(){
    filter(GRAY);
    image(img, 0, 0,200,200);
    
    
}










  
  