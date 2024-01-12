const Department = require('../models/department');

class DepartmentService {
  static async getAllDepartments() {
    try {
      const [rows] = await Department.getAllDepartments();
      return rows;
    } catch (error) {
      throw error;
    }
  }

  static async addDepartment(name) {
    try {
      await Department.addDepartment(name);
      console.log(`Department ${name} added successfully.`);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = DepartmentService;