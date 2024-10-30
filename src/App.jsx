import { useState } from 'react'
import './App.css'



import MealsList from './components/MealsList'

function App() {
  const [word, setWord] = useState("Abhi")
  const handleClick = () => {
    setWord("HEro");
  }
  return (
    <div className='App'>
      
      <MealsList name={word} />
      
      <button onClick={handleClick}>Change Name</button>
    </div>
  )
}

export default App
