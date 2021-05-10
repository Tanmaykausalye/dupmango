class BaseClass{

   constructor(x,y,width,height){

   this.body = Bodies.rectangle(x,y,width,height)

   this.height = height
   this.width = width

   
   
   World.add(world, this.body)

  }

  display(){

  var pos = this.body.position
  var angle = this.body.angle;
   
   push()
   
  //translate(this.body.position.x,this.body.position.y)
  //rotate(angle) 
  rect(pos.x,pos.y,this.width,this.height)  
  

  pop()

  }
}