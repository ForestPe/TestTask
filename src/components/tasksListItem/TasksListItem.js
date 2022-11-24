import './tasksListItem.scss';



const TasksListItem = (props) => {

    const {name, descr, date, onDelete, onToggleProp, state, important, editItem} = props;



    let classNames = 'list-group-item d-flex justify-content-between';
    if (state) {
        classNames += ' increase';
    }

    if (important) {
        classNames += ' like'
    }


    return(
        <li className={classNames}>
            <div className='main'>
                <span className='list-group-item-label' onClick={onToggleProp} data-toggle="important">{name}</span>
                <input type="text" className='description' defaultValue={descr}/>
            </div>
            <div className='about'>
            <input type="text" className='list-group-item-input' defaultValue={date}/>
            <div className="d-flex justify-content-center align-item-center">
                <button type="button"
                        className='btn-cookie btn-sm' 
                        onClick={onToggleProp}
                        data-toggle="state">
                        <i className='fas fa-check'></i>
                </button>
                <button type="button"
                        className='btn-cookie btn-sm' 
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