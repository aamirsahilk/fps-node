const { messages } = require('../../middleware/validators/Schema/coustomerSchema');
const { userroles } = require('../../model'); // Import the Sequelize UserRoles model
const errorResponce = require('../../responses/ErrorResponce');
const successResponce = require('../../responses/successResponce');
const UserRoles = userroles
// Controller methods for CRUD operations

// Get all user roles
exports.getAllUserRoles = async (req, res) => {
  try {
    const userRoles = await UserRoles.findAll();
    successResponce(res , "User roles fetched successfully" , userRoles , 200)
  } catch (error) {
    errorResponce(res , 500 , "Internal Server Error" , error)
    console.error(error);
  }
};

// Create a new user role
exports.createUserRole = async (req, res) => {
  const { role_name, role_description } = req.body;
  try {
    const newUserRole = await UserRoles.create({ role_name, role_description });
    res.json(newUserRole);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update a user role by ID
exports.updateUserRole = async (req, res) => {
  const roleId = req.params.id;
  const { role_name, role_description } = req.body;
  try {
    const updatedUserRole = await UserRoles.update(
      { role_name, role_description },
      { where: { role_id: roleId } }
    );
    res.json(updatedUserRole);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
    
// Delete a user role by ID
exports.deleteUserRole = async (req, res) => {
  const roleId = req.params.id;
  try {
    await UserRoles.destroy({ where: { role_id: roleId } });
    res.json({ message: 'User role deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
