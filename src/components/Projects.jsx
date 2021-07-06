import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import project from '../data/Project'

function Project({show}) {
    const history = useHistory()
    const goProject = (project) => {
        history.push({
            pathname: `/project/${project.title}/`,
            state: project
        })
    }
    return (
        <Wrap id="project">
            <ProjectWrap>
            {
                project.list.map( (data, index) => {
                    return (
                        <Thumbnail 
                            key={index}
                            show={show}   
                            onClick={() => goProject(data)}
                        >
                            <Img src={data.thumbnail} alt={data.title}></Img>
                        <Title>{data.title}</Title>    
                        </Thumbnail>
                    )
                })
            }      
            </ProjectWrap>
        </Wrap>
    )
}
export default Project

const Wrap  = styled.div` 
    width:100%;
    height:100%;
`
const ProjectWrap  = styled.div` 
    display:  flex;
    flex-wrap: wrap;  
    padding: 1.5rem;
`

const Thumbnail = styled.div`
    flex: 0 0 20%;
    padding: 0.9rem;
    position: relative;
    &:hover {
        -webkit-filter: brightness(70%);
        -webkit-transition: all 1s ease;
        -moz-transition: all 1s ease;
        -o-transition: all 1s ease;
        -ms-transition: all 1s ease;
        transition: all 1s ease;
        -ms-transform: scale(1.1);
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
    &:last-child{
        margin-right: auto;
    }
    @media all and (max-width: 780px) {
        flex: 0 0 33%;
    }
`

const Title = styled.span`
    font-size: 2rem;
    font-weight: bold;
    position: absolute;
    left: 1rem;
    bottom: 1rem;
    color: #FFF;
    @media all and (max-width: 780px) {
        font-size: 2rem;
    }
    @media all and (max-width: 480px) {
        font-size: 1.5rem;
    }
`
const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`