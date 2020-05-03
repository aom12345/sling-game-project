class Box{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':0.6,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.Visiblity=255;
        this.box=loadImage("box.js");
      }
      display(){
          console.log(this.body.speed);
          if(this.body.speed<6){
            var angle = this.body.angle;
            push();
            translate(this.body.position.x, this.body.position.y);
            rotate(angle);
           fill(random(0,255),random(0,255),random(0,255));
            rectMode(CENTER);
            rect(0, 0, this.width, this.height);
            pop();
      }
      else{
        push();
        console.log(this.Visiblity);
        this.Visiblity=this.Visiblity-5;
        tint(255,this.body);
        fill(random(0,255),random(0,255),random(0,255));
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,50,50);
        pop();
       // World.remove(world,this.body);
      }
    }
}