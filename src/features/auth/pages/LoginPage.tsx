import { useSelect } from '@mui/base';
import { Box, Button, Paper, Typography } from '@mui/material';
import { useAppDispatch } from 'app/hooks';
import * as React from 'react';
import { authActions } from '../authSlice';
export interface ILoginPageProps {}

export default function LoginPage(props: ILoginPageProps) {
  const dispatch = useAppDispatch();
  const handleLoginClick = () => {
    dispatch(
      authActions.login({
        username: '',
        password: '',
      })
    );
  };

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
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleLoginClick}
          >
            Fake login
          </Button>
        </Box>
      </Paper>
    </div>
  );
}
