import axios from 'axios';
import React,{useState} from 'react'


function App() {

const [data,setData]=useState([]);
  return (
    <div className="App">
      <h1> Fetch data from an api in react </h1>
<button onClick={
  ()=>{
  axios.get('https://jsonplaceholder.typicode.com/posts').then((response)=>
  {
    setData(response.data);
    console.log(response.data);
  })
}}>Click me</button>

{
data.map((obj,index)=>{
  return(
    <div>
      <h1>{index+1}</h1>
      <h1>{obj.title}</h1>
      <h4>{obj.body}</h4>
    </div>
  )
})
}

    </div>
  );
}


export default App;
