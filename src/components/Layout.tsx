import React from 'react'
import Navbar from './Navbar'

type LayoutProps = {
  children: React.ReactNode | React.ReactElement
}

const Layout = ({children}: LayoutProps) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  )
}

export default Layout
