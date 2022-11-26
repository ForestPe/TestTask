import { useState } from 'react';

import { Input } from 'antd';
import './searchPanel.scss';

const SearchPanel = ({onUpdateSearchs}) => {

    const [term, setTerm] = useState('');

    function onUpdateSearch(value) {
        const term = value;
        setTerm(term);
        onUpdateSearchs(term)
    }

    return(
        <Input 
            type="text" 
            placeholder="Найти задачу" 
            value={term} 
            onChange={(e) => onUpdateSearch(e.target.value.toLowerCase())}/>
    )

}

export default SearchPanel;
