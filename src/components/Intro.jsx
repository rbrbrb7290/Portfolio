import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

function Intro() {
    const [show, setShow] = useState()
    useEffect(() => {
        setTimeout(() => {
            setShow(true);
        },600)
    },[])

    return (
        <Wrap id="intro">
            <IntroWrap show={show}>
                <h2>PortFolio</h2> 
                <Profile>
                 <Title show={show}>
                    심리학자가 꿈이었던 <br></br>
                    문돌이는 <br></br>
                    개발자가 되었다.
                 </Title>
                 <Info show={show}>
                  <p>안녕하세요,</p>
                  <p>인문계 고등학교 재학 3년동안 심리학과 진학을 준비했지만, </p>
                  <p>대기 순번 300번대를 받아 실패를 맛보았던,</p>
                  <p>올해 1년차 개발자 오현규의 포트폴리오입니다.</p>
                 </Info>
                </Profile>
            </IntroWrap>
        </Wrap>
    )
}

export default Intro

const Wrap = styled.div`
    width: 100%;
    height: 100vh;
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
        height: 90%;
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
    opacity: 0;
    ${props => props.show? `
       opacity: 1;
    ` : ""}
   -webkit-transition: opacity 1.5s;
    transition: opacity 1.5s;
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