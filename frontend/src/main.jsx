import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from "react-router-dom";

//Pages
import AddMemory from './routes/AddMemory/AddMemory.jsx';
import Memory from './routes/Memory/Memory.jsx';
import Home from './routes/Home/Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/add-memory", element: <AddMemory /> },
      { path: "/memories/:id", element: <Memory /> },
    ],
  },
],
  { basename: "/memories" }
);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
