import { useState } from 'react';
import { Button, Modal } from 'antd';

import './tasksAddForm.scss';

const TasksAddForm = ({onAdd}) => {

    const [name, setName] = useState('');
    const [descr, setDescr] = useState('')
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);

    const showModal = () => {
      setOpen(true);
    };

    const handleOk = () => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setOpen(false);
      }, 3000);
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
                    className="add-form d-flex"
                    onSubmit={(e) => onSubmit(e)}>
                    <input type="text"
                        className='form-control new-post-label'
                        placeholder='Название задачи' 
                        name='name'
                        value={name}
                        onChange={(e) => onNameChange(e.target.value)}/>
                    <input type="text"
                        className='form-control new-post-label'
                        placeholder='Описание'
                        name='descr'
                        value={descr}
                        onChange={(e) => onDescrChange(e.target.value)}/>
                    {/* <button onClick={handleCancel}>
                        Закрыть
                    </button> */}
                    <button type='submit'
                            className='btn btn-outline-light'
                            >Добавить</button>

                </form>
            </div>
        </Modal>
        </>
    );

}

export default TasksAddForm;
