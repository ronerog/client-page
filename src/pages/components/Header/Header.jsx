import React, { useState, useEffect } from 'react'
import { Container } from './Header-css'
import { FaBars } from 'react-icons/fa'
import Sidebar from '../SideBar/SideBar.jsx'

const Header = () => {
  const [sidebar, setSidebar] = useState(false)
  const [data, setData] = useState()

    useEffect(() => {
        async function loadUser(){
            const request = await fetch('http://jiapi-wpp.vps-kinghost.net:3003/searchmat?DataBaseName=sigef_web_teste&MAT=11000')
            const result = await request.json();
            const resultArray = result[0]
            setData(resultArray.CLI_NOME);
        }

        loadUser()
    }, [])

  const showSiderbar = () => setSidebar(!sidebar)

  return (
    
    <Container>
      <FaBars onClick={showSiderbar} />
      {sidebar && <Sidebar active={setSidebar} />}
    <div>
      <p>Olá, {data}</p>
    </div>
    </Container>
  )
}

export default Header