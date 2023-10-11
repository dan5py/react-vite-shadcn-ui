import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/components/theme-provider';
import Layout from './components/Layout';
import { Theme } from '@radix-ui/themes';
import { sidebarNavItems } from './components/nav-items';

export default function App() {
  return (
    <ThemeProvider defaultTheme='light' storageKey='vite-ui-theme'>
      <Theme>
        <Router>
          <Layout>
            <Routes>
              {sidebarNavItems.map((item, index) => (
                <Route key={index} path={item.href} element={React.createElement(item.component)} />
              ))}
            </Routes>
          </Layout>
        </Router>
      </Theme>
    </ThemeProvider>
  );
}

// export default function App() {
//   return (
//     <Router>
//       <Layout>
//         <Routes>
//           {sidebarNavItems.map((item) => (
//             <Route key={item.href} path={item.href}>
//               {item.component}
//             </Route>
//           ))}
//         </Routes>
//       </Layout>
//     </Router>
//   );
// }
