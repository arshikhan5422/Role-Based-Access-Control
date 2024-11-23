import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { 
  Container, 
  Box, 
  CssBaseline, 
  Drawer, 
  List, 
  ListItem, 
  ListItemText, 
  AppBar, 
  Toolbar, 
  Typography, 
  IconButton 
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import UserManagement from './components/UserManagement';
import RoleManagement from './components/RoleManagement';
import PermissionsManagement from './components/PermissionsManagement';

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ paddingTop: 14 }}>  {/* Padding to move items down */}
      <List>
        <ListItem 
          button 
          component={Link} 
          to="/users" 
          sx={{ 
            backgroundColor: '#e0f7fa',  // Light cyan background for all buttons
            '&:hover': { backgroundColor: '#b2ebf2' }, // Slightly darker cyan on hover
            borderRadius: '8px', // Rounded corners
            padding: '10px 20px', // Padding for better click area
            marginBottom: '10px' // Space between buttons
          }}
        >
          <ListItemText primary="User Management" />
        </ListItem>

        <ListItem 
          button 
          component={Link} 
          to="/roles" 
          sx={{ 
            backgroundColor: '#e0f7fa',  // Same light cyan background
            '&:hover': { backgroundColor: '#b2ebf2' }, // Slightly darker cyan on hover
            borderRadius: '8px', // Rounded corners
            padding: '10px 20px',
            marginBottom: '10px'
          }}
        >
          <ListItemText primary="Role Management" />
        </ListItem>

        <ListItem 
          button 
          component={Link} 
          to="/permissions" 
          sx={{ 
            backgroundColor: '#e0f7fa',  // Same light cyan background
            '&:hover': { backgroundColor: '#b2ebf2' }, // Slightly darker cyan on hover
            borderRadius: '8px', // Rounded corners
            padding: '10px 20px',
            marginBottom: '10px'
          }}
        >
          <ListItemText primary="Permissions Management" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Router>
      <CssBaseline />
      <Box sx={{ display: 'flex' }}>
        {/* AppBar for Mobile View */}
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography 
              variant="h6" 
              noWrap 
              component="div" 
              sx={{ 
                flexGrow: 1, 
                textAlign: 'center',
                fontWeight: 'bold' // Make the text bold
              }}
            >
              Role-Based Access Control
            </Typography>
          </Toolbar>
        </AppBar>

        {/* Permanent Drawer for Desktop */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              width: 240,
              boxSizing: 'border-box',
            },
          }}
          open
        >
          {drawer}
        </Drawer>

        {/* Temporary Drawer for Mobile */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              width: 240,
              boxSizing: 'border-box',
            },
          }}
        >
          {drawer}
        </Drawer>

        {/* Main Content */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            bgcolor: '#f5f5f5',
            p: 3,
            marginLeft: { sm: 30 }, // Sidebar space for desktop
          }}
        >
          <Toolbar /> {/* To offset the AppBar height */}
          <Routes>
            <Route path="/users" element={<UserManagement />} />
            <Route path="/roles" element={<RoleManagement />} />
            <Route path="/permissions" element={<PermissionsManagement />} />
            <Route path="/" element={<Typography variant="h5">Welcome to the RBAC System!</Typography>} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
