//require packages and files
const inquirer = require('inquirer');
const generatePage = require('./src/page-template.js');
const { writeFile } = require('./src/generate-site.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

//team will store info and will be used to create the HTML
let team = {
    team: '',
    manager: "",
    engineers: [],
    interns: []
};

//prompt functions
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
    inquirer.prompt([
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
        const manager = new Manager(managerInfo.name, managerInfo.id, managerInfo.email, managerInfo.officeNumber)
        team.manager = manager;
        //check what managerInfo.next is and act accordingly
        if(managerInfo.next === 'Add an Engineer'){
            addEngineer();
        }
        else if(managerInfo.next === 'Add an Intern'){
            addIntern();
        }
        else{
            createHTML();
        }
    })
};

const addEngineer = () => {
    console.log(`
    =================
    Add a New Engineer
    =================
    `);    
    inquirer.prompt([
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
            name: 'github',
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
        const engineer = new Engineer(engineerInfo.name, engineerInfo.id, engineerInfo.email, engineerInfo.github)
        team.engineers.push(engineer);
        //check what engineerInfo.next is and act accordingly
        if(engineerInfo.next === 'Add an Engineer'){
            addEngineer();
        }
        else if(engineerInfo.next === 'Add an Intern'){
            addIntern();
        }
        else{
            createHTML();
        }
    })
};

const addIntern = () => {
    console.log(`
    =================
    Add a New Intern
    =================
    `);    
    inquirer.prompt([
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
        const intern = new Intern(internInfo.name, internInfo.id, internInfo.email, internInfo.school)
        team.interns.push(intern);
        //check what internInfo.next is and act accordingly
        if(internInfo.next === 'Add an Engineer'){
            addEngineer();
        }
        else if(internInfo.next === 'Add an Intern'){
            addIntern();
        }
        else{
            createHTML();
        }
    })
};

//function to createHTML
function createHTML(){
    //import template literal that gets built from generatePage(team) to a variable
    let page = generatePage(team);//creates the html with the page-template.js

    //write an html file with the page variable
    writeFile(page);//uses function exported from generate-site.js to create file in the dist folder
    console.log("index.html file created inside dist/ folder.")
};

//START
addTeam()
    .then(teamData => {
        team.team = teamData.team;
        addManager();//From this function, all subsequent prompts will follow and file will be written in the end
    });
