import { useState } from "react";

function App() {

  const [count, setCount] = useState(0)
  const [coun2, setCount2] = useState(0)

  function cc(count) {
    if(count>10){
        const ff = Array.from({ length: 10 }, () => {
      return <div style={{ width: '100px', height: '100px', border: '1px solid black' }}>

      </div>

    }
    )
    return ff
    }else{
      const ff = Array.from({ length: count }, () => {
        return <div style={{ width: '100px', height: '100px', border: '1px solid black' }}>
  
        </div>
  
      }
      )
      return ff
    }
  
  }
  return (
    <div>
      <input type="text" onChange={(e) => setCount(e.target.value)} />
      <button onClick={() => {
setCount2(count)
      }}>создать</button>
      {cc(coun2)}
    </div>
  );
}

export default App;
