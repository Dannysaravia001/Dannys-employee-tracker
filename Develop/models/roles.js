const connection = require('../db/connection');

class Role {
  static async getAllRoles() {
    try {
      const [rows] = await connection.promise().query('SELECT * FROM role');
      return rows;
    } catch (error) {
      throw error;
    }
  }

  static async addRole(title, salary, departmentId) {
    try {
      const [result] = await connection
        .promise()
        .query('INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)', [title, salary, departmentId]);
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = Role;