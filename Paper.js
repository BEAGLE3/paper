class Paper {
    constructor(r) {
      var options = {
        isStatic:false,
        restitution : 0.3,
        friction : 0.5,
        density : 4
      }
      this.body = Bodies.circle(200,200,r ,options);
      this.r=r;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      ellipseMode(CENTER);
      fill("white");
      ellipse(10, 0,25);
      pop();
    }
  };