import './tasksListItem.scss';

const TasksListItem = (props) => {

    const {name, descr, date, onDelete, onToggleProp, check, star, editItem} = props;

    let classNames = 'list-group-item';
    if (check) {
        classNames += ' check';
    }

    if (star) {
        classNames += ' star'
    }

    return(
        <li className={classNames}>
            <div className='main' onClick={onToggleProp} data-toggle="star">
                <span className='listName'>{name.length > 30 ? name.slice(0, 30) + '...' : name.slice(0, 30)}</span>
                <span className='listDescr'>{descr.length > 45 ? descr.slice(0, 45) + '...' : descr.slice(0, 45)}</span>
            </div>
            <div className='about'>
            <span className='listDate'>{date}</span>
            <div className="listBtns">
                <button type="button"
                        className='btn-check btn-sm' 
                        onClick={onToggleProp}
                        data-toggle="check">
                        <i className='fas fa-check'></i>
                </button>
                <button type="button"
                        className='btn-pen btn-sm' 
                        onClick={editItem}
                        data-toggle="done">
                        <i className='fas fa-pen'></i>
                </button>
                <button type="button"
                        className='btn-trash btn-sm' 
                        onClick={onDelete}>
                        <i className='fas fa-trash'></i>
                </button>
                <i className='fas fa-star'></i>
            </div>
            </div>
        </li>
    );
}

export default TasksListItem;