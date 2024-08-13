import React from 'react';
import Homepage from './routes/homepage/Homepage';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Listpage from './routes/listpage/Listpage';
import Layout from './routes/layout/Layout';
import Singlepage from './routes/singlepage/Singlepage';
import Profilepage from './routes/profilepage/Profilepage';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Homepage />,
        },
        {
          path: "/Properties",
          element: <Listpage />,
        },
        {
          path: "/:id",
          element: <Singlepage />,
        },
        {
          path: "/profile",
          element: <Profilepage />,
        }
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
