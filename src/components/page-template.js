import React, { Fragment, useEffect, useRef, useState } from 'react'
import '../styles/project-template.scss'
import Layout from "./layout"
import SEO from "./seo"
import { window, document } from 'browser-monads'
import smoothscroll from 'smoothscroll-polyfill'
import useOnTopPosition from '../components/useOnTopPosition'
import PageLink from '../components/PageLink'
import { navigate } from 'gatsby'
import Slide from 'react-reveal/Slide';

import { translate } from "react-i18next"


const Template = ({data, nextData, location, lng, t}) => {
    const isOnTop = useOnTopPosition()
    const infoRef = useRef(null)
    smoothscroll.polyfill()

    const [ nextPrjHov, setNextPrjHov ] = useState(false);
    const [ linkTriggered, setLinkTriggered ] = useState(false)

    useEffect(() => {
        const scrollToInfo = () => window.scrollTo({
            top: infoRef.current.offsetTop,
            left: 0,
            behavior: 'smooth',
        })

        const handleScroll = event => {
            if (isOnTop && event.deltaY > 0) {
                event.preventDefault()
                scrollToInfo()
            }
        }

        const handleTouchStart = event => {
            event.preventDefault()
            scrollToInfo()
        }
        
        document.addEventListener('wheel', handleScroll, { passive: false })
        document.addEventListener('touchmove', handleTouchStart, { passive: false })

        return () => {
            document.removeEventListener('wheel', handleScroll)
            document.removeEventListener('touchmove', handleTouchStart)
        }
    }, [isOnTop])
    
    const handleCoverClick = () => {
        window.scrollTo({top: infoRef.current.offsetTop, behavior: 'smooth'})
    }

    const handleNextProjectClick = () => {
        setLinkTriggered(true)
        setTimeout(() => {
            window.scrollTo(0,0)
            navigate('/projects/' + nextData.route)
        }, 1000)
        
    }

    const seo = lng === 'en' ? (
        <SEO title={ typeof data.title.en === 'string' ? data.title.en : data.title.en.props.children } keywords={[`karolina włoszek`, `product design`, `design`, `portfolio`]} />
    ) : (
        <SEO title={ typeof data.title.pl === 'string' ? data.title.pl : data.title.pl.props.children } keywords={[`karolina włoszek`, `product design`, `design`, `portfolio`]} />
    )
    
    let paragraphs = []
    if (lng === 'en') {
        paragraphs = data.contentData.paragraphs.en.map( paragraph => {
            return (
                <Fragment key={paragraph.title}>
                    <div><strong>{paragraph.title}</strong></div>
                    <div>{paragraph.content}</div>
                </Fragment>
            )
        })
    } else if (lng === 'pl') {
        paragraphs = data.contentData.paragraphs.pl.map( paragraph => {
            return (
                <Fragment key={paragraph.title}>
                    <div><strong>{paragraph.title}</strong></div>
                    <div>{paragraph.content}</div>
                </Fragment>
            )
        })
    }

    return (
        <Layout fontColor='inherit' location={location}>
            {seo}
            <div id='project-page' className='background'>
                <section className='project-cover' style={{backgroundImage: `url(${data.contentData.coverImg})`}} onClick={handleCoverClick} >
                    <Slide bottom>
                        <div className='scroll-indicator'>
                            <div><span>{t('scroll')}</span></div>
                        </div>
                    </Slide>
                </section>
                <section className='center' ref={infoRef}>
                    <section className='project-info'>
                        <div className='title-section'>
                            <h2 className='title'>{lng === 'en' ? data.title.en : data.title.pl}</h2>
                            <span className='year'>–{data.contentData.year}</span>
                        </div>
                        <div className='description-section'>
                            <h4 className='subtitle'>{lng === 'en' ? data.contentData.subtitle.en : data.contentData.subtitle.pl}</h4>
                            <div className='paragraphs'>
                                { paragraphs }
                            </div>
                        </div>
                    </section>        
                </section>
                

                <section className='project-gallery'>
                    {data.contentData.gallery.map((photos, i) => {
                        if (photos.length === 1) {
                            return (
                                <div className='one-photo' key={photos}>
                                    <img src={photos} alt={data.title + i}/>
                                </div>
                            )
                        } else if (photos.length === 2) {
                            return (
                                <div className='two-photos' key={photos}>
                                    {photos.map((photo, j) => {
                                        return (
                                            <div className='photo' key={photo}>
                                                <img src={photo} alt={data.title + j}/>
                                            </div>
                                        )
                                    })}
                                </div>
                            )
                        } else if (photos.length === 4) {
                            return (
                                <div className='four-photos' key={photos}>
                                    {photos.map((photo, j) => {
                                        return (
                                            <div className='photo' key={photo}>
                                                <img src={photo} alt={data.title + j}/>
                                            </div>
                                        )
                                    })}
                                </div>
                            )
                        }
                        return null;
                    })}
                </section>
                

                <section className='project-bottom' style={{backgroundImage: `url(${nextData.contentData.coverImg})`}}>
                    <div className={nextPrjHov ? 'background active' : 'background'} style={linkTriggered ? {opacity: '0'} : null}>
                        <div className={linkTriggered ? 'next-project active' : 'next-project'}>
                            <div className='wrapper'>
                                <h1 className='title' onClick={handleNextProjectClick} onMouseEnter={() => setNextPrjHov(true)} onMouseLeave={() => setNextPrjHov(false)}>
                                    <PageLink to={'/projects/' + nextData.route}>
                                        {lng === 'en' ? nextData.title.en : nextData.title.pl}
                                    </PageLink>
                                </h1>
                                <span className='subtitle' onClick={handleNextProjectClick} onMouseEnter={() => setNextPrjHov(true)} onMouseLeave={() => setNextPrjHov(false)}>
                                    <PageLink to={'/projects/' + nextData.route}>
                                        – {lng === 'en' ? nextData.previewData.caption.en : nextData.previewData.caption.pl}
                                    </PageLink>
                                </span>

                            </div>    
                            <span className='see-next' onClick={handleNextProjectClick} onMouseEnter={() => setNextPrjHov(true)} onMouseLeave={() => setNextPrjHov(false)}>
                                <PageLink to={'/projects/' + nextData.route}>
                                    {t('see next')} ▶︎
                                </PageLink>
                            </span>
                        </div>
                        <div className='center'>
                            <div className='footer'>
                                <span>© 2019 – karolina włoszek</span>
                            </div>
                        </div>
                        <div className={linkTriggered ? 'transition-circle active' : 'transition-circle'}/>
                    </div>
                </section>
                    
            </div>
        </Layout>
    )
}

export default translate('Project')(Template)