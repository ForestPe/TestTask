import './appInfo.scss';

const AppInfo = ({tasks, check}) => {
    
    return(
        <div className="app-info">
            <h1>ToDo List</h1>
            <div>
                <h2>Общее число делишек: {tasks}</h2>
                <h2>Выполненных делишек: {check}</h2>
            </div>
        </div>
    );
}

export default AppInfo;