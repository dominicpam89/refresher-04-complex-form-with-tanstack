import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import QueryClientWrapper from '@/lib/query-client-provider.ts';
import ThemeContextProvider from './context/ThemeContext.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientWrapper>
      <ThemeContextProvider defaultTheme="dark">
        <App />
      </ThemeContextProvider>
    </QueryClientWrapper>
  </StrictMode>
);
