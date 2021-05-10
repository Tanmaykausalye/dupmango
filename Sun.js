class Sun {

constructor(){

  var options ={

   isStatic : true

  }

  this.body = Bodies.circle(120,50,40,options)

  this.radius = 40


World.add(world, this.body)



}

display(){

var pos = this.body.position

push()

fill(245,212,34)
ellipseMode(RADIUS)
ellipse(pos.x,pos.y,this.radius,this.radius)

pop()
}
}