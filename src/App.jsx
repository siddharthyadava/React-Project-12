import { Children, useState } from 'react'
import './App.css'
import ChildComponent from './components/ChildComponent';
import ExpensiveComponent from './components/ExpensiveComponent'

function App() {
  // const [count, setCount] = useState(0);

  // function handleClick() {
  //   setCount(count+1)
  // }

  return (

    <div>
      <ExpensiveComponent />
    </div>

    // <div>
    //   <button onClick={handleClick}>
    //     Increment
    //   </button>
      
    //   <div>
    //     Count: {count}
    //   </div>
    //   <br /><br />
      
    //   <div>
    //     <ChildComponent
    //       buttonName="Click me"
    //       handleClick={handleClick}
    //     />
    //   </div>
    // </div>
  )
}

export default App
