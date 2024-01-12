const prompt = require('./utils/prompt');
const formatTable = require('./utils/formatter');
const DepartmentService = require('./services/departmentService');
const RoleService = require('./services/roleService');
const EmployeeService = require('./services/employeeService');

const executeAction = async (action) => {
  switch (action) {
    case 'View all departments':
      await viewAllDepartments();
      break;
    case 'View all roles':
      await viewAllRoles();
      break;
    case 'View all employees':
      await viewAllEmployees();
      break;
    case 'Add a department':
      await addDepartment();
      break;
    case 'Add a role':
      await addRole();
      break;
    case 'Add an employee':
      await addEmployee();
      break;
    case 'Update an employee role':
      await updateEmployeeRole();
      break;
    default:
      console.log('Invalid choice.');
  }
};

const viewAllDepartments = async () => {
  const departments = await DepartmentService.getAllDepartments();
  console.log(formatTable(departments));
  await mainMenu();
};

const viewAllRoles = async () => {
  const roles = await RoleService.getAllRoles();
  console.log('Roles:', roles);
  await mainMenu();
};

const viewAllEmployees = async () => {
  const employees = await EmployeeService.getAllEmployees();
  console.log(formatTable(employees));
  await mainMenu();
};

const addDepartment = async () => {
  const { name } = await prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Enter the name of the department:',
    },
  ]);
  await DepartmentService.addDepartment(name);
  console.log('Department added successfully!');
  await mainMenu();
};

const addRole = async () => {
  const { title, salary, departmentId } = await prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Enter the title of the role:',
    },
    {
      type: 'input',
      name: 'salary',
      message: 'Enter the salary for the role:',
    },
    {
      type: 'input',
      name: 'departmentId',
      message: 'Enter the department id for the role:',
    },
  ]);
  await RoleService.addRole(title, salary, departmentId);
  await mainMenu();
};

const addEmployee = async () => {
  // Implement the prompt for adding an employee
  // ...
  await mainMenu();
};

const updateEmployeeRole = async () => {
  // Implement the prompt for updating an employee's role
  // ...
  await mainMenu();
};

const mainMenu = async () => {
  const choices = [
    'View all departments',
    'View all roles',
    'View all employees',
    'Add a department',
    'Add a role',
    'Add an employee',
    'Update an employee role',
  ];

  const { action } = await prompt([
    {
      type: 'list',
      name: 'action',
      message: 'What would you like to do?',
      choices,
    },
  ]);

  await executeAction(action);
};

mainMenu();