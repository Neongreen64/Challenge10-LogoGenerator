const {Circle, Square, Triangle} = require("./shapes.js");

//Circle Test
describe("Circle", () =>{
    test("Will display a blue circle with black text :3", ()=>{
        const circle = new Circle();
        circle.setColor("blue");

        const logoText = ":3";
        const logoTextColor = "black";
        const svg = circle.render(logoText, logoTextColor);

        expect(svg).toContain('<circle fill="blue"');
        expect(svg).toContain(`fill="${logoTextColor}"`);
        expect(svg).toContain(`${logoText}</text>`);
    });
});

//Square test
describe("Square", () =>{
    test("Will display a purple square with black text >:3", ()=>{
        const square = new Square();
        square.setColor("purple");

        const logoText = ">:3";
        const logoTextColor = "black";
        const svg = square.render(logoText, logoTextColor);

        expect(svg).toContain('fill="purple"');
        expect(svg).toContain(`fill="${logoTextColor}"`);
        expect(svg).toContain(`${logoText}</text>`);
    });
});

//Triangle test
describe("Triangle", () =>{
    test("Will display a green triangle with white text :O", ()=>{
        const triangle = new Triangle();
        triangle.setColor("green");

        const logoText = ":O";
        const logoTextColor = "white";
        const svg = triangle.render(logoText, logoTextColor);

        expect(svg).toContain('fill="green"');
        expect(svg).toContain(`fill="${logoTextColor}"`);
        expect(svg).toContain(`${logoText}</text>`);
    });
});