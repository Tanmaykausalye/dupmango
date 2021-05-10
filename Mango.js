class Mango{

constructor(x,y){

var options={

isStatic : true

}


this.body = Bodies.circle(x,y,20,options) 

this.x = x
this.y = y

this.image2 = loadImage("sprites/mango.png")

World.add(world, this.body)

}

display(){

   //  ellipseMode(RADIUS) 
    // ellipse(this.body.position.x,this.body.position.y,5,5)    
  
    var mangoPos=this.body.position;	
    push()
    translate(mangoPos.x, mangoPos.y);
    // rectMode(CENTER);
    rotate(this.body.angle)
    fill(255,0,255)
    imageMode(CENTER);
    ellipseMode(CENTER) 
  
    image(this.image2,0,0,45,45)
   pop()
   }
}