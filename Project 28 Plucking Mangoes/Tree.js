class Tree 
{
    constructor(x,y,width,height) 
    {
        this.tree  = Bodies.rectangle(x,y,width,height);
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        World.add(world,this.tree);
    }

    display() 
    {
        push();
        translate(this.body.position.x, this.body.position.y);
        rectangle(0,0,width,height);
        pop();
    }
}