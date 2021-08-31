import React, { useState } from 'react'
import './style.css'

interface ModalProps {
  children: React.ReactNode
  onClose: () => void
}
const Modal = ({ onClose, children }: ModalProps) => {
  const [visible, setVisile] = useState(true)
  
  if (!visible) return null

  return (
    <>
      <div className="backdrop" onClick={() => {
        setVisile(false);
        onClose();
      }} />
      <div className="modal-body">
        {children}
      </div>
    </>
  )
}

export default Modal
