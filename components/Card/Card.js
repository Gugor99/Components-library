import React from 'react'
import { IoCloudDownloadOutline } from "react-icons/io5";

export default function Card({children = null, 
                                icon= IoCloudDownloadOutline(), 
                                title="Download", 
                                image= null, 
                                color= "default-color"}){
    return(
        <div className="card-container">
            <div className={`card-icon ${color} ${!image && "bottom"}`}>{icon}</div>
            <h2>{title}</h2>
            <p>{children}</p>
            {image && <img src={image}/>}
        </div>
    )
}