import React from 'react'
import { useEffect, useState } from 'react'

function Github() {
    const [data, setData] = useState({})
 useEffect(()=>{
    fetch('https://api.github.com/users/Kushal2212')
    .then(res=>res.json())
    .then(data=>setData(data))
 })
  return (
    <>
    
    <div className='text-center bg-gray-700 text-white p-4'>Github: {data.followers}

    <img className='w-40 h-40 rounded-full mx-auto' src={data.avatar_url} alt="" />
    </div>
    
    </>
  )
}

export default Github