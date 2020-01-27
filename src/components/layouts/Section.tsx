import React from 'react'

interface section {
    height: string; 
    width: string;
}

export default function Section(props: section) {
    const {height, width} = props
    console.log('props', props)
    return (
        <div style={{backgroundColor: 'red', height: height, width: width}}> 
            <p>test</p>
        </div>
    )
}