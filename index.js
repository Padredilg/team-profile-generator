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
            name: 'name',
            message: "Please enter the manager's name (required):",
            validate: managerInput => {
                if(managerInput){
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
            name: 'id',
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
        {//Manager's Email
            type: 'input',
            name: 'email',
            message: "Please enter the manager's email address (required):",
            validate: emailInput => {
                if(emailInput){
                    return true;
                }
                else{
                    console.log("Enter the manager's email address!");
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
        return;
    })
}


const addEngineer = () => {
    console.log(`
    =================
    Add a New Engineer
    =================
    `);    
    return inquirer.prompt([
        {//Engineer's Name
            type: 'input',
            name: 'name',
            message: "Please enter the Engineer's name (required):",
            validate: engineerInput => {
                if(engineerInput){
                    return true;
                }
                else{
                    console.log("Enter the Engineer's name!");
                    return false;
                }
            }
        },
        {//Engineer's ID
            type: 'input',
            name: 'id',
            message: "Please enter the Engineer's ID (required):",
            validate: idInput => {
                if(idInput){
                    return true;
                }
                else{
                    console.log("Enter the Engineer's ID!");
                    return false;
                }
            }
        },
        {//Engineer's Email
            type: 'input',
            name: 'email',
            message: "Please enter the Engineer's email address (required):",
            validate: emailInput => {
                if(emailInput){
                    return true;
                }
                else{
                    console.log("Enter the Engineer's email address!");
                    return false;
                }
            }
        },
        {//Engineer's Github
            type: 'input',
            name: 'Github',
            message: "Please enter the Engineer's Github username(required):",
            validate: githubInput => {
                if(githubInput){
                    return true;
                }
                else{
                    console.log("Enter the Engineer's Github username!");
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
    .then(engineerInfo => {
        team.engineers.push(engineerInfo)
        //check what engineerInfo.choices is and act accordingly
        if(engineerInfo.choices === 'Add an Engineer'){
            addEngineer();
        }
        else if(engineerInfo.choices === 'Add an Intern'){
            addIntern();
        }
        return;
    })
};

const addIntern = () => {
    console.log(`
    =================
    Add a New Intern
    =================
    `);    
    return inquirer.prompt([
        {//Intern's Name
            type: 'input',
            name: 'name',
            message: "Please enter the Intern's name (required):",
            validate: internInput => {
                if(internInput){
                    return true;
                }
                else{
                    console.log("Enter the Intern's name!");
                    return false;
                }
            }
        },
        {//Intern's ID
            type: 'input',
            name: 'id',
            message: "Please enter the Intern's ID (required):",
            validate: idInput => {
                if(idInput){
                    return true;
                }
                else{
                    console.log("Enter the Intern's ID!");
                    return false;
                }
            }
        },
        {//Intern's Email
            type: 'input',
            name: 'email',
            message: "Please enter the Intern's email address (required):",
            validate: emailInput => {
                if(emailInput){
                    return true;
                }
                else{
                    console.log("Enter the Intern's email address!");
                    return false;
                }
            }
        },
        {//Engineer's School
            type: 'input',
            name: 'school',
            message: "Please enter the Intern's School(required):",
            validate: schoolInput => {
                if(schoolInput){
                    return true;
                }
                else{
                    console.log("Enter the Intern's School!");
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
    .then(internInfo => {
        team.interns.push(internInfo)
        //check what internInfo.choices is and act accordingly
        if(internInfo.choices === 'Add an Engineer'){
            addEngineer();
        }
        else if(internInfo.choices === 'Add an Intern'){
            addIntern();
        }
        //return;
    })
};

//Call questions and store answers in array
function init() {
    addTeam()
        .then(teamData => {
            team.name = teamData.team;
            return addManager();
        })
        .then(() => {
            console.log(team);
        })
}

init();

//Create all classes and their tests - ?

//Create template literal in src

//Create CSS in dist

//write file to dist

//I want to have an answers array that will have
//team.name, team.manager, team.engineers, team.interns