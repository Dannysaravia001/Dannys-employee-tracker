const Role = require('../models/role');

class RoleService {
  static async getAllRoles() {
    try {
      const [rows] = await Role.getAllRoles();
      return rows;
    } catch (error) {
      throw error;
    }
  }

  static async addRole(title, salary, departmentId) {
    try {
      await Role.addRole(title, salary, departmentId);
      console.log(`Role ${title} added successfully.`);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = RoleService;
