import React from 'react'
import './style.css'

export interface BlockProps {
  active: boolean
  index: number
  onClick: (index: number) => void
}

const Block = ({ active, index, onClick }: BlockProps) => {
  const handleClick = () => {
    onClick(index)
  }
  return (
    <div className={`block${!!active ? ' active' : ''}`} onClick={handleClick} />
  )
}

export default React.memo(Block)
