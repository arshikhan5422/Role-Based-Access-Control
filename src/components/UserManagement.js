import React, { useState } from "react";
import { TextField, Button, Card, CardContent, Grid, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import './UserManagement.css';  // Import custom CSS for additional styles

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ username: "", email: "", role: "" });

  // Function to handle adding new user
  const addUser = () => {
    setUsers([...users, newUser]);
    setNewUser({ username: "", email: "", role: "" });
  };

  return (
    <div className="user-management">
      <Typography variant="h4" gutterBottom>User Management</Typography>

      {/* Add User Form */}
      <Card variant="outlined" className="form-card">
        <CardContent>
          <Typography variant="h6">Add New User</Typography>
          <form onSubmit={(e) => { e.preventDefault(); addUser(); }}>

            <TextField
              label="Username"
              variant="outlined"
              fullWidth
              value={newUser.username}
              onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
              required
              margin="normal"
            />

            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              value={newUser.email}
              onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
              required
              margin="normal"
            />

            <TextField
              label="Role"
              variant="outlined"
              fullWidth
              value={newUser.role}
              onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
              required
              margin="normal"
            />

            <Button variant="contained" color="success" type="submit" fullWidth>
              Add User
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* User List Table */}
      <Grid container spacing={3} className="table-container">
        <Grid item xs={12}>
          <Typography variant="h6">User List</Typography>
          <Card variant="outlined">
            <CardContent>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Username</TableCell>
                      <TableCell>Email</TableCell>
                      <TableCell>Role</TableCell>
                      <TableCell>Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {users.map((user, index) => (
                      <TableRow key={index}>
                        <TableCell>{user.username}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.role}</TableCell>
                        <TableCell>
                          <Button variant="outlined" color="warning" style={{ marginRight: '8px' }}>Edit</Button>
                          <Button variant="outlined" color="error">Delete</Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default UserManagement;
