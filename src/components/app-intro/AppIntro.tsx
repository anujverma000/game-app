import React, { useState } from 'react'
import { Modal } from '../modal'
import './style.css'

const InfoIcon = ({onClick}: {onClick: () => void}) => <div className="info-icon" onClick={onClick}>i</div>
const CloseIcon = ({onClick}: {onClick: () => void}) => <div className="close-icon" onClick={onClick}>x</div>

const IntroHeader = ({onClose}: {onClose: () => void}) => {
  return (
    <div className="intro-header">
      <h1>Game App</h1>
      <CloseIcon onClick={onClose} />
    </div>
  )
}

const Intro = ({onClose}: {onClose: () => void}) => {
  return (
    <Modal onClose={onClose}>
      <IntroHeader onClose={onClose} />
      <em>This is one player game.</em>
      <p>
        There is a grid of boxes (16). 
        Player can select the box by click on it.
        If number of selected boxes exceeds more than the limit (2), first item that was selected will toggle to initial state
      </p>
      <ul>
        <li>Initial state of box is blue.</li>
        <li>Selected box turns red.</li>
      </ul>
    </Modal>
  )
}

const AppIntro = () => {
  const [visible, setVisile] = useState(false)
  const close = () => setVisile(!visible)
  return (
    <>
      <InfoIcon onClick={close}/>
      { visible && <Intro onClose={close}/> }
    </>
  )
}

export default AppIntro
