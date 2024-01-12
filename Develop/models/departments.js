const connection = require("../db/connection");

class Department {
  static async getAllDepartments() {
    try {
      const [rows] = await connection.promise().query("SELECT * FROM department");
      return rows;
    } catch (error) {
      throw error;
    }
  }

  static async addDepartment(name) {
    try {
      const [result] = await connection
        .promise()
        .query("INSERT INTO department (name) VALUES (?)", [name]);
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = Department;