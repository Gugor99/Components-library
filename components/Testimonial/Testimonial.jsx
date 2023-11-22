import React from 'react'
import icon from '../../images/virgo-icon.png';
import profPic from '../../images/testiPic.png';

export default function Tenstimonial({children, writer, occupation, image= null}){
    return(
        <div className="test-container">
            {image && <div className="cropped">
                <img className="prof-pic" src={profPic}/>
            </div>}
            <div className={`text-container ${!image && "margin"}`}>
            <img className="virgos" src={icon}/>
                <h4>{children}</h4>
                <p>{writer}</p>
                <p>{occupation}</p>
            </div>
            
        </div>
    )
}
