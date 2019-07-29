import React from 'react'
import projectsData from '../../project-data/projectsData'
import Template from '../../components/page-template'

export default function Voicemail({location}) {
  const i = 9
  return (
    <Template data={projectsData[i]} nextData={projectsData[i + 1 === projectsData.length ? 0 : i + 1]} location={location.pathname}/>
  )
}