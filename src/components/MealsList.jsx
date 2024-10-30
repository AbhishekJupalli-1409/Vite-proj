import { useState } from "react";
import Counter from './Counter'

const MealsList = (props) => {
    
    const todaysMea1s = [
        { name: "Baked Beans", calories: 200, id: 12345 },
        { name: "Grilled Veggies", calories: 80, id: 23456 },
        { name: "Soup ", calories: 100, id: 34567 }
    ];
    const [meals, setMeals] = useState(todaysMea1s);
  const [done, setDone] = useState("click");
  const handleClick = () => {
    setDone("Eaten");
  }

  return (
      <div>
          <h1>Todays Meals of { props.name}</h1>
          <h2>
              {meals.map((item) => {
                  return <li key={item.id}>{item.name} <span><button onClick={handleClick}>{done}</button></span></li>
                })}
      </h2>
      <Counter meals={meals.length } />
      
    </div>
  )
}

export default MealsList
