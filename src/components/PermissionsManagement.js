import React, { useState } from "react";
import { TextField, Button, Grid, Card, CardContent, Typography } from '@mui/material';
import './PermissionsManagement.css';  // Import custom CSS for additional styles

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
      <Typography variant="h4" gutterBottom>Permission Management</Typography>

      {/* Add Permission Form */}
      <Card variant="outlined" className="form-card">
        <CardContent>
          <Typography variant="h6">Assign New Permission</Typography>
          <form onSubmit={(e) => { e.preventDefault(); addPermission(); }}>

            <TextField
              label="User Name"
              variant="outlined"
              fullWidth
              value={newPermission.user}
              onChange={(e) => setNewPermission({ ...newPermission, user: e.target.value })}
              required
              margin="normal"
            />

            <TextField
              label="Role"
              variant="outlined"
              fullWidth
              value={newPermission.role}
              onChange={(e) => setNewPermission({ ...newPermission, role: e.target.value })}
              required
              margin="normal"
            />

            <TextField
              label="Permission"
              variant="outlined"
              fullWidth
              value={newPermission.permission}
              onChange={(e) => setNewPermission({ ...newPermission, permission: e.target.value })}
              required
              margin="normal"
            />

            <Button variant="contained" color="primary" type="submit" fullWidth>
              Assign Permission
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Permissions List Table */}
      <Grid container spacing={3} className="table-container">
        <Grid item xs={12}>
          <Typography variant="h6">Permissions List</Typography>
          <Card variant="outlined">
            <CardContent>
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

export default PermissionManagement;
