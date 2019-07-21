import React from "react"
import '../styles/index.scss'
import Layout from "../components/layout"
import SEO from "../components/seo"
import IntroText from '../components/IntroText'
import { Fade } from 'react-reveal'
import useAnimateWavesBackground from '../components/useAnimateWavesBackground'

import { translate } from "react-i18next"
import { getAnimatedLetterStyle } from "../utils"
import Slide from "react-reveal/Slide"
import { useFullPageScroll } from "../custom-hooks/useFullPageScroll"
import useSetBodyOverflowProp from "../custom-hooks/useSetBodyOverflowProp"

const IndexPage = ({location, t, lng}) => {
  useAnimateWavesBackground()
  useSetBodyOverflowProp('hidden')
  useFullPageScroll()

  let heading;
  switch(lng) {
    case 'en':
      heading = ['H', 'e', 'l', 'l', 'o', '!']
      break;
    case 'pl':
      heading = ['C', 'z', 'e', 'ś', 'ć', '!']
      break;
    default: 
      heading = ['H', 'e', 'l', 'l', 'o', '!']
      break;
  }
  

  return (
    <Layout fontColor='white' location={location}>
      <SEO title="Portfolio" keywords={[`karolina włoszek`, `product design`, `design`, `portfolio`]} />
        <div id='index-page'>

          <div className='full-height-page'>
            <canvas id='background-canvas'/>
            <div className='center'>
              <div className='introduction-wrapper'>
                <Fade duration={1500}>
                <span className='greeting-title'>{heading.map((letter, index, array) => (
                  <span style={getAnimatedLetterStyle(index, array.length)}>{letter}</span>
                ))}
                </span>
                </Fade>
              </div>
            </div>
            <Slide bottom>
              <div className='scroll-indicator'>
                <div>{t('scroll')}</div>
              </div>
            </Slide>
          </div>

          <div className='full-height-page'>
            <div className='center'>
            <div className='introduction-wrapper'>
              <IntroText>
                {t('intro-part1')}<br/>{t('intro-part2')}
              </IntroText>
            </div>
          </div>
          </div>

        </div>
    </Layout>
  )
}

export default translate('Index')(IndexPage)
