import { useState } from 'react';
import TasksListItem from '../tasksListItem/TasksListItem';

import './workSpace.scss';

const WorkSpace = ({data, editItem, id, newItem}) => {

    function getElement(id) {
        data.map(item => {
            if (item.id === id){
                return item
            }
        })
    }
    return (
        <div className='workSpace'>
            {/* <h1>olla</h1>
            <input onClick={(e) => editItem(e)} defaultValue={data[0].name}/>
            <input onClick={(e) => editItem(e)} defaultValue={data[0].descr}/> */}
            <TasksListItem name={data[0].name} descr={data[0].descr}/>
            {newItem}
        </div>
    )
}

export default WorkSpace;