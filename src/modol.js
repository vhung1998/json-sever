import { Button, Modal, Input, Image } from 'antd';
import React, { useEffect, useState } from 'react';

const ModalEdit = ({ openModal, setOpenModal, name, addUser, editUser,avatarr }) => {
  const [ten, getTen] = useState(name)
  const [avatar, setAvatar] = useState(avatarr)
  console.log(name,ten)

  useEffect(() => {
    if(name){
      getTen(name)
    }
  },[name])
  useEffect(() => {
    if(avatarr){
      setAvatar(avatarr)
    }
  },[avatarr])
  const handleOk = () => {
    if (name?.length > 0) {
      editUser(ten, avatar)
    
    }
    else {
      addUser(ten, avatar)
    }

    setOpenModal(false);

  };
  const handleAvarta = (a) => {
    const file = a.target.value

    setAvatar(file)
  }
  function onChange(e) {
    console.log(1111, e.target.value)
    getTen(e.target.value)

  }
  const handleCancel = () => {
    setOpenModal(false);
  };
console.log(avatar,99999)
  return (
    <>
      <Modal title="Basic Modal" open={openModal} onOk={handleOk} onCancel={handleCancel}>
        <Input value={avatar} placeholder="avatar" type='text' onChange={handleAvarta} />

        <Input value={ten} placeholder="name" allowClear onChange={onChange} />
      </Modal>
    </>
  );
};

export default ModalEdit;