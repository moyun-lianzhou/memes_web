import React from 'react'

const ImageDetail:React.FC = () => {
  return (
    <div>
        <img className='h-screen' src={`https://picsum.photos/300/300/?id=${Math.random()}`}></img>
    </div>
  )
}

export default ImageDetail
