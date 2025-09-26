
import { RootState } from '@/redux/store';
import React from 'react'
import { useSelector } from 'react-redux';

interface SelectProps {
  date: string; // 新增的选中事件处理函数
  isSelected: boolean;
  onSelect?: (id: string, isSelected:boolean) => void; // 新增的选中事件处理函数
}

const Select: React.FC<SelectProps> = ({ date, isSelected,  onSelect}) => {
  // const [isSelected, setIsSelected] = React.useState(false); // 初始化选中状态为 false
  const {theme} = useSelector((state:RootState)=>state.theme)
  const handleClick = () => {
    onSelect && onSelect(date, !isSelected); // 触发回调
    // setIsSelected(!isSelected)
  }

  return (
    <>
      <div onClick={handleClick} className={`cursor-pointer ${isSelected ? 'block' : 'hidden group-hover:block'} `}>
        {
          isSelected ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" fill="#4352AD" stroke="#fff" strokeWidth="1.5"/>
              <path
                stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                d="M7 12L10.5 15.5L17 9"/>
            </svg>) :
            (<svg width='24' height='24' viewBox='0 0 24 24'>
              <circle cx="12" cy="12" r="8" fill="none" 
              stroke={`${theme === 'dark' ? '#fff' : 'gray'}`} strokeWidth='2'/>
            </svg>)
        }
      </div>

    </>


  )
}

export default Select
