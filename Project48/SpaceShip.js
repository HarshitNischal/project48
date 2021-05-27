class SpaceShip
{
	constructor(x,y,width,height)
	{
		var options={
      isStatic:true,
			density:1.2
  }
    
   
		this.width=width;
		this.height=height;
    this.body=Bodies.rectangle(x, y,width,height, options);
    this.spaceshipImg=loadImage("spaceship.png");
    this.body.scale=3.0;
		World.add(world, this.body);

	}

      display()
      {
        if(keyDown(UP_ARROW)){
          spaceship1.velocityX=-7
        }
          var pos=this.body.position;		
    
          push()
          translate(pos.x, pos.y);
          rectMode(CENTER)
          strokeWeight(3);
          fill(255,0,255)
          image(this.spaceshipImg,0,0,this.width, this.height);
          pop()
          
      }
      
    
}
			


