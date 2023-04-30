import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
 import Home from "./Home";
 import Service from "./Service";
 import About from "./About";
  
  function Routs(){
  const router = createBrowserRouter([
    {
      path: "/",
      element:<Home/>,
    },
    {
      path: "service",
      element:<Service/>,
    },
    {
      path: "about",
      element:<About/>,
    },
  ]);
  return(
  <RouterProvider router={router} />
  )}
  export default Routs;