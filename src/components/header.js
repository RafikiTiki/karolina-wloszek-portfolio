import React, { useState, useEffect } from "react"
import '../styles/header.scss'
import styled from 'styled-components'
import PageLink from './PageLink'
import logoBlack from '../images/logo-black.png'
import logoWhite from '../images/logo-white.png'

import LanguageSwitcher from './LanguageSwitcher'

import { translate } from "react-i18next"

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

const Header = ({fontColor, location, t}) => {
  return (
    <HeaderContainer id='header' className={getHeaderContainerClassName(location)} color={fontColor}>
      <div className='center'>
        <PageLink to='/'>
            <img alt='logo' src={fontColor === 'white' ? logoWhite : logoBlack} className='logo'/>
        </PageLink>
        <ul>
          <HeaderNavLink currentLocation={location} targetLocation='/projects/'>{t('projects')}</HeaderNavLink>
          <HeaderNavLink currentLocation={location} targetLocation='/about-me/'>{t('about me')}</HeaderNavLink>
          <LanguageSwitcher color={fontColor}/>
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

// add white background to header in project pages
function getHeaderContainerClassName(location) {
  if (typeof location === 'string') {
    return location.match(/\/projects\/.+/) || location.match(/\/about-me\//)
      ? 'header-with-overlay'
      : ''
  } else {
    return ''
  }
}

// export default Header
export default translate("Header")(Header)