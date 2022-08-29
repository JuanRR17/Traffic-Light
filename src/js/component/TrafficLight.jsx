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
            <div className={`red light ${count===0 ? "selected" : ""}`}></div>
            <div className={`yellow light ${count===1 ? "selected" : ""}`}></div>
            <div className={`green light ${count===2 ? "selected" : ""}`}></div>
        </div>
        <div className="text-center m-2">
            <button onClick={toggleTrafficLight} type="button" 
            className={`btn ${work ? "btn-danger" : "btn-success"}`}
            >
                {work ? "Stop" : "Start"}
            </button>
        </div>
    </div>
  )
}

TrafficLight.propTypes = {}

export default TrafficLight