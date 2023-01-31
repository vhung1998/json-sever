import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import ModalEdit from './modol'
import 'antd/dist/antd.css';


function App() {

  const [data, setData] = useState([])
  const [openModal, setOpenModal] = useState(false)
  const [info, setInfo] = useState({})


  const handleClick = (index) => {
    if (typeof index === "number"){
      setInfo(data[index])
    } else {
      setInfo({})
    }
    setOpenModal(true)
  }
  
  useEffect(() => {
    getUser()
  },[])

  const getUser = () => {
    axios.get('https://634026bcd1fcddf69cb27c5b.mockapi.io/users/users')
    .then((response) => {
      setData(response.data)
    
    })
    .catch((error) => console.log('error'))
  }
  const handleDelete = (id,index) => { 
   axios.delete(`https://634026bcd1fcddf69cb27c5b.mockapi.io/users/users/${id}`)
    .then((response) => {
     
      const newData =[...data]
      newData.splice(index,1)
      setData(newData)
    })
    .catch((error) => console.log('error'))
  }
 const addUser = (ten)=>{
  axios.post('https://634026bcd1fcddf69cb27c5b.mockapi.io/users/users',{avatar:'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/151.jpg',
   name: ten  })
  .then(function (response) {
  //   const posts = response.data
  //  const newda = [...data]
  //  newda.push(posts)
    setData(pre => [...pre, response.data])
  })
  .catch(function (error) {
    console.log(error);
  });                                                                      
 }
  return (
    <div className="App">
       <button
        style={{
          position:'fixed',
          left:200,
          top:50
        }}
        onClick={() => handleClick()}
       >thêm mới</button>
      <ModalEdit addUser={addUser} name={info.name} openModal={openModal} setOpenModal={setOpenModal}/>
      {
        data?.sort((a,b)=> b.id-a.id)?.map((item,index) => (
          <div id="main" className="layout">
          <div className="propile">
            <h1>Propile Card UI</h1>
            <button
            onClick={()=>handleDelete(item.id,index)}
            >xóa</button>
           
            <div className="center">
              <div className="title">
                 <img id="image" src={item.avatar}></img>
              </div>
              <div className="infrom">
                <h2 id="name" onClick={() => handleClick(index)}>{item.name}</h2>
                <div className="imal"> <i className="fa-solid fa-envelope"></i> <b>vanhungss98@gmail.com</b></div>
                <div className="phone"> <i className="fa-solid fa-phone"></i> <b>0359606767</b></div>
                <div className="gmai"><i className="fa-solid fa-globe"></i> <b>kiranwworkspace.com</b></div>
                <div className="address"> <i className="fa-solid fa-location-dot"></i> <b>bangalore</b></div>
              </div>
              <div className="heard">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-youtube"></i>
                <i className="fa-brands fa-tiktok"></i>
              </div>
            </div>
          </div>
        </div>
        ))
      }
    </div>
  );
}

export default App;

