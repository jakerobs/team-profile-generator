const inquirer = require('inquirer');
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");

const teamData = []

createEmployee = () => {
    inquirer.prompt([
    {
        type: 'list',
        name: 'employeeChoice',
        message: 'Which employee would you like to create?',
        choices: ['Manager','Engineer', 'Intern', "I am finished."]
    }
])
    .then(({ employeeChoice }) => {
        if (employeeChoice === 'Manager') {
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: "What is the Manager's name?"
                },
                {
                    type: 'input',
                    name: 'id',
                    message: "What is the Manager's id?"
                },
                {
                    type: 'input',
                    name: 'email',
                    message: "What is the Manager's email?"
                },
                {
                    type: 'input',
                    name: 'officeNumber',
                    message: "What is the Manager's office number?"
                },
            ])
                .then(data => {
                    const employee = new Manager(data.name, data.id, data.email, data.officeNumber);
                    teamData.push(employee);
                    createEmployee();
                })
        } else if (employeeChoice === 'Engineer') {
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: "What is the Engineer's name?"
                },
                {
                    type: 'input',
                    name: 'id',
                    message: "What is the Engineer's id?"
                },
                {
                    type: 'input',
                    name: 'email',
                    message: "What is the Engineer's email?"
                },
                {
                    type: 'input',
                    name: 'github',
                    message: "What is the Engineer's GitHub?"
                }
            ])
                .then(data => {
                    const employee = new Engineer(data.name, data.id, data.email, data.github);
                    teamData.push(employee);
                    createEmployee();
                })
        } else if (employeeChoice === 'Intern') {
            //ask for information about employee
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: "What is the Intern's name?"
                },
                {
                    type: 'input',
                    name: 'id',
                    message: "What is the Intern's id?"
                },
                {
                    type: 'input',
                    name: 'email',
                    message: "What is the Intern's email?"
                },
                {
                    type: 'input',
                    name: 'school',
                    message: "What is the Intern's school?"
                },
            ])
                .then(data => {
                    const employee = new Intern(data.name, data.id, data.email, data.school);
                    teamData.push(employee);
                    createEmployee();
                })
        }
        else {
            console.log("<~~~~~ Generating Page! ~~~~~>")
            generatePage(teamData)
            
        }
    });
};

createEmployee();