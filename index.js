//import fs
const fs = require('fs');

//import shape classes from shapes.js
const {Circle,Square,Triangle} = require('./lib/shapes.js');

//import the function getUsrInput from usrInput.js
const {getUsrInput} = require('./lib/usrInput');

//generateShape() async function
async function generateShape(){
    try{
        //creates constant usrInput that will store the user's input will wait until the user is finished inputting their answers.
        const usrInput = await getUsrInput();

        //creates variable shapeType
        let shapeType;

        //if usrInput=circle create a new circle object and store in the shapeType variable.
        if(usrInput.shapeType === 'circle'){
            shapeType = new Circle();
        }

        //else if usrInput=square create a new square object and store in the shapeType variable.
        else if(usrInput.shapeType === 'square'){
            shapeType = new Square();
        }

        //else if usrInput=triangle create a new triangle object and store in the shapeType variable.
        else if(usrInput.shapeType === 'triangle'){
            shapeType = new Triangle();
        }

        //else console log the error
        else {
            console.log("ERROR: INVALID SHAPE")
        }

        //set the color of the shape based on the usrInput.shapeTypeColor
        shapeType.setColor(usrInput.shapeTypeColor);

        //create const svg and store the render of the shape inside of it
        const svg = shapeType.render(usrInput.logoText, usrInput.logoTextColor);

        //write the shape to the logo.svg
        fs.writeFileSync('./examples/logo.svg', svg);
        console.log("Generated logo.svg :3");
    }

    //catch consoles out the error
    catch(e){
        console.error("ERROR: ", e);
    }
}

//call generateShape()
generateShape();