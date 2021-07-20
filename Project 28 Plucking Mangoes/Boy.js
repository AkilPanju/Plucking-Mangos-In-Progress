class Boy
{
    constructor(x,y,width,height){
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;

        this.image = loadImage("boy.png");
        this.body = Bodies.rectangle(x,y,width,height);
        World.add(world,this.body);

        display()
        {
            push();
            image(this.image,x,y,width,height);
            pop();

        }
    }





















}