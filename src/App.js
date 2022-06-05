import React from 'react';
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import MainPanel from './core/MainPanel';

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <MainPanel />
      </ThemeProvider>

    </StyledEngineProvider>
  );
}

export default App;
