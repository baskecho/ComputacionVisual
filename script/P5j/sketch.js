function setup() 
{
    var myCanvas = createCanvas(100, 100);
    myCanvas.parent('sketch-holder');
    strokeWeight(3);
    smooth();
    stroke(100, 100, 100);
}
  
  function draw() 
  {
        var step = 25;
        background(0);
        
        
            //Lineas Verticales
        for(var x = step; x < this.width; x +=  step)
        {
            this.line(x, 0, x, this.height);
        }
        
            //Lineas Horizotales
        for(var y = step; y < this.height; y += step)
        {
            this.line(0, y, this.width, y);
        }
        
            //Circles
        this.ellipseMode(CENTER);
        this.stroke(255,255,255);
        
        for(var i = step; i < this.width; i += step)
        {
            for(var j = step; j < this.height - 15; j += step)
            {
                this.strokeWeight(6);
                this.point(i, j);
                this.strokeWeight(3);
            }
        }
  }