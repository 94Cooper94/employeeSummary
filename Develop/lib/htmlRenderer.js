const path = require("path");
const fs = require("fs");

const templatesDir = path.resolve(__dirname, "../templates");

const render = employees => {
  const html = [];

  html.push(...employees
    .filter(employee => employee.empRole() === "Manager")
    .map(manager => renderManager(manager))
  );
  html.push(...employees
    .filter(employee => employee.empRole() === "Engineer")
    .map(engineer => renderEngineer(engineer))
  );
  html.push(...employees
    .filter(employee => employee.empRole() === "Intern")
    .map(intern => renderIntern(intern))
  );

  return renderMain(html.join(""));

};

const renderManager = manager => {
  let template = fs.readFileSync(path.resolve(templatesDir, "manager.html"), "utf8");
  template = replacePlaceholders(template, "name", manager.empName());
  template = replacePlaceholders(template, "role", manager.empRole());
  template = replacePlaceholders(template, "email", manager.empEmail());
  template = replacePlaceholders(template, "phone", manager.empPhone());
  template = replacePlaceholders(template, "id", manager.empId());
  template = replacePlaceholders(template, "office", manager.empOffice());
  return template;
};

const renderEngineer = engineer => {
  let template = fs.readFileSync(path.resolve(templatesDir, "engineer.html"), "utf8");
  template = replacePlaceholders(template, "name", engineer.empName());
  template = replacePlaceholders(template, "role", engineer.empRole());
  template = replacePlaceholders(template, "email", engineer.empEmail());
  template = replacePlaceholders(template, "phone", engineer.empPhone());
  template = replacePlaceholders(template, "id", engineer.empId());
  template = replacePlaceholders(template, "github", engineer.empGithub());
  return template;
};

const renderIntern = intern => {
  let template = fs.readFileSync(path.resolve(templatesDir, "intern.html"), "utf8");
  template = replacePlaceholders(template, "name", intern.empName());
  template = replacePlaceholders(template, "role", intern.empRole());
  template = replacePlaceholders(template, "email", intern.empEmail());
  template = replacePlaceholders(template, "phone", intern.empPhone());
  template = replacePlaceholders(template, "id", intern.empId());
  template = replacePlaceholders(template, "school", intern.empLinkedin());
  return template;
};

const renderMain = html => {
  const template = fs.readFileSync(path.resolve(templatesDir, "main.html"), "utf8");
  return replacePlaceholders(template, "team", html);
};

const replacePlaceholders = (template, placeholder, value) => {
  const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
  return template.replace(pattern, value);
};

module.exports = render;