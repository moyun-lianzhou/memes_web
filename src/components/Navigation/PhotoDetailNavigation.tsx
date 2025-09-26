import React from 'react'
import { ArrowLeftOutlined, CopyOutlined, DeleteOutlined, InfoCircleOutlined, ShareAltOutlined, UnorderedListOutlined, ZoomInOutlined } from '@ant-design/icons'

const PhotoDetailNavigation: React.FC = () => {
  // 怎么让返回的时候页面保持原来的状态，不会重新挂载组件
  const handleBack = ()=>{
    window.history.back();
  }
  return (
    <div className='fixed inset-x-0 h-[64px] z-66'>
      <div className='flex justify-between items-center h-full'>
        <i onClick={handleBack} className='w-12 h-12 ml-8 text-white text-xl cursor-pointer flex rounded-full items-center justify-center hover:bg-gray-500'><ArrowLeftOutlined /></i>
        <div className='flex gap-2 px-12 text-xl text-white 
          [&>*]:w-12
          [&>*]:h-12
          [&>*]:flex
          [&>*]:justify-center
          [&>*]:items-center
          [&>*]:rounded-full 
          [&>*]:cursor-pointer 
          [&>*]:hover:bg-gray-500'>
          <i><ZoomInOutlined /></i>
          <i><ShareAltOutlined /></i>
          <i><InfoCircleOutlined /></i>
          <i><DeleteOutlined /></i>
          <i><CopyOutlined /></i>
          <i><UnorderedListOutlined /></i>
        </div>
      </div>
    </div>
  )
}

export default PhotoDetailNavigation