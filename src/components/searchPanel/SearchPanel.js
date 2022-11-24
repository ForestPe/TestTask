import { useState } from 'react';

import './searchPanel.scss';

const SearchPanel = ({onUpdateSearchs}) => {


    const [term, setTerm] = useState('');

    function onUpdateSearch(value) {
        const term = value;
        setTerm(term);
        onUpdateSearchs(term)
    }

    return(
        <input 
            type="text"
            className="form-control search-input"
            placeholder="Найти задачу"
            value={term}
            onChange={(e) => onUpdateSearch(e.target.value.toLowerCase())}/>
    )

}

export default SearchPanel;
