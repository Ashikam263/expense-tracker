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
import Dashboard from '../app/Dashboard/page';

export default function Home() {
  return (
    <div>
      <Navbar />
      <ResponsiveDrawer />

      <div style={{marginLeft: '180px', padding: '16px', marginTop: '64px' }}>
        <Grid container spacing={2} sx={{ margin: '0 -8px' }}>
          <Grid item xs={12} sm={6} md={2}>
            <Card sx={{ minWidth: 200 }}>
              <CardContent>
                <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
                  Current Balance
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  adjective
                </Typography>
                <Typography variant="body2">
                  well meaning and kindly.
                  <br />
                  {'"a benevolent smile"'}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Card sx={{ minWidth: 200 }}>
              <CardContent>
                <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
                  Total Income
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  adjective
                </Typography>
                <Typography variant="body2">
                  well meaning and kindly.
                  <br />
                  {'"a benevolent smile"'}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Card sx={{ minWidth: 200 }}>
              <CardContent>
                <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
                  Total Expense
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  adjective
                </Typography>
                <Typography variant="body2">
                  well meaning and kindly.
                  <br />
                  {'"a benevolent smile"'}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
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
