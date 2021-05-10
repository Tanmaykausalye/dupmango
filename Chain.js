class Chain{

   constructor(bodyA,pointB){

  var options ={

   bodyA : bodyA,
   pointB : pointB,
   stiffness : 0.005

  }

  this.chain = Constraint.create(options)

World.add(world, this.chain)

   }

  fly(){

  this.chain.bodyA = null

  }

 attach(body){

    this.chain.bodyA = body; 
    
     }
    

display(){

if(this.chain.bodyA){
var point1 = this.chain.bodyA.position
var point2 = this.chain.pointB

line(point1.x,point1.y,point2.x,point2.y)
}
}

}