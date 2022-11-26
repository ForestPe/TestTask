import { useState } from 'react';
import { Button, Modal, Input } from 'antd';

import './tasksAddForm.scss';

const TasksAddForm = ({onAdd}) => {

    const [name, setName] = useState('');
    const [descr, setDescr] = useState('')
    const [open, setOpen] = useState(false);

    const showModal = () => {
      setOpen(true);
    };

    const handleOk = () => {
        setOpen(false);
    };

    const handleCancel = () => {
      setOpen(false);
    };

    function onNameChange(value) {
        setName(value)
    }

    function onDescrChange(value) {
        setDescr(value)
    }

    function onSubmit(e) {
        e.preventDefault();
        if (name && name.length > 3) {
            onAdd(name, descr);
            setName('');
            setDescr('');
            handleCancel();
        }
    }

    return(
        <>
        <Button onClick={showModal}>
            Добавить
        </Button>
        <Modal
            open={open}
            title="Добавьте новую задачу"
            onOk={handleOk}
            onCancel={handleCancel}
            footer={[]}>
            <div className="app-add-form">
                <form 
                    className="add-form">
                    <Input type="text"
                        placeholder='Название задачи' 
                        name='name'
                        value={name}
                        onChange={(e) => onNameChange(e.target.value)}/>
                    <Input type="text"
                        placeholder='Описание'
                        name='descr'
                        value={descr}
                        onChange={(e) => onDescrChange(e.target.value)}/>
                    <Button className='addFormBtn' onClick={(e) => onSubmit(e)}>Добавить</Button>
                </form>
            </div>
        </Modal>
        </>
    );

}

export default TasksAddForm;
