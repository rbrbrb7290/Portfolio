import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import ProjectDetail from '../components/ProjectDetail'
import Main from '../components/Main'

const GlobalStyle = createGlobalStyle`
    html, body, #root { 
        font-size: 14px;
        font-family: NanumSquare,sans-serif;
        width: 100%;
        height: 100%;
        margin: 0 auto;
        scroll-behavior: smooth;
        
    @media all and (max-width: 1200px) {
        font-size: 12px;
    }
    @media all and (max-width: 780px) {
        font-size: 10px;
    }
    @media all and (max-width: 480px) {
        font-size: 8px;
    }
}

`

function Routes() {
    return (
        <Router basename="/">
            <GlobalStyle />
            <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/project/:title/" component={ProjectDetail} /> 
                <Route component={Main} />
            </Switch>
        </Router>
    )
}

export default Routes