import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import AdbIcon from '@mui/icons-material/Adb';
import SearchIcon from '@mui/icons-material/Search';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import CreateIcon from '@mui/icons-material/Create';
import Link from 'next/link';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';



const pages = [
    { label: 'Create', icon: <AddCircleIcon /> },
    { label: 'Notifications', icon: <NotificationsActiveIcon/> },
    { label: 'Search', icon: <SearchIcon /> },
  ];

  function ResponsiveAppBar() {
    const drawerWidth = 200;
  
    return (
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: '240px' },
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: 'white', // Set background color to white
          color: 'black', // Set text color to black
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'Arial',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Project Expense Tracking<br /> Software
            </Typography>
  
            <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              LOGO
            </Typography>
  
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                flexGrow: 1,
              }}
            >
              {pages.map((page) => (
                <Link href="/Dashboard" key={page.label}>
                  <IconButton
                    key={page.label}
                    onClick={() => console.log(`Clicked ${page.label}`)}
                    sx={{ color: 'purple' }} // Set icon color to black
                  >
                    {page.icon}
                  </IconButton>
                </Link>
              ))}
            <h1>|</h1>
            <h2>David</h2>
            <Avatar alt="Corpse" src="/corpse-logo.jpg" />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    );
  }
  
  export default ResponsiveAppBar;

// import React from 'react'
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
// import Avatar from '@mui/material/Avatar';
// import SearchIcon from '@mui/icons-material/Search';
// import AddCircleIcon from '@mui/icons-material/AddCircle';
// import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

// export const Navbar = () => {
//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static">
//         <Toolbar>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             Project Expense Tracking <br/> Software
//           </Typography>
//           <div className='flex justify-between items-center px-4 py-2 '>
//             <span color='inherit'> <SearchIcon/></span>
//             <span color='inherit'><AddCircleIcon/></span>
//             <span color='inherit'><NotificationsActiveIcon/></span>
//             <span className=''>|</span>
//             <span className=''>David</span>
//           </div>
//           <Avatar alt="Corpse" src="/corpse-logo.jpg" />
//         </Toolbar>
//       </AppBar>
//     </Box>
//   )
// }
