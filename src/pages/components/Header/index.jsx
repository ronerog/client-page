import React, { useState } from 'react'
import { Container } from './style'
import { FaBars } from 'react-icons/fa'
import Sidebar from '../SideBar/index'

const Header = () => {
  const [sidebar, setSidebar] = useState(false)

  const showSiderbar = () => setSidebar(!sidebar)

  return (
    
    <Container>
      <FaBars onClick={showSiderbar} />
      {sidebar && <Sidebar active={setSidebar} />}
    <div>
      <h3>Olá, Ayron</h3></div>
    </Container>
  )
}

export default Header