class Ground{

constructor(){


var options= {

  isStatic : true,
  density : 2

}



this.body = Bodies.rectangle(640,600,1280,30,options)

this.width = 80*160
this.height = 30

World.add(world, this.body)



 }

display(){
  
    var pos = this.body.position


push()

  fill(86,45,35)   
  rectMode(CENTER)
  rect(pos.x,pos.y,this.width,this.height)
pop()
}
}