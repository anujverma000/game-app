import React from 'react'
import { Block } from '../block'
import './style.css'

const SIZE = 16;
const ACTIVE_SIZE = 2;
const Blocks = [...Array(SIZE).keys()]

const Board = () => {
  const [activeBlocks, setActiveBlocks] = React.useState<Array<number>>([]);

  const setCurrentBlockActive = (index: number) => {
    const newBlocks = [...activeBlocks];
    if(newBlocks.length === ACTIVE_SIZE) {
      newBlocks.shift();
    }
    newBlocks.push(index);
    setActiveBlocks(newBlocks);
  }

  return (
    <div className="root">
      <div className="container">
        {
          Blocks.map((value) => {
            return <Block
              key={value}
              active={activeBlocks.includes(value)}
              index={value}
              onClick={setCurrentBlockActive} />
          })
        }
      </div>
    </div>
  )
}

export default Board
