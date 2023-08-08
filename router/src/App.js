import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path:'/',
    element: <p>HOME</p>,
    errorElement: <p>error</p>
  },
  {
    path:'/aa',
    element: <p>aa</p>
  }
]);

function App() {
  return (
    <RouterProvider router = {router} >
      APP
    </RouterProvider>
  );
}

export default App;
