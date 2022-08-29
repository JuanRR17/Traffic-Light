import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const TrafficLight = props => {
  const[count,setCount] = useState(4);
  const[work, setWork] = useState(false);

const toggleTrafficLight = () =>{
    if(work){
        setCount(4);
    }else{
        setCount(0);
    }
    setWork(!work);
    
}
  useEffect(()=>{
    const intervalID = setInterval(()=>{
        if(work){
            if(count<2){
                setCount((count)=>count + 1);
            }else{
                setCount(0);
            }
    }
    },3000);
    return () => {
        clearInterval(intervalID)
    }
  },[count,work])

  return (
    <div>
        <div id="trafficTop"></div>
        <div id="container">
            <div className={count!==0 ? 'red light' : 'red light selected'}></div>
            <div className={count!==1 ? 'yellow light' : 'yellow light selected'}></div>
            <div className={count!==2 ? 'green light' : 'green light selected'}></div>
        </div>
        <div className="text-center m-2">
            <button onClick={toggleTrafficLight} type="button" 
            className={work ? "btn btn-danger" : "btn btn-success"}
            >
                {work ? "Stop" : "Start"}
            </button>
        </div>
    </div>
  )
}

TrafficLight.propTypes = {}

export default TrafficLight