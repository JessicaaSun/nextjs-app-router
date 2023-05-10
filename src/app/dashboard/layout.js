import LayoutDashboard from '@/components/LayoutDashboard'
import React from 'react'

const DashboardLayout = ({children}) => {
  return (
    <LayoutDashboard>
      {children}
    </LayoutDashboard>
  )
}

export default DashboardLayout
