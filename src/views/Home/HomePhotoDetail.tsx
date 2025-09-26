import React from 'react'
// import ImageDetail from '@/components/Photo/ImageDetail'
import PhotoDetailNavigation from '@/components/Navigation/PhotoDetailNavigation'
// import { useSelector } from 'react-redux'
// import { RootState } from '@/redux/store'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'

const HomePhotoDetail: React.FC = () => {
  // const {theme} = useSelector((state:RootState) => state.theme)
  return (
    <div className='bg-black relative w-screen h-screen'>
      <PhotoDetailNavigation />
      
      {/* <ImageDetail/> */}
      {/* <div className='flex justify-between items-center'> */}
        <i className='absolute z-66 left-2 top-[50%] -translate-y-[50%] w-16 h-16 ml-8 cursor-pointer hover:bg-[#6A7282] hover:text-white flex justify-center rounded-full text-gray-400 text-xl'><LeftOutlined /></i>
        <img className='absolute left-[50%] top-[50%] -translate-y-[50%] -translate-x-[50%] h-screen object-cover' src={`https://picsum.photos/1000/1000/?id=${Math.random()}`}></img>
        <i className='absolute z-66 right-2 top-[50%] -translate-y-[50%] w-16 h-16 mr-8 cursor-pointer hover:bg-gray-500 hover:text-white flex justify-center rounded-full text-gray-400 text-xl'><RightOutlined /></i>
      {/* </div> */}
    </div>
  )
}

export default HomePhotoDetail