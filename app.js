const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const team = [];

function employeeInfo() {
    inquirer.prompt([
        {
            type: "list",
            message: "Who will you be adding to the database?",
            name: "name",
            choices: ["Manager", "Engineer", "Intern", "Home"],
        },
    ]).then(val => {
        if (val.name === "Manager") {
            managerInfo();
        } else if (val.name === "Engineer") {
            engineerInfo()
        } else if (val.name === "Intern") {
            internInfo();
        } else if (val.name === "Home") {
            generateHTML(outputPath, render(team));
        };
    });
};


function managerInfo() {
    return inquirer.prompt([
        {
            type: "input",
            message: "Manager Name:",
            name: "name"
        },
        {
            type: "input",
            message: "Manager Employee ID:",
            name: "id",
        },
        {
            type: "input",
            message: "Manager Email:",
            name: "email"
        },
        {
            type: "input",
            message: "Manager Phone Number:",
            name: "phone",
        },
        {
            type: "input",
            message: "Manager Office Number:",
            name: "office",
        },
    ]).then(function(answer) {
        let manager = new Manager(answer.name, answer.id, answer.email, answer.phone, answer.office)
        team.push(manager);

        employeeInfo()
    })
};


function engineerInfo() {
    return inquirer.prompt([
        {
            type: "input",
            message: "Engineer Name:",
            name: "name"
        },
        {
            type: "input",
            message: "Engineer Employee ID:",
            name: "id",
        },
        {
            type: "input",
            message: "Engineer Email:",
            name: "email"
        },
        {
            type: "input",
            message: "Engineer Phone Number:",
            name: "phone",
        },
        {
            type: "input",
            message: "Engineer GitHub:",
            name: "github",
        },
    ]).then(function(answer) {
        let engineer = new Engineer(answer.name, answer.id, answer.email, answer.phone, answer.github)
        team.push(engineer);

        employeeInfo();
    });
};


function internInfo() {
    return inquirer.prompt([
        {
            type: "input",
            message: "Intern Name:",
            name: "name",
        },
        {
            type: "input",
            message: "Intern Employee ID:",
            name: "id",
        },
        {
            type: "input",
            message: "Intern Email:",
            name: "email",
        },
        {
            type: "input",
            message: "Intern Phone Number:",
            name: "phone",
        },
        {
            type: "input",
            message: "Intern LinkedIn:",
            name: "linkedin",
        },
    ]).then(function(answer) {
        let intern = new Intern(answer.name, answer.id, answer.email, answer.phone, answer.linkedin)
        team.push(intern);

        employeeInfo();
    });
};


function generateHTML(fileName, data) {
    fs.writeFile(fileName, data, "utf8", function (err) {
        if (err) {
            throw err;
        }
        console.log("success!");
    });
};

employeeInfo();