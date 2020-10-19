class Polygon {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.circle(50,200,20);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
      fill("red");
      rect(mouseX,mouseY, this.width, this.height);
    }
  };