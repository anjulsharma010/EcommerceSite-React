import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Nav from "./Nav"

const Header = () => {
  return (
    <MainHeader>
        <NavLink to="/">
            <img src="./images/logo.png" alt="my logo" />
        </NavLink>
        <Nav />
    </MainHeader>
  )
}
const MainHeader = styled.header`
    padding:0 4.8rem 0 0;
    height: 10rem;
    background-color: ${({theme})=> theme.colors.bg};
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
`
export default Header