import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Videos from './pages/Videos';
import NotFound from './pages/NotFound';
import Root from './pages/Root';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Root/>,
    errorElement: <NotFound/>,
    children: [{index: true, element:<Home/>},
    {path:'/videos',element:<Videos/>}]
  }
]);

function App() {
  return (
    <RouterProvider router = {router} />
  );
}

export default App;
