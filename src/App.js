import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container, Box, CssBaseline, Drawer, List, ListItem, ListItemText } from '@mui/material';
import UserManagement from './components/UserManagement';
import RoleManagement from './components/RoleManagement';
import PermissionsManagement from './components/PermissionsManagement';

function App() {
  return (
    <Router>
      <CssBaseline />
      <Box sx={{ display: 'flex' }}>
        {/* Sidebar */}
        <Drawer
          sx={{
            width: 240,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: 240,
              boxSizing: 'border-box',
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <List>
            <ListItem button component="a" href="/users">
              <ListItemText primary="User Management" />
            </ListItem>
            <ListItem button component="a" href="/roles">
              <ListItemText primary="Role Management" />
            </ListItem>
            <ListItem button component="a" href="/permissions">
              <ListItemText primary="Permissions Management" />
            </ListItem>
          </List>
        </Drawer>

        {/* Main Content */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            bgcolor: '#f5f5f5',
            padding: 3,
            marginLeft: 24, // space for the sidebar
          }}
        >
          <Routes>
            <Route path="/users" element={<UserManagement />} />
            <Route path="/roles" element={<RoleManagement />} />
            <Route path="/permissions" element={<PermissionsManagement />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
