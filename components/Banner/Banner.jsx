import React from 'react'

export default function Banner({children = null, theme= "neutral", title}){
    
    const singleLineHeigthClass = children ? "" : "single-heigth"
    
    return(
        <div className= {`banner-container ${theme} ${singleLineHeigthClass}`}>
            <img className="banner-icon" src={`../../images/${theme}.png`}/>
            <div className="banner-text">
                <h3>{title}</h3>
                <p className={`p-${theme}`}>{children}</p>
            </div>
        </div>
    )
}