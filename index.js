const inquirer = require('inquirer');
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const generateHTML = require("./src/pageTemplate");

const teamInfo = []

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
                .then((ManagerData) => {
                    const { name, id, email, officeNumber } = ManagerData;
                    const manager = new Manager(name, id, email, officeNumber);
                    teamInfo.push(manager);
                    createEmployee();
                });
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
                .then((EngineerData) => {
                    const { name, id, email, github } = EngineerData;
                    const engineer = new Engineer(name, id, email, github);
                    teamInfo.push(engineer);
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
            .then((InternData) => {
                const { name, id, email, school } = InternData;
                const intern = new Intern(name, id, email, school);
                teamInfo.push(intern);
                    createEmployee();
                })
        }
        else {
            console.log("<~~~~~ Generating Page! ~~~~~>")
            createHTML(teamInfo)
        }
    });
};

createHTML = (teamInfo)  => {
    generateHTML(teamInfo);
};

createEmployee()