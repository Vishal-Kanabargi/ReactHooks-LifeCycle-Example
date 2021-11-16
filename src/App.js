import React, { useEffect, useState } from "react";
import "./App.css";

let born = false
function App() {
  const [growth, setGrowth] = useState(0)
  const [nirvana, setNirvana] = useState(false)
  const [date, setDate] = useState(Date)

  useEffect(()=> {
      console.log('I am born....')
  }, []);

  useEffect (()=> {
    if (born) {
      document.title = 'Finally Iam okay..'
    }
  }, [nirvana])

  useEffect(()=> {
    if(born) {
      console.log('make a mistake and Grow')
    } else {
      born = true
    }

    if(growth > 70) {
      setNirvana(true)
    }
  });

  useEffect(() => {
    let handler = setInterval(() => {
      setDate(Date)
    }, 1000);

    return ( ()=> {
      clearInterval(handler)
    })
  })


  const growBy10 = () =>{
    setGrowth(growth+10)
  }


  return (
    <div className="App">
      <header className="">
        <h2>useEffect Hook</h2>
        <h3>Growth : {growth}</h3>
        <button type= 'button' onClick = {growBy10}>Grow</button>

        <h2>time working........</h2>
        <h3>Date and Time : {date}</h3>
      </header>
    </div>
  );
}

export default App;