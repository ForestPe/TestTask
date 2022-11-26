import { useState, useEffect } from 'react';

import { Input, Button } from 'antd';
import './workSpace.scss';

const WorkSpace = ({item, setItem, onAdd, data, deleteItem}) => {

    const [name, setName] = useState('');
    const [descr, setDescr] = useState('');



    useEffect(() => {
        setName(item.name ? item.name : '')
        setDescr(item.descr ? item.descr : '')
        
    },[item])

    function onEdit(e) {
        e.preventDefault();
        if (name && name.length > 3) {
            onAdd(name, descr);
            setName('');
            setDescr('');
            setItem('')
            // deleteItem(item.id);
        }

        
    }

    function onNameChange(value) {
        console.log(value)
        setName(value)
    }

    function onDescrChange(value) {
        console.log(value)
        setDescr(value)
    }

    function onClose(e) {
        e.preventDefault();
        setName('');
        setDescr('')
        setItem('')
    }

    return (
        <div className='workSpace'>
            <form>
                <div className='wsInputs'>
                    <Input className='wsInput wsInputName' type='text' name='name' onChange={(e) => onNameChange(e.target.value)} value={name}/>
                    <Input className='wsInput wsInputDescr' type='text' name='descr' onChange={(e) => onDescrChange(e.target.value)}  value={descr}/>
                </div>
                <div className='wsBtns'>
                    <Button className='wsBtn' onClick={(e) => onClose(e)}>Закрыть</Button>
                    <Button className='wsBtn' onClick={(e) => onEdit(e)}>Сохранить</Button>
                </div>
            </form>
        </div> 
        
    )
}

export default WorkSpace;