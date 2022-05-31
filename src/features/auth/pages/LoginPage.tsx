import { Box, Button, Paper, Typography } from '@mui/material';
import * as React from 'react';
export interface ILoginPageProps {}

export default function LoginPage(props: ILoginPageProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <Paper elevation={1} style={{ padding: '1rem' }}>
        <Typography variant="h5" component="h1">
          Student Management
        </Typography>
        <Box mt={4}>
          <Button fullWidth variant="contained" color="primary">
            Fake login
          </Button>
        </Box>
      </Paper>
    </div>
  );
}
