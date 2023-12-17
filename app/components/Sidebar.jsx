import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Link from 'next/link';
import NotificationsIcon from '@mui/icons-material/Notifications';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import AddCardIcon from '@mui/icons-material/AddCard';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SettingsIcon from '@mui/icons-material/Settings';

const drawerWidth = 200;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className='flex flex-col h-screen bg-violet-900 mt-0'>
      <Button href='/' className='flex flex-row justify-center text-xl text-white mt-0'><NotificationsIcon sx={{ fontSize: 60 }}/> EXTRACK</Button>
      <Divider />
      <List>
      <ListItem disablePadding>
        <a href="/Dashboard" className='text-white'>
          <ListItemButton>
            <ListItemIcon><DashboardIcon className= 'text-white' /></ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
        </a>
      </ListItem>

      <ListItem disablePadding>
        <a href="/Transactions" className='text-white'>
          <ListItemButton>
            <ListItemIcon><CreditScoreIcon className= 'text-white' /></ListItemIcon>
            <ListItemText primary="Transactions" />
          </ListItemButton>
        </a>
      </ListItem>

      <ListItem disablePadding>
        <a href="/Cards" className='text-white'>
          <ListItemButton>
            <ListItemIcon ><AddCardIcon className= 'text-white' /></ListItemIcon>
            <ListItemText primary="Cards" />
          </ListItemButton>
        </a>
      </ListItem>

      <ListItem disablePadding>
        <a href="/Account" className='text-white'>
          <ListItemButton>
            <ListItemIcon><PersonIcon className= 'text-white' /></ListItemIcon>
            <ListItemText primary="Account" />
          </ListItemButton>
        </a>
      </ListItem>

      <ListItem disablePadding>
        <a href="/Notifications" className='text-white'>
          <ListItemButton>
            <ListItemIcon><NotificationsActiveIcon className= 'text-white' /></ListItemIcon>
            <ListItemText primary="Notifications" />
          </ListItemButton>
        </a>
      </ListItem>

      <ListItem disablePadding>
        <a href="/Settings" className='text-white'>
          <ListItemButton>
            <ListItemIcon><SettingsIcon className= 'text-white' /></ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </a>
      </ListItem>
    </List>
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default ResponsiveDrawer;