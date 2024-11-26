import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
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
  IconButton, 
  Button
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import UserManagement from './components/UserManagement';
import RoleManagement from './components/RoleManagement';
import PermissionsManagement from './components/PermissionsManagement';

const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ textAlign: 'center', paddingTop: 5 }}>
      <Typography variant="h4" sx={{ marginBottom: 2 }}>
        Welcome to the Role-Based Access Control System
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: 4 }}>
        Click below to manage roles, permissions, and users.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate("/roles")}
        sx={{ padding: '10px 20px', fontSize: '16px' }}
      >
        Start
      </Button>
    </Box>
  );
};

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ paddingTop: 14 }}>
      <List>
        <ListItem 
          button 
          component={Link} 
          to="/users" 
          sx={{ 
            backgroundColor: '#e0f7fa', 
            '&:hover': { backgroundColor: '#b2ebf2' },
            borderRadius: '8px', 
            padding: '10px 20px', 
            marginBottom: '10px' 
          }}
        >
          <ListItemText primary="User Management" />
        </ListItem>

        <ListItem 
          button 
          component={Link} 
          to="/roles" 
          sx={{ 
            backgroundColor: '#e0f7fa', 
            '&:hover': { backgroundColor: '#b2ebf2' },
            borderRadius: '8px', 
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
            backgroundColor: '#e0f7fa', 
            '&:hover': { backgroundColor: '#b2ebf2' },
            borderRadius: '8px', 
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
                fontWeight: 'bold' 
              }}
            >
              Role-Based Access Control
            </Typography>
          </Toolbar>
        </AppBar>

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

        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
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

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            bgcolor: '#f5f5f5',
            p: 3,
            marginLeft: { sm: 30 },
          }}
        >
          <Toolbar />
          <Routes>
            <Route path="/users" element={<UserManagement />} />
            <Route path="/roles" element={<RoleManagement />} />
            <Route path="/permissions" element={<PermissionsManagement />} />
            <Route path="/" element={<WelcomePage />} /> {/* Welcome page with Start button */}
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
