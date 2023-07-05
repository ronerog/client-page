import React from 'react'

import { 
  FaRegSun, 
  FaUserAlt, 
  FaHome,
  FaWallet,
  FaAddressCard,
  FaBars,
  FaWhatsapp,
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
      <Link className='link' to="/">
      <SidebarItem className='icon' Icon={GiExitDoor} Text="Sair" />
      </Link>
      </li>
      </ul>
      <a className="whatsapp" id="robbu-whatsapp-button" target="_blank" href="https://api.whatsapp.com/send?phone=82996911087"> <img className="whatsapp" src="https://cdn.positus.global/production/resources/robbu/whatsapp-button/whatsapp-icon.svg"/></a>
      </div>
    </>
  )
}