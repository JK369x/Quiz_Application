import QuestionsData from "../data/QuestionsData"
import { useEffect, useState } from "react";
import { useContext } from "react";
import { DataContext } from "../App";
import { Score } from "./Score";

export const Quiz = () => {
    console.log(QuestionsData);
    const [current,setCurrent] = useState(0)
    const [selectChoice,setSelectChoice] = useState('')
    const {score,setScore,setAppState}= useContext(DataContext)

    useEffect(()=>{
        checkAnswer()
    },[selectChoice])

    const checkAnswer=()=>{
        if(selectChoice !== ""){
            if(selectChoice === QuestionsData[current].answer){
                setScore(score+1)
                nextQuestion()
                console.log('correct')
            }else{
                nextQuestion()
                console.log('reject T_T')
            }
        }
    }

    const nextQuestion=()=>{
        setSelectChoice('')
        if(current === QuestionsData.length-1){
            setAppState('score')
            console.log('End Quiz')
        }else{
            setCurrent(current+1)
        }
        setCurrent(current+1)
    }

  return (
    <div className='quiz'>
        <h1>{QuestionsData[current].question}</h1>
        <div className="choices">
            <button onClick={()=>setSelectChoice("A")}>{QuestionsData[current].A}</button>
            <button onClick={()=>setSelectChoice("B")} >{QuestionsData[current].B}</button>
            <button onClick={()=>setSelectChoice("C")}>{QuestionsData[current].C}</button>
            <button onClick={()=>setSelectChoice("D")}>{QuestionsData[current].D}</button>
        </div>
        <p>{`${current+1} / ${QuestionsData.length}`}</p>
    </div>
  )
}
