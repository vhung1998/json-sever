import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import ModalEdit from './modol'
import 'antd/dist/antd.css';


function App() {
  const [data, setData] = useState([])
  const [info, setInfo] = useState({})
  const [indexx, setIndexx] = useState('')

  const [openModal, setOpenModal] = useState(false)
  useEffect(() => {
    useser()
  }, [])
  const handleClick = (index) => {
    if (typeof index === "number") {
      setInfo(data[index])
      setIndexx(index)
    }
    else {
      setInfo({})
    }

    setOpenModal(true)
  }
  const useser = () => {
    axios.get('https://634026bcd1fcddf69cb27c5b.mockapi.io/users/users')
      .then((respon) => {
        setData(respon.data.sort((a, b) => b.id - a.id))

      }
      )
  }
  const handleDelete = (id, index) => {
    axios.delete(`https://634026bcd1fcddf69cb27c5b.mockapi.io/users/users/${id}`)
      .then((respon) => {
        const newData = [...data]
        newData.splice(index, 1)
        setData(newData)
        console.log(1111, newData)
      })
      .catch((error) => console.log('error'))
  }

  const addUser = (ten, avatar) => {
    console.log(avatar)
    axios.post('https://634026bcd1fcddf69cb27c5b.mockapi.io/users/users', {
      avatar: avatar,
      name: ten
    })
      .then((response) => {
        const post = response.data
        const newjob = [...data]
        newjob.unshift(post)
        setData(newjob)
      })
      .catch((error) => {
        console.log(error);
      });
  }
  const editUser = (ten, avatar) => {
    axios.put(`https://634026bcd1fcddf69cb27c5b.mockapi.io/users/users/${data[indexx].id}`, {
      avatar: avatar,
      name: ten
    })
      .then((response) => {
        const putt = response.data
        const newjob = [...data]
        newjob[indexx].avatar = putt.avatar
        newjob[indexx].name = putt.name
        console.log(indexx, newjob)
        setData(newjob)
        setIndexx(null)
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div className="App">
      <button
        className='more'
        style={{
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
        onClick={() => handleClick()}
      > + thêm mới</button>
      {openModal && <ModalEdit editUser={editUser} addUser={addUser} avatarr={info.avatar} name={info.name} openModal={openModal} setOpenModal={setOpenModal} />}

      <div className='row'>
        {
          data?.map((item, index) => (

            <div id="main" className={`layout ${item.id % 2 === 0 ? "pink" : "green"}`} >

              <div className="propile">
                <button
                  className='delete'
                  onClick={() => handleDelete(item.id, index)}
                >X</button>
                <h1 className={`hh ${item.id % 2 === 0 ? "pin" : "gren"}`}
                >Profile Card UI</h1>


                <div className="center">
                  <div className="title" >
                    <img id="image"
                      src={item.avatar} alt=""></img>
                  </div>
                  <div className="infrom">
                    <span id="name"><h2 className={`${item.id % 2 === 0 ? "pin" : "gren"}`}
                      onClick={() => handleClick(index)}>{item.name}</h2></span>
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
    </div>
  )
}
export default App;