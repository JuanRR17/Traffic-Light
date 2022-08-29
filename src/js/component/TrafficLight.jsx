import React from 'react'
import PropTypes from 'prop-types'

const TrafficLight = props => {
    
  return (
    <div>
        <div id="trafficTop"></div>
        <div id="container">
            <div className='red light'></div>
            <div className='yellow light'></div>
            <div className='green light selected'></div>
        </div>
    </div>
  )
}

TrafficLight.propTypes = {}

export default TrafficLight