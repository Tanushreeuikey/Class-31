class Bird extends BaseClass 
{
  constructor(x,y)
  {
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.trajectory=[]
    this.smkimage = loadImage("sprites/smoke.png");
  }

  display() 
  {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    
    super.display();
   var pos =[this.body.position.x,this.body.position.y]
   if(this.body.position.x>200 && this.body.velocity.x>10)
    {
      this.trajectory.push(pos)
    
    }
     
   for(var i=0 ; i < this.trajectory.length; i++ )
   image(this.smkimage,this.trajectory[i][0],this.trajectory[i][1])

  }
}
