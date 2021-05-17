import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// import ImportScript from './utils/headHooks';
import { colorSwitcher } from './utils/scripts/headerShadow';
import boardData from './fixtures/board';
import Header from './components/header';
import Grid from './components/grid';

/* const colorShadow = props => {
    ImportScript(colorSwitcher);
}; */

export default function App(params) {  
    return (
        <>
        <Router>
{/*             <Navbar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/boards" exact component={Home} />
                <Route path="/boardsData" exact component={Home} />
            </Switch>
 */}
            <Header.Title>
                Welcome to React course
            </Header.Title>
            <Header.Subtitle>Made by Zarubin Vsevolod</Header.Subtitle>
            <Header.Subtitle>HW 1</Header.Subtitle>
            <Grid responseContent={boardData} fetchURL={'https://431243-co32399.tmweb.ru/api/board'} fixture={'./fixtures/board'}>
            </Grid>
        </Router>
        </>
    );
}

