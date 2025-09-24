import {useEffect,useState} from "react";

export default function ProgressBar({timer}){
    const [remainigTime,setRemainingTime] = useState(timer);

    // useEffect with empty dependency runs when :- 1.component render first time 2.component unmounts.

    useEffect(() =>{
        const interval = setInterval(()=>{
            setRemainingTime(remainigTime => remainigTime - 10);
        },10)

        return () =>{
            clearInterval(interval)
        }


    },[])
    return <progress value={remainigTime} max={timer}/>
}