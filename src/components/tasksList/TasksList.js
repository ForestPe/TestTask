import TasksListItem from '../tasksListItem/TasksListItem';
import SearchPanel from '../searchPanel/SearchPanel';
import AppFilter from '../appFilter/AppFilter';

import './tasksList.scss';

const TasksList = ({data, onDelete, onToggleProp, onToggleEdit, onUpdateSearchs, onFilterSelect, filter, editItem}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return(
            <TasksListItem 
                key={id}
                {...itemProps}
                onDelete={() => onDelete(id)}
                onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
                onToggleEdit={(e) => onToggleEdit(id, e.currentTarget.getAttribute('data-toggle'))}
                editItem={(e) => editItem(id)}/>
            
        )   
    })

    return(
        <ul className="app-list list-group">
                <SearchPanel onUpdateSearchs={onUpdateSearchs}/>
                <AppFilter filter={filter} onFilterSelect={onFilterSelect}/>
            {elements}
        </ul>
    );
}

export default TasksList;