//Class Shape
class Shape {
    //Contstructor sets the default color of a shape to green.
    constructor(){
        this.color = "green";
    }
    //setColor changes the color of the shape.
    setColor(color){
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
        this.x = 150;
        this.y = 100;
    }
    //Render Circle
    render(logoText, logoTextColor){
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200"><circle fill="${this.color}" r="${this.radius}" cx="${this.x}" cy="${this.y}"/><text font-size="50" fill="${logoTextColor}" x="${this.x}" y="${this.y}" text-anchor="middle">${logoText}</text></svg>`
    }
}
//Class Square extends Shape class.
class Square extends Shape {
    //Constructor sets the squares size and x/y values
    constructor(){
        super();
        this.size = 200;
        this.x = 200;
        this.y = 100;
    }
    //Render Square
    render(logoText, logoTextColor){
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200"><rect width="${this.size}" height="${this.size}" x="${this.x}" y="${this.y}" fill="${this.color}"/><text font-size="50" fill="${logoTextColor}" x="${this.x+50}" y="${this.y+75}" text-anchor="middle">${logoText}</text></svg>`
    }
}
//Class Triangle extends Shape class.
class Triangle extends Shape {
    //Constructor sets the triangles points.
    constructor(){
        super();
        this.points = "150,20 245,180 50,180";
    }
    //Render Triangle
    render(logoText, logoTextColor){
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200"><polygon points="${this.points}" fill="${this.color}"/><text font-size="50" fill="${logoTextColor}" x="150" y="90" text-anchor="middle">${logoText}</text></svg>`
    }
}
module.exports = {Circle,Square,Triangle};