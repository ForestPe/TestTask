import { Button } from 'antd';

import './appFilter.scss';

const AppFilter = (props) => {

    const buttonsData = [
        {name: 'all', label: 'Все делишки'},
        {name: 'star', label: 'Важные'},
        {name: 'check', label: 'Завершенные'}
    ];

    const buttons = buttonsData.map(({name, label}) => {
        const active = props.filter === name;
        const clazz = active ? 'primary' : 'default';
        
        return (
            <Button type={`${clazz}`} 
                className='btn' 
                key={name} 
                onClick={() => props.onFilterSelect(name)}>{label}</Button>
        )
    })

    return(
        <div className="btn-group">
            {buttons}
        </div>
    );
}

export default AppFilter;