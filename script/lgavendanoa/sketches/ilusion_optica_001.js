function setup() 
{
    var myCanvas = createCanvas(500, 350);
    myCanvas.parent('ilusion-optica-001');
    strokeWeight(3);
    smooth();
    stroke(100, 100, 100);
    background(255,255,255);
}
  
  function draw() 
  {
        var step = 25;
        background(255,255,255);
        
        var width2 = width - step;
        let height2 = height - step;
        let step2 = step*2;


            //Lineas Verticales
        for(var x = step2; x < width2; x +=  step)
        {
            this.line(x, step2, x, height2 - step2/2);
        }
        
            //Lineas Horizotales
        for(var y = step2; y < height2; y += step)
        {
            this.line(step2, y, width2 - step2/2, y);
        }
        
            //Circles
        this.ellipseMode(CENTER);
        this.stroke(0);
        
        for(var i = step2; i < width2; i += step)
        {
            for(var j = step2; j < height2 - 15; j += step)
            {
                this.strokeWeight(6);
                this.point(i, j);
                this.strokeWeight(3);
            }
        }
  }

