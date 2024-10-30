import { useState } from "react"


const Example = () => {
  const [date] = useState(new Date());

    
  return (
      <>
      <h1>This is an example{ date.toLocaleDateString()}</h1>
      </>
  )
}

export default Example
