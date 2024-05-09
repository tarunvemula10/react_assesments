import axios from 'axios';
import './App.css'
import { useEffect, useState } from 'react';

function App() {

  const [data, setData] = useState([])

  useEffect(()=> {
    axios.get('http://localhost:8080/data/getall')
    .then(res => setData(res.data))
    .catch(err => console.log(err))
    console.log(data)
  }, [])

  return (
    <div>
      <ul>
        {data.map((element,index)=> {
          <li key={index}>{`${element.name}, ${element.marks}`}</li>
        })}
      </ul>
    </div>
  )
}

export default App
