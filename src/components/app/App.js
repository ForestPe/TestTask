import { useState } from 'react';

import AppInfo from '../appInfo/AppInfo';
import TasksList from '../tasksList/TasksList';
import WorkSpace from '../workSpace/WorkSpace';

import 'antd/dist/reset.css';

import './app.scss';

const App = (props) => {

    const [data, setData] = useState([
        {name: "Подумать о важном", descr: 'Кто я? а чего я хочу?', date: new Date(2022, 2, 16).toLocaleDateString(), check: true, star: false, id: 1},
        {name: "Побывать в горах Индии", descr: 'Понять кто я и чего я хочу', date: new Date(2023, 11, 16).toLocaleDateString(), check: false, star: false, id: 2},
        {name: "Нанять Петю на работу", descr: 'Ну точно нельзя проходить мимо этого парня!', date: new Date(2022, 11, 20).toLocaleDateString(), check: false, star: true, id: 3}
    ]);

    const [term, setTerm] = useState('');   
    const [filter, setFilter] = useState('all');
    const [maxId, setMaxId] = useState(4);
    const [item, setItem] = useState('');

    function deleteItem(id) {
        setMaxId(maxId - 1);
        return setData(data.filter(item => item.id !== id))
    }

    function editItem(id) {
        console.log(id)
        data.map(item => {
            if (item.id === id) {
                setItem(item);
            }    
        })
    }


    function addItem(name, descr, id) {
        setMaxId(maxId + 1);
        const newItem = {
            name: name,
            descr: descr,
            date: new Date().toLocaleDateString(), 
            check: false,
            star: false,
            id: id ? id : maxId
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

    function searchTask(items, term) {
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
            case 'star':
                return items.filter(item => item.star);
            case 'check':
                return items.filter(item => item.check);
            default:
                return items
        }
    }

    function onFilterSelect(filter) {
        setFilter(filter);    
    }

    const tasks = data.length;
    const check = data.filter(item => item.check).length;
    const visibleData = filterPost(searchTask(data, term), filter);
    

    return(
        <div className="app">
            <AppInfo
                tasks={tasks}
                check={check}
            />

            <TasksList 
                data={visibleData}
                onDelete={deleteItem}
                onToggleProp={onToggleProp}
                onUpdateSearchs={onUpdateSearchs}
                onFilterSelect={onFilterSelect}
                filter={filter}
                editItem={editItem}
                onAdd={addItem}
            />

            {item ? <WorkSpace
                        data={data} 
                        item={item}
                        setItem={setItem} 
                        onAdd={addItem} 
                        deleteItem={deleteItem}/> : null}

        </div>
    );

}

export default App;