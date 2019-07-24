import React from "react"
import '../styles/about-me.scss'
import { translate } from "react-i18next"

import SEO from "../components/seo"
import Layout from "../components/layout"
import { IntroWord } from "../components/IntroText"

function AboutMe({location, t}) {
  return (

    <Layout fontColor='inherit' location={location.pathname}>
      <SEO title="Projekty" keywords={[`karolina włoszek`, `product design`, `design`, `portfolio`]}/>
      <div id='about-me-page' className='background'>
        <p className={'greeting-wrapper'}>
          {t('greeting').split(' ').map((word, i) => (
            <React.Fragment>
              <IntroWord word={word} />
              <span> </span>
            </React.Fragment>
          ))}
        </p>
        <p className={'description-wrapper'}>
          {t('description').split(' ').map((word, i) => (
            <React.Fragment>
              <IntroWord word={word} />
              <span> </span>
            </React.Fragment>
          ))}
        </p>
        <div className={'lets-meet-wrapper'}>
          <p className={'lets-meet'}>{t('lets-meet')}</p>
          <a className={'mail'} href={'mailto:wloszekkarolina@gmail.com'}>wloszekkarolina@gmail.com</a>
        </div>
        <footer className={'footer'}>
          <span>{t('designed-by')}</span>
          <br/>
          <span>{t('developed-by')}</span>
          <a href={'https://www.linkedin.com/in/antoni-sierakowski/'} target={'_blank'}>{t('antoni-sierakowski')}</a>
          <span>{t('and')}</span>
          <a href={'https://www.linkedin.com/in/rafa%C5%82-zakrzewski-942304128/'} target={'_blank'}>{t('rafal-zakrzewski')}</a>
        </footer>
      </div>
    </Layout>
  )
}

export default translate('AboutMe')(AboutMe)