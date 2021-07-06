import React, { Fragment, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import Header from '../common/Header'
import MyProject from '../data/Project'

const ProjectDetail = () => {
    const history = useHistory()
    const [project, setProject] = useState(history.location.state)

    const goOtherProject = (projectInfo) => {
        const {title } = projectInfo
        history.push({
            pathname: `/project/${title}/`,
            state: projectInfo
        })
    }
    useEffect(() => {
        setProject(history.location.state)
    },[history.location.state])

    return (
            <>
            <Header title={project.title} history={history}/> 
            <Wrap>
                <ProjectWrap>
                    <ProjectInfo>   
                        <h2>{project.title}</h2>
                        <h5>{project.subTitle}</h5>
                        <div>
                            <span style={{fontWeight: "bold"}}>기간:  </span> {project.term} <br></br>  
                            <span style={{fontWeight: "bold"}}>유형:  </span> {project.type} <br></br>
                            <span style={{fontWeight: "bold"}}>사용 기술:  </span> {project.skill} <br></br>    
                            <span style={{fontWeight: "bold"}}>내용  </span>  {project.desc} <br></br> 
                        </div>
                    </ProjectInfo>
                {
                    project.images.map((data, index) => {
                        return (
                            <>
                            <ProjectImgWrap>
                                <Img src={data.path} />
                                <p>{data.desc}</p>
                            </ProjectImgWrap>
                            </>
                        )
                    })
                }
                <p style={{alignSelf: "flex-start"}}>깃헙 <a href={project.git} target="_blank" rel="noopener noreferrer"> {project.git}</a> </p>
                </ProjectWrap> 
                <Side>
                {MyProject.list.map((data, index)=> {
                        return(
                            <Contents 
                                key={index}  
                                onClick={() => goOtherProject(data)}  
                            >
                                <Thumbnail 
                                    alt="썸네일"
                                    src={data.thumbnail}
                                />
                                <ul>
                                    <Title>{data.title}</Title>
                                    <Ep>{data.desc}</Ep>
                                </ul>
                            </Contents>
                        ) 
                    })}
                </Side>
            </Wrap>
        </>
    )
}

export default ProjectDetail 

const Wrap = styled.div`
    display: flex;
    justify-content: center;
    padding: 1rem;
    @media all and (max-width: 1200px) {
        flex-direction: column;
    }
`
const ProjectWrap = styled(Wrap)`
    flex: 1;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 14px;
    @media all and (max-width: 1200px) {
        width: 100%;
    }
`
const ProjectInfo = styled.div`
    width: 55rem;
    max-width: 90%;
`
const ProjectImgWrap = styled(ProjectInfo)`

`
const Img = styled.img`
    width: 100%;
    height: auto;
`
const Side = styled.div`    
    display: flex;
    flex-direction: column;
    /* width: 20%; */
    height: 100%;
    overflow: auto;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
        display: none;
    }
    @media all and (max-width: 1200px) {
        width: 100%;
        height: 40rem;
    }
    @media all and (max-width: 600px) {
        height: 30rem;
    }
`
const Contents = styled.div`
    display: flex;
    padding: 1rem;
    margin-bottom: 1rem;
    border-bottom: solid 1px #e8e8e8;
    &:hover {
        -webkit-filter: brightness(90%);
        -webkit-transition: all 1s ease;
        -moz-transition: all 1s ease;
        -o-transition: all 1s ease;
        -ms-transition: all 1s ease;
        transition: all 0.5s ease;
        -ms-transform: scale(1.05);
        -webkit-transform: scale(1.05);
        transform: scale(1.05);
    }
`
const Thumbnail = styled.img`
    width: 10rem;
    height: 8rem;
    object-fit: cover;
    @media all and (max-width: 1200px) {
        width: 9rem;
        height: 7rem;
    }
    @media all and (max-width: 600px) {
        width: 8rem;
        height: 6rem;
    }
`
const Title = styled.li`
    font-size: 1rem;
    list-style: none;
    margin-left: -1rem;
`
const Ep = styled(Title)`
    font-size: 0.8rem;
    color: #8e8e8e;
`

const VideoInfo = styled.div`
    padding: 0.8rem;
    border-bottom: solid 1px #e8e8e8;
`