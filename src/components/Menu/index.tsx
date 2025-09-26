import React, { createContext, forwardRef } from 'react'
import clsx from 'clsx';

type MenuMode = 'horizontal' | 'vertical'

export interface MenuProps {
  mode?: MenuMode
  defaultSelectedKey?: string
  className?: string
  children?: React.ReactNode
  onSelect?: (key: string) => void
}

interface MenuItemProps {
  key: string
  disabled?: boolean
  className?: string
  children?: React.ReactNode
}

interface MenuContextType {
  mode: MenuMode
  selectedKey?: string
  onSelect?: (key: string) => void
}

export const MenuContext = createContext<MenuContextType>({ mode: 'horizontal' })

/**
 * 通用菜单组件容器
 * @param mode - 菜单显示模式：水平（horizontal）或垂直（vertical）
 * @param defaultSelectedKey - 默认选中的菜单项key
 * @param onSelect - 菜单项选中回调函数
 */
const Root = forwardRef<HTMLDivElement, MenuProps>(({
  mode = 'horizontal',
  defaultSelectedKey,
  className,
  children,
  onSelect
}, ref) => {
  // 使用状态管理当前选中项
  const [currentKey, setCurrentKey] = React.useState(defaultSelectedKey)

  // 处理菜单项点击事件
  const handleClick = (key: string) => {
    setCurrentKey(key)
    onSelect?.(key) // 安全调用回调函数
  }

  return (
    <MenuContext.Provider value={{ mode, selectedKey: currentKey, onSelect: handleClick }}>
      <div
        ref={ref}
        className={clsx(
          'flex gap-4 p-2 border-b border-gray-200',
          mode === 'vertical' && 'flex-col border-r border-b-0',
          className
        )}
      >
        {children}
      </div>
    </MenuContext.Provider>
  )
})

/**
 * 菜单项子组件
 * @param key - 菜单项唯一标识
 * @param disabled - 是否禁用该菜单项
 * @param children - 菜单项内容（支持React节点）
 */
const Item = forwardRef<HTMLDivElement, MenuItemProps>(({
  key,
  disabled,
  className,
  children,
}, ref) => {
  // 从Context获取菜单状态
  const { mode, selectedKey, onSelect } = React.useContext(MenuContext)
  
  return (
    <div
      ref={ref}
      onClick={() => !disabled && onSelect?.(key)}
      className={clsx(
        'px-4 py-2 cursor-pointer transition-colors',
        // 选中状态样式
        selectedKey === key && 'text-blue-600 bg-blue-50',
        // 禁用状态样式
        disabled && 'text-gray-300 cursor-not-allowed',
        // 垂直模式悬停效果
        mode === 'vertical' && 'hover:bg-gray-100',
        className // 允许外部样式覆盖
      )}
    >
      {children}
    </div>
  )
})

export const Menu = Object.assign(Root, { Item })

