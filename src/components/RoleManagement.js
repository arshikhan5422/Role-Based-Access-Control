import React, { useState } from "react";
import { TextField, Button, MenuItem, Select, InputLabel, FormControl, Card, CardContent, Grid, Typography } from '@mui/material';
import './RoleManagement.css';  // Import custom CSS for additional styles

const RoleManagement = () => {
  const [roles, setRoles] = useState([]);
  const [newRole, setNewRole] = useState({ name: "", permissions: [] });

  // Function to handle adding a new role
  const addRole = () => {
    setRoles([...roles, newRole]);
    setNewRole({ name: "", permissions: [] });
  };

  return (
    <div className="role-management">
      <Typography variant="h4" gutterBottom>Role Management</Typography>

      {/* Add Role Form */}
      <Card variant="outlined" className="form-card">
        <CardContent>
          <Typography variant="h6">Add New Role</Typography>
          <form onSubmit={(e) => { e.preventDefault(); addRole(); }}>

            <TextField
              label="Role Name"
              variant="outlined"
              fullWidth
              value={newRole.name}
              onChange={(e) => setNewRole({ ...newRole, name: e.target.value })}
              required
              margin="normal"
            />

            <FormControl fullWidth margin="normal">
              <InputLabel>Permissions</InputLabel>
              <Select
                multiple
                value={newRole.permissions}
                onChange={(e) => setNewRole({ ...newRole, permissions: e.target.value })}
                label="Permissions"
              >
                <MenuItem value="Read">Read</MenuItem>
                <MenuItem value="Write">Write</MenuItem>
                <MenuItem value="Delete">Delete</MenuItem>
              </Select>
            </FormControl>

            <Button variant="contained" color="primary" type="submit" fullWidth>
              Add Role
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Role List Table */}
      <Grid container spacing={3} className="table-container">
        <Grid item xs={12}>
          <Typography variant="h6">Role List</Typography>
          <Card variant="outlined">
            <CardContent>
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
                        <Button variant="outlined" color="secondary">Edit</Button>
                        <Button variant="outlined" color="error" style={{ marginLeft: '8px' }}>Delete</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default RoleManagement;
