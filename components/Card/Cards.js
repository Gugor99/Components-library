import React from 'react'
import Card from './Card'
import { IoBugOutline, IoBulbOutline, IoCartOutline } from "react-icons/io5";

export default function Cards(){
    return(
        <>
            <Card color="green" icon={IoBugOutline()} title={"Bugs"} image={"https://images.unsplash.com/photo-1611049742877-bd705839ad6d?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue.</Card>
            <Card icon={IoCartOutline()} title={"Buy bugs"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue.</Card>
            <Card color="yellow" icon={IoBulbOutline()} title={"Think bugs"} />
        </>
    )
}