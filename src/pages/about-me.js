import React from "react"
import '../styles/about-me.scss'
import SEO from "../components/seo"
import Layout from "../components/layout"
import { IntroWord } from "../components/IntroText"

export default function AboutMe({location, lng}) {

  const description = 'Zajmuję się projektowaniem form użytkowych i projektowaniem graficznym. Mieszkam i pracuję we Wrocławiu i jestem absolwentką wzornictwa na tutejszej ASP, z dyplomem licencjata. Oprócz projektowania ilustruję, maluję, pożeram książki i podróżuję.'


  return (

    <Layout fontColor='white' location={location.pathname}>
      <SEO title="Projekty" keywords={[`karolina włoszek`, `product design`, `design`, `portfolio`]}/>
      <div id='about-me-page' className='background'>
        <div>
          {'Cześć, jestem Karolina!'.split(' ').map((word, i) => (
            <React.Fragment>
              <IntroWord word={word} />
              <span> </span>
            </React.Fragment>
          ))}
        </div>
        <br/>
        <br/>
        <div className={'description-wrapper'}>
          {description.split(' ').map((word, i) => (
            <React.Fragment>
              <IntroWord word={word} />
              <span> </span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </Layout>
  )
}