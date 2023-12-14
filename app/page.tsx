'use client';

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../app/components/Navbar';
import SideBar from '../app/components/Sidebar';
import { Grid } from '@mui/material';
import { Card } from '@mui/material';
import { CardContent } from '@mui/material';
import { Typography } from '@mui/material';
import { CardActions } from '@mui/material';
import { Button } from '@mui/material';
import ResponsiveDrawer from '../app/components/Sidebar';
// import {Dashboard, incomeTotal, expenseTotal, total} from '../app/Dashboard/page';
import Dashboard from '../app/Dashboard/page';


export default function Home() {
  return (
    <div>
      <Navbar />
      <ResponsiveDrawer />

      <div style={{marginLeft: '180px', padding: '16px', marginTop: '64px' }}>
        <Grid container spacing={2} sx={{ margin: '0 -8px' }}>
          <Grid item xs={12} sm={6} md={2}>
            <Card sx={{ minWidth: 180 }} className='bg-emerald-100 text-white'> 
              <CardContent>
                <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
                  Current Balance
                </Typography>
                <Typography sx={{ mb: 1.5, fontSize: 22 }} color="text.secondary">
                  {/* {total > 0 ? `+${total}` : total} */}
                  $8200
                </Typography>
                <Typography variant="body2" style={{ fontSize: 'larger', color: 'green' }}>
                  32%
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Card sx={{ minWidth: 180 }} className='bg-rose-100 '>
              <CardContent>
                <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
                  Total Income
                </Typography>
                <Typography sx={{ mb: 1.5,  fontSize: 22}} color="text.secondary">
                  {/* ${incomeTotal} */}
                  $1500
                </Typography>
                <Typography variant="body2" style={{ fontSize: 'larger', color: 'green' }}>
                  18%
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Card sx={{ minWidth: 180 }} className='bg-blue-100'>
              <CardContent>
                <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
                  Total Expense
                </Typography>
                <Typography sx={{ mb: 1.5,  fontSize: 22}} color="text.secondary">
                  {/* ${incomeTotal} */}
                  $1500
                </Typography>
                <Typography variant="body2" style={{ fontSize: 'larger', color: 'red' }}>
                  21%
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid container item xs={12} sm={6} md={1}>
            <Dashboard />
          </Grid>
        </Grid>
      </div>



    </div>
  );
}
