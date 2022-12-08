import React, { useEffect, useState } from 'react';
import logoImage from './logo.svg';
import MyApp from './index'
import './App.css';
import ds from './dscv';
import axios from 'axios';
import 'antd/dist/antd.css';


function App() {
  const [job, setJob] = useState('')
  const [jobs, setJobs] = useState([])
  const handleadd = () => {
    setJobs(prev => [...prev, job])
    setJob('')
  }
  const handleDelete = (index) => {
    const newJob = [...jobs]
    newJob.splice(index, 1)
    setJobs(newJob)
  }

  return (
    <div>

      <input
        value={job}
        type='text'
        onChange={e => setJob(e.target.value)}
      />
      <button
        onClick={handleadd}
      >Add</button>
      <ul>
        {
          jobs.map((item, index) => (
            <li key={index}>{item}
              <button
                onClick={() => handleDelete(index)}
              >xóa</button>
            </li>
          ))
        }
      </ul>
    </div>
  )


}

export default App;

