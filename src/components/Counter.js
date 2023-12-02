import React, {useState,useEffect,useContext} from 'react'

export default function Counter() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `Vous avez cliqué ${count} fois`;
    }, [count]);
/*useContext(() => {
    document.title = `Vous avez cliqué ${count} fois`;
}, [count]);
n'affecte que le body
*/
  return (
    <div align="center">
        <h1>Counter</h1>
        <p>{count}</p>
        <button onClick={() => setCount(count+1)}>+1</button>
        <button onClick={() => setCount(count-1)}>-1</button>
      
    </div>
  )
}
