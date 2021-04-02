import React, { useState } from 'react'
import styled from 'styled-components'

function SideMenu() {

    const [active , setActive] = useState(false)
    const scrollPage = (elementId) => {
        setActive(elementId)
        window.location.href = elementId
    }

    const menu = [
        "#intro", 
        "#intro2",
        "#project"
    ]

    return (
        <Wrap>
        {
            menu.map((elementId , index) => {
                return (
                    <Button 
                        key={index}
                        onClick={() => scrollPage(`${elementId}`)} 
                        active={elementId === active ? true: false }>
                    </Button>
                )
            })
        }
        </Wrap>
    )
}

export default SideMenu

const Wrap = styled.div`
    position: fixed;
    top: 50%;
    right: 1rem;
    z-index: 1000;
`
const Button = styled.div`
    cursor: pointer;
    background-color:${props => props.active? "#3b45ff;" : "#FFF"};
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    margin-bottom: 1rem;
    border: 0.1px solid #cecece;
    /* box-shadow : 1px 1px 1px 1px #000 ; */
`