class Slingshot
{

    constructor(bodyA,pointB)
    {
            var options = 
            {
                bodyA: bodyA,
                pointB: pointB,
                length: 2,
                stiffness: 5
            }
        this.pointB = pointB;
        World.add(world,this.sling);

    }

    attach(body){
        this.sling.bodyA = body;
    }
    fly(){
        this.sling.bodyA = null;
    }
    display(){
        sling.display();
    }


}




















