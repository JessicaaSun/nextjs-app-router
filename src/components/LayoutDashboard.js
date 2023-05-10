import React from 'react'
import Sidebar from './Sidebar'

const LayoutDashboard = ({children}) => {
  return (
    <div>
      <Sidebar/>
      {children}
    </div>
  )
}

export default LayoutDashboard
