import axios from 'axios';
import './App.css'

function App() {

  const api = axios.create({
    baseURL : `http://localhost:8080/data`
  })
  api.get('/getall').then(res => console.log(res.data))

  return (
    <div></div>
  )
}

export default App
