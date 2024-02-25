import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Counter from 'src/pages/counter/index.jsx';
import List from 'src/pages/list/index.jsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Counter />,
  },
  {
    path: '/list',
    element: <List />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
