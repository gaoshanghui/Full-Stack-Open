import React from 'react'

const Notification = ({message, type}) => {
  return (
    <div className="notification">
      <p className={type}>{message}</p>
    </div>
  )
}

export default Notification
