class Dustbin{
    constructor(x,y,width,height){
       var options={
           isStatic:true
       }
        this.body=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
        this.width=width;
        this.height=height;


        this.image=loadImage("sprites/dustbin.png")

    }
    display(){
       rectMode(CENTER)
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
        imageMode(CENTER)
       
        image(this.image,this.body.position.x+0,this.body.position.y,this.width,this.height)    
    }
}