import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
const gifts = [
  'sam sung not 22 utral',
  'iphone 14 promax',
  'galaxy zplip 3'
]
function APP(){
    const [gift , Setgift] = useState()
    const quaythuong = () => {
        const indext = Math.floor(Math.random() * gifts.length)
        Setgift(gifts[index])
    }
    return(
        <div style = {{padding:32}}>
            <h1>{gift || 'bạn cần quay thưởng để nhận thưởng'}</h1>
            <button onclick = {quaythuong}>quay thưởng</button>
        </div>
    )
}
