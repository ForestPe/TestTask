import { useState } from 'react';

import { Modal, Button } from 'antd';

import AppInfo from '../appInfo/AppInfo';
import TasksList from '../tasksList/TasksList';
import WorkSpace from '../workSpace/WorkSpace';



import 'antd/dist/reset.css';

import './app.scss';

const App = (props) => {

    const [data, setData] = useState([
        {name: "Подумать о важном", descr: 'bla bla bla', date: new Date(2022, 2, 16).toLocaleDateString(), state: true, important: false, id: 1},
        {name: "Побывать в горах Индии", descr: 'bla bla bla', date: new Date(2021, 11, 16).toLocaleDateString(), state: false, important: false, id: 2},
        {name: "Нанять Петю на работу", descr: 'bla bla bla', date: new Date(2022, 12, 20).toLocaleDateString(), state: false, important: true, id: 3}
    ]);

    const [term, setTerm] = useState('');   
    const [filter, setFilter] = useState('all');
    const [maxId, setMaxId] = useState(4);


    function deleteItem(id) {
        setMaxId(maxId - 1);
        return setData(data.filter(item => item.id !== id))
    }

    function editItem(id) {
        // const itemId = id;
        // console.log(id)
        // data.map(item => {
        //     if (item.id === id) {
        //         return item;
        //     }
        // })
        return id;
    }

    const newItem = editItem;

    console.log(newItem);

    function addItem(name, descr) {
        setMaxId(maxId + 1);
        const newItem = {
            name: name,
            descr: descr,
            date: new Date().toLocaleDateString(), 
            state: false,
            important: false,
            id: maxId
        }

        const newArr = [...data, newItem];

        return setData(newArr);
        
    }

    function onToggleProp(id, prop) {
        setData(
            data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        )
    }

    function searchMus(items, term) {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.name.toLowerCase().indexOf(term) > -1
        })
    }

    function onUpdateSearchs(term) {
        setTerm(term);
    }

    function filterPost(items, filter) {
        switch (filter) {
            case 'important':
                return items.filter(item => item.important);
            case 'state':
                return items.filter(item => item.state);
            default:
                return items
        }
    }

    function onFilterSelect(filter) {
        setFilter(filter);    
    }

    // function onToggleEdit(id) {
    //         data.map(item => {
    //             if (item.id === id) {
    //                 return (
    //                     <>
    //                     <Button type="primary" onClick={() => setOpen(true)}>
    //                       Open Modal of 1000px width
    //                     </Button>
    //                     <Modal
    //                       title="Modal 1000px width"
    //                       centered
    //                       open={open}
    //                       onOk={() => setOpen(false)}
    //                       onCancel={() => setOpen(false)}
    //                       width={1000}
    //                     >
    //                       <p>some contents...</p>
    //                       <p>some contents...</p>
    //                       <p>some contents...</p>
    //                     </Modal>
    //                   </>
    //                 )
    //             }
    //         })


    //     console.log(id)


    
    // }


    const tasks = data.length;
    const state = data.filter(item => item.state).length;
    const visibleData = filterPost(searchMus(data, term), filter);
    

    return(
        <div className="app">
            <AppInfo
                tasks={tasks}
                state={state}
                onAdd={addItem}
            />

            <TasksList 
                data={visibleData}
                onDelete={deleteItem}
                onToggleProp={onToggleProp}
                // onToggleEdit={onToggleEdit}
                onUpdateSearchs={onUpdateSearchs}
                onFilterSelect={onFilterSelect}
                filter={filter}
                editItem={editItem}/>
                <WorkSpace data={data} editItem={editItem} newItem={newItem}/>
        </div>
    );

}

export default App;