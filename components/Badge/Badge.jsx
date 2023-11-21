import React from 'react'


export default function Badge({color = "gray", shape= "square"}){
    
    return(
        <div className={`${color} ${shape} badge`}>
            <p>Badge</p>
        </div>
    )
}