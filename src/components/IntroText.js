import React, { Fragment, useState } from 'react'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { getAnimatedLetterStyle } from "../utils"

export default function IntroText({ children, city }) {
  console.log(children)

  return (
    <p className="intro-text">
      {/* początek tekstu */}
      {children[0].split(' ').map((word, i) => (
        <Fragment key={word + i}>
          <IntroWord word={word} />
          <span> </span>
        </Fragment>
      ))}
      <br/>
      {/* link */}
      <AniLink cover bg='#FFC2AD' to='/projects/'>
        <div className={'wavy-letter-container'}>
        {children[2].split('').map((letter, index, array) => letter === ' '
          ? <span style={getAnimatedLetterStyle(index, array.length)}>&nbsp;</span>
          : <span style={getAnimatedLetterStyle(index, array.length)}>{letter}</span>
        )}
        </div>
      </AniLink>
    </p>

  );
}

function IntroWord({ word, classNm }) {
  return (
    <span style={{ display: 'inline-block' }} className={classNm ? classNm : null}>
      {word.split('').map((letter, i) => (
        <IntroLetter key={letter + i} char={letter} />
      ))}
    </span>
  );
}

function IntroLetter({char, className = ''}) {
  const [ hoverClass, setHoverClass ] = useState('single-letter')

  return (
    <span
      className={`${hoverClass}${className ? ` ${className}` : ''}`}
      onMouseOver={() => setHoverClass('single-letter hovered')}
      onMouseLeave={() => setHoverClass('single-letter unhovered')}
    >
      { char }
    </span>
  )
}