import React, { useState, useEffect } from "react";
import { getUsers, addUser, updateUser, deleteUser } from '../services/api';  // Import API functions
import './UserManagement.css';  // Import CSS for styling

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: "", email: "", role: "", status: "Active" });
  const [editingUser, setEditingUser] = useState(null);  // Track which user is being edited
  const [errorMessage, setErrorMessage] = useState("");

  // Fetch users from the API
  useEffect(() => {
    getUsers()
      .then((data) => setUsers(data))
      .catch((error) => console.log("Error fetching users: ", error));
  }, []);

  // Function to handle adding or updating a user
  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { ...newUser };

    if (editingUser) {
      // Update user
      updateUser(editingUser.id, userData)
        .then((updatedUser) => {
          setUsers(users.map((user) => (user.id === editingUser.id ? updatedUser : user)));
          setNewUser({ name: "", email: "", role: "", status: "Active" });
          setEditingUser(null);
        })
        .catch((error) => {
          console.log("Error updating user: ", error);
          alert("There was an issue updating the user.");
        });
    } else {
      // Add new user
      addUser(userData)
        .then((addedUser) => {
          setUsers([...users, addedUser]);
          setNewUser({ name: "", email: "", role: "", status: "Active" });
        })
        .catch((error) => {
          console.log("Error adding user: ", error);
          alert("There was an issue adding the user.");
        });
    }
  };

  // Function to handle deleting a user
  const handleDelete = (id) => {
    deleteUser(id)
      .then(() => {
        setUsers(users.filter((user) => user.id !== id));
      })
      .catch((error) => {
        console.log("Error deleting user: ", error);
        alert("There was an issue deleting the user.");
      });
  };

  return (
    <div className="user-management">
      <h2>User Management</h2>

      {/* Error message */}
      {errorMessage && <div className="error-message">{errorMessage}</div>}

      {/* Add/Edit User Form */}
      <div className="form-container">
        <h3>{editingUser ? "Edit User" : "Add New User"}</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Role"
            value={newUser.role}
            onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
            required
          />
          <select
            value={newUser.status}
            onChange={(e) => setNewUser({ ...newUser, status: e.target.value })}
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
          <button type="submit" className="add-btn">{editingUser ? "Update User" : "Add User"}</button>
        </form>
      </div>

      {/* User List Table */}
      <div className="table-container">
        <h3>User List</h3>
        <table className="user-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>{user.status}</td>
                <td>
                  <button className="edit-btn" onClick={() => setEditingUser(user)}>Edit</button>
                  <button className="delete-btn" onClick={() => handleDelete(user.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;
