const Employee = require('../models/employee');

class EmployeeService {
  static async getAllEmployees() {
    try {
      const [rows] = await Employee.getAllEmployees();
      return rows;
    } catch (error) {
      throw error;
    }
  }

  static async addEmployee(firstName, lastName, roleId, managerId) {
    try {
      await Employee.addEmployee(firstName, lastName, roleId, managerId);
      console.log(`Employee ${firstName} ${lastName} added successfully.`);
    } catch (error) {
      throw error;
    }
  }

  static async updateEmployeeRole(employeeId, roleId) {
    try {
      await Employee.updateEmployeeRole(employeeId, roleId);
      console.log(`Employee role updated successfully.`);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = EmployeeService;