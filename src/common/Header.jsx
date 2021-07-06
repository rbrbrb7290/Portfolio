import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

function Header({title, color, history}) {
 
    const goBack = () => {
        history.goBack();
    }
    return (
        <Wrap color={color}>
            <LeftMenu onClick={goBack}>
                <GoBackButton src="/img/back.png"/>
            </LeftMenu>
            <Title>
                {title}  
            </Title>
        </Wrap>
    )
}

export default Header

const Wrap = styled.div`
    width: 100%;
    height: 4.5rem;
    background-color: #3b45ff;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`
const Title = styled.div`  
    font-size: 1.4rem;
    font-weight: bold;
    color: #FFF;
`
const RightMenu = styled.div`
    position: absolute;
    right: 1rem;
    margin-right: 1.5rem;
    @media all and (max-width: 600px) {
        margin-right: 1rem;
    }
`
const LeftMenu = styled(RightMenu)`
    left: 1rem;
`

const GoBackButton = styled.img`
    width: 3rem;
`
