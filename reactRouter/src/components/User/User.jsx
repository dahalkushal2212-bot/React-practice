import React from 'react'
import { useParams } from 'react-router-dom'

export default function User() {
    const { Userid } = useParams()
  return (
    <div className='text-center bg-gray-700 text-white p-4'>User: {Userid}</div>
  )
}
