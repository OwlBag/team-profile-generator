const inquirer = require('inquirer');
const { writeFile, copyFile } = require('./utils/generate-site.js');
const generatePage = require('./src/page-template.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the Manager?',
            // Makes sure that the user input a value for the name
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log('Please enter a name!')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the ID of the Manager?',
            // Makes sure that the user input a NUMBER for the id
            validate: idInput => {
                if (typeof parseInt(idInput) === 'number'){
                    return true
                } else {
                    return false
                }
            }

        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the email address of the Manager?',
            // Makes sure that the user input a value for the email
            validate: emailInput => {
                if (emailInput) {
                    return true
                } else {
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the Office Number of the Manager?',
            // Makes sure that the user input a NUMBER for the office number
            validate: officeNumInput => {
                if (typeof parseInt(officeNumInput) === 'number'){
                    return true
                } else {
                    return false
                }
            }
        }
    ])
    .then(data => {
        return convertDataToClasses(data, 'Manager');
    })
}

const promptMenu = data => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'menuOption',
            message: 'What would you like to do next?',
            choices: ['Add an Intern', 'Add an Engineer', 'Quit and generate HTML']
        }
    ])
    .then(result => {
        if (result.menuOption === 'Add an Intern'){
            return promptEmployees(data, 'Intern')
        } else if (result.menuOption === 'Add an Engineer'){
            return promptEmployees(data, 'Engineer')
        } else if (result.menuOption === 'Quit and generate HTML'){
            return data
        }
    })
}

const promptEmployees = (employeesData, role) => {

    console.log(employeesData, role)
    if (!employeesData) {
        employeesData = [];
    }

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the Employee?',
            // Makes sure that the user input a value for the name
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log('Please enter a name!')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the ID of the Employee?',
            // Makes sure that the user input a NUMBER for the id
            validate: idInput => {
                if (typeof parseInt(idInput) === 'number'){
                    return true
                } else {
                    return false
                }
            }

        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the email address of the Employee?',
            // Makes sure that the user input a value for the email
            validate: emailInput => {
                if (emailInput) {
                    return true
                } else {
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is the github username of this engineer?',
            // Makes sure that the use input a value for the github username
            validate: githubInput => {
                if(githubInput) {
                    return true
                } else {
                    return false
                }
            },
            // Makes sure that the role of the employee is 'Engineer' before asking this question
            when: () => {
                if (role === 'Engineer'){
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is the name of the school this intern goes to?',
            // Makes sure that the use input a value for the github username
            validate: githubInput => {
                if(githubInput) {
                    return true
                } else {
                    return false
                }
            },
            // Makes sure that the role of the employee is 'Intern' before asking this question
            when: () => {
                if (role === 'Intern'){
                    return true;
                } else {
                    return false;
                }
            }
        },
    ])
    .then(employeeData => {
        employeesData.push(convertDataToClasses(employeeData, role))
        return promptMenu(employeesData);
    })
}

const convertDataToClasses = (employee, role) => {
    if (role === 'Manager'){
        return new Manager(employee.name, employee.id, employee.email, employee.officeNumber)
    } else if(role === 'Engineer'){
        return new Engineer(employee.name, employee.id, employee.email, employee.github)
    } else if(role === 'Intern'){
        return new Intern(employee.name, employee.id, employee.email, employee.school)
    }
}

promptManager()
    .then(data => {
        return promptMenu([data])
    })
    .then(employeeData => {
        return generatePage(employeeData);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    }) 
    .then(writeFileResponse => {
        console.log(writeFileResponse);
        return copyFile();
    })
    .then(copyFileResponse => {
        console.log(copyFileResponse);
    })
    .catch(err => {
        console.log(err);
    })