import { useContext } from "react"
import { DataContext } from "../App"
import QuestionsData from "../data/QuestionsData"

export const Score = () => {
    const {score,setAppState,setScore} = useContext(DataContext)

    const aginQuiz=()=>{
        setAppState('menu')
        setScore(0)
    }

  return (
    <div className='score'>
        <h1>Answer Score</h1>
        <h2>{score} / {QuestionsData.length}</h2>
        <button onClick={aginQuiz}>Again Quiz</button>
    </div>
  )

}

