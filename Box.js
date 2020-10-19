class box {
    constructor(x,y,width,height) {
      var options = {
          
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      if(this.body.speed<3 ){
        
      }else{
       World.remove(world,this.body);
       
       this.visibility = this.visibility - 5
       
      }
      rectMode(CENTER);
      fill("blue");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };
  