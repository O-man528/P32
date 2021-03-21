class Ball{
    constructor(x,y,r){
        var ball_options ={
            restitution: 1.0
        }
    
        this.ball = Bodies.circle(x,y,r, ball_options);
        this.r=r;
        World.add(world,this.ball);
    }
    display(){
        ellipseMode(RADIUS);
    ellipse(this.ball.position.x, this.ball.position.y, this.r, this.r);
    }
}