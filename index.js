//require packages and files
const inquirer = require('inquirer');

//Create questions
//One array for each employee type
//Manager is the first to be called

//last question for each of them must be 
    //what to add next, and it must call the next or return
//team.name
let team = {
    name: '',
    managers: [],
    engineers: [],
    interns: []
};

const addTeam = () => {
    return inquirer.prompt([
        {//Team's Name
            type: 'input',
            name: 'team',
            message: "Please enter this team's name (required):",
            validate: teamInput => {
                if(teamInput){
                    return true;
                }
                else{
                    console.log("Enter this team's name!");
                    return false;
                }
            }
        }
    ])
};

const addManager = () => {
    return inquirer.prompt([
        {//Manager's Name
            type: 'input',
            name: 'manager',
            message: "Please enter the manager's name (required):",
            validate: managerInput => {
                if(managerInput){
                    worker = managerInput;
                    return true;
                }
                else{
                    console.log("Enter the manager's name!");
                    return false;
                }
            }
        },
        {//Manager's ID
            type: 'input',
            name: 'managerId',
            message: "Please enter the manager's ID (required):",
            validate: idInput => {
                if(idInput){
                    return true;
                }
                else{
                    console.log("Enter the manager's ID!");
                    return false;
                }
            }
        },
        {//Manager's Office Number
            type: 'input',
            name: 'officeNumber',
            message: "Please enter the manager's Office Number (required):",
            validate: officeNumberInput => {
                if(officeNumberInput){
                    return true;
                }
                else{
                    console.log("Enter the manager's Office Number!");
                    return false;
                }
            }
        },
        {//What's Next?
            type: 'list',
            name: 'next',
            message: "What would you like to do next?",
            choices: ['Add an Engineer', 'Add an Intern', 'Finish Team']
        }
    ])
    .then(managerInfo => {
        team.managers.push(managerInfo)
        //check what managerInfo.choices is and act accordingly
        if(managerInfo.choices === 'Add an Engineer'){
            addEngineer();
        }
        else if(managerInfo.choices === 'Add an Intern'){
            addIntern();
        }
    })
}


const addEngineer = [];

const addIntern = [];

//Call questions and store answers in array
function init() {
    addTeam()
        .then(teamData => {
            team.name = teamData.team;
            addManager().then(teamInfo => console.log(team));
        })
}

init();

//Create all classes and their tests - ?

//Create template literal in src

//Create CSS in dist

//write file to dist

//I want to have an answers array that will have
//team.name, team.manager, team.engineers, team.interns