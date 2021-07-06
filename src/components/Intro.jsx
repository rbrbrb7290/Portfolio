import React from 'react'
import styled from 'styled-components'

function Intro({show}) {
    return (
        <Wrap id="intro">
            <IntroWrap show={show}>
                <h2>PortFolio</h2> 
                <Profile>
                    <ProfileLeft>
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
                    </ProfileLeft>
                    <ProfileRight>
                        <ImgWrap show={show}>
                            <Img src="data:image/png;base64,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"/>
                        </ImgWrap>
                        <div>

                        </div>
                    </ProfileRight>
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
    display: flex;
    flex-wrap: wrap;
    padding: 2rem;
`
const ProfileLeft = styled.div`
    flex: 1 1 auto;
`
const ProfileRight = styled(ProfileLeft)`
    display: flex;
    /* justify-content: flex-end; */
    align-items: flex-end;
`

const ImgWrap = styled.div`
    width: 25rem;
    height:25rem;
    border-radius: 50%;
    background-color: #FFF;
    text-align: center;
    padding: 1rem;
    opacity: 0;
    ${props => props.show? `
       opacity: 1;
    ` : ""}
   -webkit-transition: opacity 4s;
    transition: opacity 4s;
    @media all and (max-width: 780px) {
        width: 20rem;
        height:20rem;
    }
    @media all and (max-width: 480px) {
        width: 15rem;
        height:15rem;
    }
`
const Img = styled.img`
    width: 95%;
    height: 95%;
    border-radius: 50%;
    object-fit: cover;
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
    margin-bottom: 5rem;
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