import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css'
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element : <Login/>
    }, {
      path: '/register',
      element: <Register/>
    }, {
      path: '/home',
      element: <Home/>
    }
  ])

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App;