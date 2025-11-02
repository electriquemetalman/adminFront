import React from 'react'
import "./DeletePopup.css"

const DeletePopup = ({delateFood, onClose}) => {
  return (
    <div className='popup-overlay'>
      <div className='popup_content'>
        <p> Are you sure you want DELETE this Food ??</p>
        <button onClick={delateFood} className='confirm-delete'>YES DELETE</button>
        <button onClick={onClose} className='cancel-delete'>NO CANCEL</button>
      </div>
    </div>
  )
}

export default DeletePopup
