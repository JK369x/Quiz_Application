import { useContext } from "react"
import { DataContext } from "../App"


export const Menu = () => {
    const {setAppState} = useContext(DataContext)
  return (
    <div className='menu'>
       <h1>Start Quiz</h1>
    <button onClick={()=>setAppState('quiz')}>Start Quiz</button>
    </div>
  )
}
