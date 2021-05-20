import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/pages/home/home";
import BoardRender from "./components/pages/boardGrid";
import TasksRender from "./components/pages/boardTasks";
import { boardsFixture, boardsURL } from "./components/pages/board/board";
import { tasksFixture, tasksURL } from "./components/pages/tasks/tasks";
// import ImportScript from './utils/headHooks';
// import { colorSwitcher } from "./utils/scripts/headerShadow";

/* const colorShadow = props => {
    ImportScript(colorSwitcher);
}; */

export default function App(params) {
    return (
        <>
            <Router>
                <Switch>
                    <Route path={["/", "/home"]} exact component={Home} />
                    <Route
                        path={["/boards", "/hw1", "/hw2", "/hw5"]}
                        exact
                        render={() => <BoardRender fetchURL={boardsURL} fixture={boardsFixture} />}
                    ></Route>
                    <Route
                        path={["/tasks", "/board/TB1"]}
                        render={() => <TasksRender fetchURL={tasksURL} fixture={tasksFixture} />}
                    ></Route>
                </Switch>
            </Router>
        </>
    );
}
