import React, { useState, useEffect } from "react"
import '../styles/header.scss'
import styled from 'styled-components'
import PageLink from './PageLink'
import logo from '../images/logo_grubsze.png'
import { Fade } from 'react-reveal'

const HeaderContainer = styled.header`
  color: ${props => props.color};
  .center {
    ul {
      .hoverable:before, .hoverable:after {
            content: '';
            position: absolute;
            width: 0%;
            height: 0.12rem;
            top: 50%;
            margin-top: -0.5px;
            background: #fff;
        }
        
        .hoverable:before {
            left: 0;
        }
        .hoverable:after {
            right: 0;
            background: ${props => props.color === 'inherit' ? '#282828' : props.color };
            transition: width 0.8s cubic-bezier(0.22, 0.61, 0.36, 1);
        }
        
        .hoverable:hover:before {
            background: ${props => props.color === 'inherit' ? '#282828' : props.color };
            width: 100%;
            transition: width 0.5s cubic-bezier(0.22, 0.61, 0.36, 1);
        }
        
        .hoverable:hover:after {
            background: transparent;
            width: 100%;
            transition: 0s;
        }
    }
  }
`

const Header = ({fontColor, location}) => {
  return (
    <HeaderContainer id='header' color={fontColor}>
      <div className='center'>
        <PageLink to='/'>
          {location.pathname === '/' ? <Fade bottom cascade>Karolina Włoszek</Fade> : <img alt='logo' src={logo} className='logo'/>}
       
          
        </PageLink>
        <ul>
          <HeaderNavLink currentLocation={location} targetLocation='/projects/'>PROJECTS</HeaderNavLink>
          <HeaderNavLink currentLocation={location} targetLocation='/about-me/'>ABOUT ME</HeaderNavLink>
        </ul>
      </div>
    </HeaderContainer>
  )
}

function HeaderNavLink({ children, currentLocation, targetLocation }) {
  const [ animationState, setAnimationState ] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setAnimationState(false)
    },20)

    return () => clearTimeout(timeoutId)
  })

  const backToMainLink = (
    <span className={ animationState ? 'cross' : 'cross active'}>
      <span className='link-title'>{children}</span>
    </span>
  )
  return (
    <li>
      <PageLink
        to={targetLocation !== currentLocation ? targetLocation : '/'}
        className={targetLocation !== currentLocation ? 'hoverable' : null}
      >
        {currentLocation !== targetLocation ? children : backToMainLink}
      </PageLink>
    </li>
  )
}

export default Header