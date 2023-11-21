import React from 'react'
import Badge from './Badge'

export default function Badges(){
    const colorsArray = ["green","purple","indigo","blue","yellow","pink","red"]
    
    return(
        <>
            <Badge />
            {colorsArray.map(color => <Badge key={color} 
                                        color={color} /> )}
            <br/>
            <br/>
            <Badge shape="round"/>
            {colorsArray.map(color => 
                            <Badge key={color} 
                            color={color} 
                            shape="round" /> )}
        </>
    )
}