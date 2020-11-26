class Log {
    constructor(x, y, length, angle) {
        var options = {
            restitution : 0.25,
            friction : 1
        };
        this.body = Bodies.rectangle(x, y, 20, length, options);
        this.width = 20;
        this.height = length;
        Matter.Body.setAngle(this.body, angle)
        World.add(world, this.body);
        console.log(this.body);
    }

    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        rectMode(CENTER);
        push();
        translate(pos.x, pos.y)
        rotate(angle);
        stroke("white")
        strokeWeight(5)
        fill("brown")
        rect(0, 0, this.width, this.height);
        pop();
    }
}