class Boy extends BaseClass{

constructor(x,y,width,height){

super(x,y,width,height);

this.image1 = loadImage("sprites/boy.png")


}
display(){

 super.display()

 imageMode(CENTER)
 image(this.image1,150,533,this.width,this.height)

}
}