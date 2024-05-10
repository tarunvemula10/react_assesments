import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import LoginForm from './components/LoginForm'
import Home from './components/Operations/Home'
import Navbar from './components/Navbar'

function App() {

  const loginForm = ()=> {
    return <div className="app">
      <div>
        <h1>Login</h1>
        <LoginForm/>
      </div>
    </div>
  }

  const router = createBrowserRouter([
    {
      path: '/',
      Component: loginForm
    }, {
      path: '/home',
      element: <><Navbar/><Home message='This is Home Page'/></>
    }, {
      path: '/about',
      element: <><Navbar/><Home message='This is About Page'/></>
    }, {
      path: '/contact',
      element: <><Navbar/><Home message='This is Contact Page'/></>
    }
  ])

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
