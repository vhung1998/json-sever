import React, { useEffect, useMemo, useState,useRef ,useReducer} from 'react';
import logoImage from './logo.svg';
import MyApp from './index'
import './App.css';
import ima from './images.jpg'
import axios from 'axios';
import ModalEdit from './modal'
import 'antd/dist/antd.css';
import Conten from './conten';
const initState = {
  job:'',
  jobs:[]
}

const SET_JOB = 'set_job'
const ADD_JOB = 'add_job'
const DELETE_JOB ='delete_job'
const setJob = payload =>{
  return {
    type:SET_JOB,
    payload
  }
}
const addJob = payload =>{
  return {
    type:ADD_JOB,
    payload
  }
}
const deleteJob = payload =>{
  return {
    type:DELETE_JOB,
    payload
  }
}
const reduce = (state , action) =>{
  let newState
  switch (action.type) {
    case SET_JOB:
      newState ={
        ...state,
        job:action.payload
      }
      break;
    case ADD_JOB:
      newState ={
        ...state,
        jobs:[...state.job ,action.payload]
      }
      break;
      case DELETE_JOB:
      
       const newJobs = [...state.jobs]
       const s = newJobs.splice(action.payload,1)
        newState={
          ...state,
          jobs:newJobs
        }
      
      break;
    default:
      throw new Error(' lỗi nha')
      break;
  }
  return newState
}


function App() {
  
  const [state ,dispatch]= useReducer(reduce ,initState)
  const {job ,jobs} = state
const focu = useRef()

 const handleSubmit = ()=>{
  dispatch(addJob(job))
  dispatch(setJob(''))
  focu.current.focus()
 }

  return (

    <div style={{ padding:'0 32px' }}>
      <h3>todo</h3>
   <input
   ref={focu}
   value={job}
   placeholder='nhập công việc'
   onChange={e=>{
    dispatch(setJob(e.target.value))
   }}
   />
   <button onClick={handleSubmit}>add</button>
   <ul>
    {
      jobs.map((job ,index)=>(
        <li key={index}>{job} 
        <span
        onClick={()=>{dispatch(deleteJob(index))}}
       
        > &times;</span>
        </li>
      )
      )
    }
   </ul>
    </div>
  )
}

export default App;
