class Paper {
    constructor(x, y, radius) {
      var options = {
         restitution:0.8, friction:0.3 , density:0.3
          
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius=radius;
      //this.height = height;
      this.image=loadImage('paper.png');

      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle= this.body.angle;
      push();
      translate(pos.x,pos.y)
      rotate(angle);
      imageMode(CENTER);
      fill(255);
      image(this.image,0, 0, this.radius, this.radius);
      pop();
    }
  }