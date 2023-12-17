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

  const icons = [<DashboardIcon />,<CreditScoreIcon />,<AddCardIcon />,<PersonIcon />,<NotificationsActiveIcon />,<SettingsIcon />];
  const drawerItems = [
    { label: 'Dashboard', index: 0 },
    { label: 'Transactions', index: 1 },
    { label: 'Cards', index: 2 },
    { label: 'Account', index: 3 },
    { label: 'Notifications', index: 4 },
    { label: 'Settings', index: 5 },
  ];

  const drawer = (
    <div className='flex flex-col h-screen bg-violet-900 mt-0'>
      <Button href='/' className='flex flex-row justify-center text-xl text-white mt-0'><NotificationsIcon sx={{ fontSize: 60 }}/> EXTRACK</Button>
      <Divider />
      <List>
      <ListItem disablePadding>
        <a href={`/${drawerItems[0].label}`} className='text-white'>
          <ListItemButton>
            <ListItemIcon>{icons[0]}</ListItemIcon>
            <ListItemText primary={drawerItems[0].label} />
          </ListItemButton>
        </a>
      </ListItem>
      <ListItem disablePadding>
        <a href={`/${drawerItems[1].label}`} className='text-white'>
          <ListItemButton>
            <ListItemIcon>{icons[1]}</ListItemIcon>
            <ListItemText primary={drawerItems[1].label} />
          </ListItemButton>
        </a>
      </ListItem>
      <ListItem disablePadding>
        <a href={`/${drawerItems[2].label}`} className='text-white'>
          <ListItemButton>
            <ListItemIcon>{icons[2]}</ListItemIcon>
            <ListItemText primary={drawerItems[2].label} />
          </ListItemButton>
        </a>
      </ListItem>
      <ListItem disablePadding>
        <a href={`/${drawerItems[3].label}`} className='text-white'>
          <ListItemButton>
            <ListItemIcon>{icons[3]}</ListItemIcon>
            <ListItemText primary={drawerItems[3].label} />
          </ListItemButton>
        </a>
      </ListItem>
      <ListItem disablePadding>
        <a href={`/${drawerItems[4].label}`} className='text-white'>
          <ListItemButton>
            <ListItemIcon>{icons[4]}</ListItemIcon>
            <ListItemText primary={drawerItems[4].label} />
          </ListItemButton>
        </a>
      </ListItem>
      <ListItem disablePadding>
        <a href={`/${drawerItems[5].label}`} className='text-white'>
          <ListItemButton>
            <ListItemIcon>{icons[5]}</ListItemIcon>
            <ListItemText primary={drawerItems[5].label} />
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