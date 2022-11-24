import TasksAddForm from '../tasksAddForm/TasksAddForm';

import './appInfo.scss';

const AppInfo = ({tasks, state, onAdd}) => {
    
    return(
        <div className="app-info">
            <h1>WomanUp ToDo List</h1>
            <h2>Общее число делишек: {tasks}</h2>
            <h2>Выполненных делишек: {state}</h2>
            <TasksAddForm onAdd={onAdd}/>
        </div>
    );
}

export default AppInfo;