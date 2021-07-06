import React, { useEffect, useState } from 'react'
import SideMenu from '../common/SideMenu'
import Intro from './Intro'
import Intro2 from './Intro2'
import Projects from './Projects'

function Main() {
    const [show, setShow] = useState()
    useEffect(() => {
        setTimeout(() => {
            setShow(true);
        },600)
    },[])
    return (
        <>
        <SideMenu />
        <Intro show={show}/>
        <Intro2 show={show}/>
        <Projects show={show}/>
        </>
    )
}
export default Main

