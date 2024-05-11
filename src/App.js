import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import Board from './components/Board/Board.js';
import TaskDetailPage from './components/TaskDetailPage/TaskDetailPage.js';
import './styles/main.css';
import './styles/header.css';
import './styles/board.css';
import './styles/footer.css';
import './styles/media.css';
import {initialTasks} from './data/tasks.js';
function App() {
    const [tasks, setTasks] = useState(initialTasks);

    const activeTasksCount = tasks.backlog.length + tasks.ready.length + tasks.inProgress.length;
    const finishedTasksCount = tasks.finished.length;


    return (<Router>
        <div className="App">
            <Header/>
            <Switch>
                <Route path="/tasks/:id" component={TaskDetailPage}/>
                <Route exact path="/" >
                    <Board tasks={tasks} setTasks={setTasks} />
                </Route>
            </Switch>
            <Footer activeTasksCount={activeTasksCount} finishedTasksCount={finishedTasksCount} />
        </div>
    </Router>);
}

export default App;