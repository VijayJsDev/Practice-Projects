import Create from "./components/Create";
import Home from "./components/Home";
import NavigationBar from "./components/NavigationBar";
import Posts from "./components/Posts";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Update from "./components/Update.";
import Read from "./components/Read";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/create", element: <Create /> },
    { path: "/update/:id", element: <Update /> },
    { path: "/read/:id", element: <Read /> },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
