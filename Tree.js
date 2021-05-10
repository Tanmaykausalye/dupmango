class Tree extends BaseClass {

  constructor(x,y,width,height){

  super()
  
  this.image1 = loadImage("sprites/tree.png")

  }


display(){

  imageMode(CENTER)
  image(this.image1,1010,345,500,500)


}

}