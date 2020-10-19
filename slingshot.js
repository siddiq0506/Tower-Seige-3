class SlingShot{
    constructor(A,B) {
     var options = {
         bodyA : A,
         pointB : B,
         stiffness : 0.04,
         length : 10,
         }
         
       this.b = B
         this.sling = Matter.Constraint.create (options)
         World.add (world,this.sling);
    }

display(){
    var pos =this.body.position;
    rectMode(CENTER);
    fill("blue");
    rect(pos.x, pos.y, this.width, this.height);
  }
};


