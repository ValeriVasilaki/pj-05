import React from 'react';

const Footer = ({activeTasksCount, finishedTasksCount}) => {
    return (<footer className="footer">
            <span>Active tasks: {activeTasksCount}</span>
            <span>Finished tasks: {finishedTasksCount}</span>
            <span className="copy">Kanban board by Valery, 2024</span>
        </footer>);
}
export default Footer;