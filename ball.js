class Paper {
    constructor(x, y, radius) {
      var options = {
        isStatic: false,
        'restitution':0.5,
        'friction':0.5,
        'density':1.2
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius
      this.image = loadImage("Images/paper.png");
      
      World.add(world, this.body);
      }
    display(){
      imageMode(CENTER);
      var pos = this.body.position
      fill("purple");
  
      image(this.image, pos.x, pos.y);
      
    }
    };