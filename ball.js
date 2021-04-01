class Ball{
    constructor(X,Y){
      var options ={
      // isStatic:true,
      density:1,
      restitution:1}
      this.body=Bodies.circle(X,Y,25,options);
      World.add(world,this.body);
      this.x=X;
      this.y=Y;
      
    }
  
    display(){
      push();
        ellipseMode(RADIUS);
        fill("pink");
        ellipse(this.body.position.x,this.body.position.y,25,25);
        pop();
    }
}