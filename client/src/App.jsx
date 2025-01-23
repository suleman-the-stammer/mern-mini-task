import "./App.css";
import Header from "./components/Header.jsx";
import Blog from "./pages/Blog.jsx";
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter ([
  {
    path: '/',
    element:<>  <Header /> <Blog/> </> 
  },
  {
    path: '/blog',
    element:<>  <Header /> <Blog/> </> 
  },
  {
    path: '/login',
    element:<>  <Header /> <Login/> </> 
  },
  {
    path: '/register',
    element:<>  <Header /> <Register/> </>  
  },
  {
    path: '/logout',
    element: <>  <Header /> <Login/> </> 
  },
])
function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
