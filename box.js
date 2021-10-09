class Box {
    constructor(x, y, w, h, a) {
      const options = {
        restitution: 0.5
      };
      this.body = Matter.Bodies.rectangle(x, y, w, h, options);
      Matter.World.add(world, this.body);
      this.w = w;
      this.h = h;
      this.a = a;
      this.image = loadImage("Wood.png");
    }
  
    show() {
      const pos = this.body.position;
      const angle = this.body.angle;
      const a = this.a;
      push();
      translate(pos.x, pos.y);
      rotate(a);
      fill(255);
      rectMode(CENTER);
      imageMode(CENTER);
      image(this.image, 0, 0, this.w, this.h);
      pop();
    }
    static(){
      Matter.Body.setStatic(this.body, true);
    }
  }
  