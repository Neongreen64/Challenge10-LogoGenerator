//Class Shape
class Shape {
    //Contstructor sets the default color of a shape to green.
    constructor(){
        this.color = "green";
    }
    //setColor changes the color of the shape.
    setColor(){
        this.color = color;
    }
    //Render shape
    render(){

    }
}
//Class Circle extends Shape class.
class Circle extends Shape {
    //Constructor sets the circle's radius and x/y values.
    constructor(){
        super();
        this.radius = 100;
        this.x = 300;
        this.y = 200;
    }
    //Render Circle
    render(){
        return `<circle fill="${this.color}" r="${this.radius}" cx="${this.x}" cy="${this.y}">`
    }
}
//Class Square extends Shape class.
class Square extends Shape {
    constructor(){
        
    }
    //Render Square
    render(){
        
    }
}
//Class Triangle extends Shape class.
class Triangle extends Shape {
    constructor(){
        
    }
    //Render Triangle
    render(){
        
    }
}
module.exports = {Circle,Square,Triangle};