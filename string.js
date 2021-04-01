class String{
    constructor(bodyA,bodyB,X){
     var option={
         'length':300,
         'stiffness':0.04,
         'bodyA':bodyA,
         'bodyB':bodyB,
         'pointA':{x:X,y:0}
        }
     this.slingshot=Constraint.create(option);
     World.add(world,this.slingshot);
     this.X=X;
     
    }
    display(){
    var pointA=this.slingshot.bodyA.position;
    var pointB=this.slingshot.bodyB.position;
    push();
     line(pointA.x+this.X,pointA.y,pointB.x,pointB.y);
     pop();
    }
}