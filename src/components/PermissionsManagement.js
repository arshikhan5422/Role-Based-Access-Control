import React, { useState } from "react";
import './PermissionsManagement.css';  // Import CSS for styling

const PermissionManagement = () => {
  const [permissions, setPermissions] = useState([]);
  const [newPermission, setNewPermission] = useState({ user: "", role: "", permission: "" });

  // Function to handle adding new permissions
  const addPermission = () => {
    setPermissions([...permissions, newPermission]);
    setNewPermission({ user: "", role: "", permission: "" });
  };

  return (
    <div className="permission-management">
      <h2>Permission Management</h2>

      {/* Add Permission Form */}
      <div className="form-container">
        <h3>Assign New Permission</h3>
        <form onSubmit={(e) => { e.preventDefault(); addPermission(); }}>
          <input
            type="text"
            placeholder="User Name"
            value={newPermission.user}
            onChange={(e) => setNewPermission({ ...newPermission, user: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Role"
            value={newPermission.role}
            onChange={(e) => setNewPermission({ ...newPermission, role: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Permission"
            value={newPermission.permission}
            onChange={(e) => setNewPermission({ ...newPermission, permission: e.target.value })}
            required
          />
          <button type="submit">Assign Permission</button>
        </form>
      </div>

      {/* Permission List Table */}
      <div className="table-container">
        <h3>Permissions List</h3>
        <table className="permission-table">
          <thead>
            <tr>
              <th>User</th>
              <th>Role</th>
              <th>Permission</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {permissions.map((perm, index) => (
              <tr key={index}>
                <td>{perm.user}</td>
                <td>{perm.role}</td>
                <td>{perm.permission}</td>
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

export default PermissionManagement;
