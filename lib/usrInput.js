//require inquirer.
const inquirer = require('inquirer');

//getUserInput function.
const getUsrInput = () => {
    const usrInput = inquirer.prompt([
        //Get the 0-3 characters for the logo, will validate if the input length is less than or equal to 3.
        {
            type: 'input',
            name: 'logoText',
            message: 'Enter 0-3 characters for the logo: ',
            validate: (input) => {
                if(input.length <=3){
                    return true
                }
                return 'Enter 0-3 characters for the logo: ';
            }
        },
        //Get the logo text color.
        {
            type: 'input',
            name: 'logoTextColor',
            message: 'Enter logo text color (hexadecimal number or color name): ',
        },
        //Get the shapeType from a list of choices.
        {
            type: 'list',
            name: 'shapeType',
            message: 'Pick a shape: ',
            choices: ['circle', 'square', 'triangle'],
        },
        //Get the shapeTypeColor.
        {
            type: 'input',
            name: 'shapeTypeColor',
            message: 'Enter shape color (hexadecimal number or color name): ',
        },
    ]);
    return usrInput;
};
module.exports = {getUsrInput};