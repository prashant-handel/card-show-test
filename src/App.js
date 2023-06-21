import './App.css';
import { useState, useEffect } from 'react';
import ShowCards from './pages/ShowCards';
import Card from './components/Card';

export default function App() {
  useEffect(()=>getData,[])
  const [data, setData] = useState([]);
  let getData = async () => {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts")
    let dataGot = await response.json();
    setData(dataGot);
    // console.log(dataGot);
  }
  return (
    <div className="App">
      <Card data = {data}/>
      <ShowCards data= {data} />
    </div>
  );
}
