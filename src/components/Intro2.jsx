import React from 'react'
import styled from 'styled-components'

function Intro2({show}) {
    return (
        <Wrap id="intro2">
            <IntroWrap show={show}>
                <h2>Skill</h2> 
                <Profile>
                 <Title show={show}></Title>
                 <Info show={show}>Java</Info>
                 <Info show={show}>Javascript</Info>
                </Profile>
            </IntroWrap>
        </Wrap>
    )
}

export default Intro2

const Wrap = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    color: #FFF;
`
const IntroWrap = styled.div`
    flex: 1;
    opacity: 0.2;
    width: 1rem;
    height: 1rem;
    padding: 2rem;
    margin: 0 auto;
    position: absolute;
    z-index:2;
    top: -150%;
    background-color: #3b45ff;
    ${props => props.show?  `
       opacity: 1;
        top: 5%;
        width: 100%;
        height: 70%;
    ` : ""}
    -webkit-transition: width 5s ,opacity 3s;
    -moz-transition: width 5s ,opacity 3s;
    -o-transition: width 5s , opacity 3s;
    -ms-transition:width 5s , opacity 3s;
    transition: width 1.5s, opacity 1s;
`
const Profile = styled.div`
    width: 100%;
    height: auto;
    padding: 2rem;
`
const Title = styled.div`
    font-size: 4rem;
    width: 100%;
    margin-bottom: 2rem;
`
const Info = styled.div`
    font-size:1.2rem;
    flex: 1 1 15rem;
    opacity: 0;
    ${props => props.show? `
       opacity: 1;
    ` : ""}
   -webkit-transition: opacity 1.5s;
    transition: opacity 4s;
    margin-bottom: 2rem;
`