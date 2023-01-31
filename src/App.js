import {useEffect, useState} from 'react';
import './App.css';

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    // get API Implement
    const url = "https://jsonplaceholder.typicode.com/comments";

    fetch(url).then(response => response.json()).then(json => {
      console.log("json", json);
      setData(json);
    }).catch(e => {
       console.log("e", e)
    })
  }, [])

  // post & put API Implement
  const postPutEvent = () => {
    const data ={
      id: "def234",
      name: "Ridhdhi",
      mobile: "7686757510",
      designation: "developer",
      pin: "387650"
    }
     const url = data.id ? "https://jsonplaceholder.typicode.com/comments/" + data.id : "https://jsonplaceholder.typicode.com/comments";

     fetch(url, {
      method: data.id ? 'PUT' : 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(data)
     })
     .then(response => {
      console.log("response", response);
      if(response.state === 200) {
        alert("success");
      }
     }).catch(e => {
        console.log("e", e)
     })
  }

  return (
    <div className="App">
        <h1>API Call Demo</h1>
        {
          data.map(item => {
            return(
              <div>{item.id}: {item.email}</div>
            )
          })
        }

        <button onClick={postPutEvent}>Submit</button>

    </div>
  );
}

export default App;
