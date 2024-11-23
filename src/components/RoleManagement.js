import React, { useState } from "react";
import './RoleManagement.css';  // Import CSS for styling

const RoleManagement = () => {
  const [roles, setRoles] = useState([]);
  const [newRole, setNewRole] = useState({ name: "", permissions: [] });

  // Function to handle adding a new role
  const addRole = () => {
    setRoles([...roles, newRole]);  // Add new role to the list
    setNewRole({ name: "", permissions: [] });  // Reset the form
  };

  return (
    <div className="role-management">
      <h2>Role Management</h2>

      {/* Add Role Form */}
      <div className="form-container">
        <h3>Add New Role</h3>
        <form onSubmit={(e) => { e.preventDefault(); addRole(); }}>
          <input
            type="text"
            placeholder="Role Name"
            value={newRole.name}
            onChange={(e) => setNewRole({ ...newRole, name: e.target.value })}
            required
          />
          <select
            multiple
            value={newRole.permissions}
            onChange={(e) =>
              setNewRole({
                ...newRole,
                permissions: Array.from(e.target.selectedOptions, option => option.value)
              })
            }
          >
            <option value="Read">Read</option>
            <option value="Write">Write</option>
            <option value="Delete">Delete</option>
          </select>
          <button type="submit">Add Role</button>
        </form>
      </div>

      {/* Role List Table */}
      <div className="table-container">
        <h3>Role List</h3>
        <table className="role-table">
          <thead>
            <tr>
              <th>Role Name</th>
              <th>Permissions</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {roles.map((role, index) => (
              <tr key={index}>
                <td>{role.name}</td>
                <td>{role.permissions.join(", ")}</td>
                <td>
                  <button>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RoleManagement;
