import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const TrafficLight = props => {
    const[max,setMax] = useState(3);
  const[count,setCount] = useState(max);
  const[work, setWork] = useState(false);
  const[purple, setPurple] = useState(false);
console.log("max",max);
console.log("count",count);

const toggleTrafficLight = () =>{
    if(work){
        setCount(max);
    }else{
        setCount(0);
    }
    setWork(!work);
}

const togglePurpleLight = () =>{
    setPurple(!purple);
}

  useEffect(()=>{
    const intervalID = setInterval(()=>{
        if(work){
            if(count<(max-1)){
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

  useEffect(()=>{
    setMax(purple ? 4 : 3);
},[purple])

  return (
    <div>
        <div id="trafficTop"></div>
        <div id="container">
            <div className={`red light ${count===0 ? "selected" : ""}`}></div>
            <div className={`yellow light ${count===1 ? "selected" : ""}`}></div>
            <div className={`green light ${count===2 ? "selected" : ""}`}></div>
            {purple ? <div className={`purple light ${count===3 && work ? "selected" : ""}`}></div> : "" }
        </div>
        <div className="text-center m-2">
            <button onClick={toggleTrafficLight} type="button" 
            className={`btn ${work ? "btn-danger" : "btn-success"}`}
            >
                {work ? "Stop" : "Start"}
            </button>
        </div>
        <div className="text-center m-2">
            <button onClick={togglePurpleLight} type="button" 
            className={`btn ${purple ? "btn-danger" : "btn-warning"}`}
            >
                {purple ? "Remove Purple Light" : "Add Purple Light" }
            </button>
        </div>
    </div>
  )
}

TrafficLight.propTypes = {}

export default TrafficLight