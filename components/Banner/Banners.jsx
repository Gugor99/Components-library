import React from 'react'
import Banner from './Banner'

export default function Banners(){
    const titleArray = ["Update available", "Attention", "There is a problem with your application","Congratulations!"]/*???*/
    const defaultText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam."
    
    return(
        <>
            <Banner title={"Update available"}></Banner>
            <Banner theme= "warning" title={"Attention"}></Banner>
            <Banner theme= "error" title={"There is a problem with your application"}></Banner>
            <Banner theme= "success" title={"Congratulations!"}></Banner>
            <br/>
            <Banner title={"Update available"}>{defaultText}</Banner>
            <Banner theme= "warning" title={"Attention"}>{defaultText}</Banner>
            <Banner theme= "error" title={"There is a problem with your application"}>{defaultText}</Banner>
            <Banner theme= "success" title={"Congratulations!"}>{defaultText}</Banner>
        </>
    )
}