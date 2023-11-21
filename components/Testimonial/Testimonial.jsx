import React from 'react'

export default function Tenstimonial({children, writer, occupation, image= null}){
    return(
        <div className="test-container">
            {image && <div className="cropped">
                <img className="prof-pic" src={image}/>
            </div>}
            <div className={`text-container ${!image && "margin"}`}>
                <img className="virgos" src="./images/virgo-icon.png"/>
                <h4>{children}</h4>
                <p>{writer}</p>
                <p>{occupation}</p>
            </div>
            
        </div>
    )
}