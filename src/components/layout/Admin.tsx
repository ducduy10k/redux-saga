import { Box, createTheme } from '@mui/material';
import * as React from 'react';

export interface IAdminLayoutProps {}

export function AdminLayout(props: IAdminLayoutProps) {
  const theme = createTheme();

  return (
    <Box
      className="grid"
      style={{
        gridTemplateRows: 'auto 1fr',
        gridAutoColumns: '300px 1fr',
        gridTemplateAreas: `"header header" "sidebar main"`,
        minHeight: '100vh',
      }}
    >
      <Box
        style={{
          gridArea: 'header',
          borderBottom: `1px solid ${theme.palette.divider}`,
        }}
        className="h-[60px] md:h-[65px]"
      >
        Header
      </Box>
      <Box
        style={{
          gridArea: 'sidebar',
          borderRight: `1px solid ${theme.palette.divider}`,
        }}
      >
        Sidebar
      </Box>
      <Box
        style={{
          gridArea: 'main',
        }}
      >
        Main
      </Box>
    </Box>
  );
}
