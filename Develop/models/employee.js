const connection = require('../db/connection');

class Employee {
  static async getAllEmployees() {
    try {
      const [rows] = await connection.promise().query('SELECT * FROM employee');
      return rows;
    } catch (error) {
      throw error;
    }
  }

  static async addEmployee(firstName, lastName, roleId, managerId) {
    try {
      const [result] = await connection
        .promise()
        .query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', [firstName, lastName, roleId, managerId]);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async updateEmployeeRole(employeeId, roleId) {
    try {
      const [result] = await connection
        .promise()
        .query('UPDATE employee SET role_id = ? WHERE id = ?', [roleId, employeeId]);
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = Employee;
