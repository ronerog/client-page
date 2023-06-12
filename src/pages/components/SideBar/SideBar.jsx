import React from 'react'
import { Container, Content } from './SiderBar-css'
import { 
  FaTimes, 
  FaRegSun, 
  FaUserAlt, 
  FaHome,
  FaWallet,
  FaAddressCard,
} from 'react-icons/fa'

import { GiExitDoor } from "react-icons/gi";

import SidebarItem from '../SidebarItem/SideBarItem'
import { Link } from 'react-router-dom';

const Sidebar = ({ active }) => {

  const closeSidebar = () => {
    active(false)
  }

  return (
    <>
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />  
      <Content>
      <Link to="/homepage">
      <SidebarItem Icon={FaHome} Text="Início" />
      </Link>
        <Link to="/user">
        <SidebarItem Icon={FaUserAlt} Text="Usuário" />
        </Link>
        <Link to="/boletos">
        <SidebarItem Icon={FaWallet} Text="Boletos" />
        </Link>
        <Link to="/carteirinha">
        <SidebarItem Icon={FaAddressCard} Text="Carteirinha" />
        </Link>
        <Link to="/config">
        <SidebarItem Icon={FaRegSun} Text="Settings" />
        </Link>
      </Content>
      <Link to="/">
      <SidebarItem className="logout" Icon={GiExitDoor} Text="Sair" />
      </Link>
    </Container>
    </>
  )
}

export default Sidebar