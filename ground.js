class Ground{
    constructor(){
        var options = {
            'isStatic':true
        }
        this.body = Bodies.rectangle(width/2, height-40, width, 30, options);
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill("brown");
        rect(pos.x, pos.y, width, 40);
    }
}