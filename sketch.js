function setup() {
    createCanvas(400, 400);
    background("withe")
  }
  
  function draw() {
   
    
    stroke("black")
    fill("red")
    
   // console.log(mouseIsPressed)
    
    if(mouseIsPressed){
     circle(mouseX, mouseY, 20,35);
    }
    
    
    
  }