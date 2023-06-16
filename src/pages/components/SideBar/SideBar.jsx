import React from 'react'

import { 
  FaRegSun, 
  FaUserAlt, 
  FaHome,
  FaWallet,
  FaAddressCard,
  FaBars,
} from 'react-icons/fa'

import { GiExitDoor } from "react-icons/gi";

import SidebarItem from '../SidebarItem/SideBarItem'
import { Link } from 'react-router-dom';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import "./style-side.css";

export default function Sidebar() {

  return (
    <>
    

        <div className='navigation-side'>
      
        <ul>
        <li>
            
          <Link className='link' to="/homepage">
            <SidebarItem className='icon' Icon={FaHome} Text="Início" />
          </Link>
        </li>
        <li>
        <Link className='link' to="/user">
        <SidebarItem className='icon' Icon={FaUserAlt} Text="Usuário" />
        </Link>
        </li>
        <li>
        <Link className='link' to="/boletos">
        <SidebarItem className='icon' Icon={FaWallet} Text="Boletos" />
        </Link>
        </li>
        <li>
        <Link className='link' to="/carteirinha">
        <SidebarItem className='icon' Icon={FaAddressCard} Text="Carteirinha" />
        </Link>
        </li>
        <li>
        <Link className='link' to="/config">
        <SidebarItem className='icon' Icon={FaRegSun} Text="Settings" />
        </Link>
        </li>
        <li>
      <Link className='link' to="/">
      <SidebarItem className='icon' Icon={GiExitDoor} Text="Sair" />
      </Link>
      </li>
      </ul>
      </div>
    </>
  )
}