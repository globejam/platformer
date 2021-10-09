class Player {
    constructor(x, y, w,h) {
        this.w=w
        this.h=h
    var options = {
        restitution:0.5
    }

        this.body=Bodies.rectangle(x, y, this.w,this.h,options);
        Matter.Body.setMass(this.body, this.body.mass / 4);
        World.add(world, this.body);
    }

    display() {


        var pos=this.body.position;
        var angle=this.body.angle;
        
        push();
        translate(pos.x, pos.y);
        fill("red");
        rotate(angle);
        rectMode(CENTER);
        rect(pos.x, pos.y, this.w,this.h);
        pop();

        if(keyIsDown(RIGHT_ARROW)){
            pos.x=pos.x+0.5;
        }

        if(keyIsDown(LEFT_ARROW)){
            pos.x=pos.x-0.5;
        }
    }

    
}