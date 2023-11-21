import React from 'react'
import Testimonial from './Testimonial'

export default function Testimonials(){
    const defaultText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. "
    return(
        <div>
            <Testimonial image="./images/testiPic.png" writer="May Anderson" occupation="Workation, CTO" >{defaultText}</Testimonial>
            <Testimonial writer="May Anderson" occupation="Workation, CTO" >{defaultText}</Testimonial>
        </div>
    )
}