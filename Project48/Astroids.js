class Astroids{
    constructor(x,y,r) {
      var options = {
          restitution: 0.8,
          friction: 1,
      }
    
      this.x = x;
      this.y = y;
      this.r = r;
      this.image = loadImage("astroid.png");
      this.body = Bodies.circle(this.x,this.y,this.r,options);
      World.add(world, this.body);
    }
    display(){
     var position=this.body.position
     push();
     translate(position.x,position.y);
    rotate(this.body.angle);
    imageMode(CENTER);
    ellipseMode(CENTER);
    image(this.image,0,0,this.r*2,this.r*2);
    pop();
     
    }
  }