import React, { useEffect } from 'react'

function Home() {

  useEffect(()=>{
    document.title = 'Mostaqel-Clone | Home'
  },[])
  return (
    <div>Home</div>
  )
}

export default Home