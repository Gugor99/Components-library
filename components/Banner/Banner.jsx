import React from 'react'
import DynamicIcon from '../../hooks/useIcon'

export default function Banner({children = null, theme= "neutral", title}){
    
    const singleLineHeigthClass = children ? "" : "single-heigth"
    console.log(theme)
    return(
        <div className= {`banner-container ${theme} ${singleLineHeigthClass}`}>
            <DynamicIcon theme={theme} />
            <div className="banner-text">
                <h3>{title}</h3>
                <p className={`p-${theme}`}>{children}</p>
            </div>
        </div>
    )
}

