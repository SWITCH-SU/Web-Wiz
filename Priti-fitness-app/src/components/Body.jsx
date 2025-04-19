import React from 'react'
import { Outlet } from 'react-router-dom'
import FitnessStepTracker from './FitnessStepTracker'

const Body = () => {
  return (
    <>
    <FitnessStepTracker/>
    <div className=' p-2'>
    <Outlet/>
    </div>
    </>
  )
}

export default Body