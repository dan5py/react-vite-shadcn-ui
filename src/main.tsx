import React from 'react';
import ReactDOM from 'react-dom/client';
import { DropdownMenuTrigger, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import App from './App.tsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import '@/styles/globals.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/option1",
    element: <h1>option 1</h1>
  },
  {
    path: "/option2",
    element: <h1>option 2</h1>
  },
  {
    path: "/option3",
    element: <h1>option 3</h1>
  }
]);

const Header = () => {
  return (
    <header className="bg-black text-white py-4 px-6 flex items-center justify-between">
    <div className="text-lg font-bold">Buildtracker</div>
    <nav className="flex space-x-4">
      <DropdownMenu>
        <a className="hover:underline" href="/">
            Home
          </a>
          <a className="hover:underline" href="/option1">
            Option 1
          </a>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <a className="hover:underline" href="/option2">
            Option 2
          </a>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" side="left">
          <DropdownMenuItem>Dropdown Item 1</DropdownMenuItem>
          <DropdownMenuItem>Dropdown Item 2</DropdownMenuItem>
          <DropdownMenuItem>Dropdown Item 3</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  </header>
  )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <App /> */}
    <Header />
    <RouterProvider router={router} />
  </React.StrictMode>
);
