class Stone
{
    constructor(x,y,radius) 
    {
        var options = 
        {
            isStatic: false,
            restitution: 0,
            friction: 1,
            density: 1.2,
        }

        this.body = Matter.Bodies.circle(x,y,radius);
        this.x = x;
        this.y = y;
        this.radius = radius;
        World.add(world,this.body);
    }

    display() 
    {
        push();
        translate(this.body.position.x, this.body.position.y,this.angle);
        pop();
    }

}