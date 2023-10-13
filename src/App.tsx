import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/components/theme-provider';
import Layout from './components/Layout';
import { Theme } from '@radix-ui/themes';
import { sidebarNavItems } from './components/nav-items';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function App() {
  return (
    <ThemeProvider defaultTheme='light' storageKey='vite-ui-theme'>
      <Theme>
        <QueryClientProvider client={queryClient}>
          <Router>
            <Layout>
              <Routes>
                {sidebarNavItems.map((item, index) => (
                  <Route
                    key={index}
                    path={item.href}
                    element={React.createElement(item.component)}
                  />
                ))}
              </Routes>
            </Layout>
          </Router>{' '}
        </QueryClientProvider>
      </Theme>
    </ThemeProvider>
  );
}
