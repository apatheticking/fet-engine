import React from 'react'
// import { Section } from '../parts/layouts/Section'
import Section from 'components/layouts/Section'

export default {
    title: 'Section',
    component: Section
}

const size = {
    height: "500px",
    width: "100%"
}

export const WebSection = () => {
    
    //let height: string = '500px';

   return <Section section={size}/> 
}
