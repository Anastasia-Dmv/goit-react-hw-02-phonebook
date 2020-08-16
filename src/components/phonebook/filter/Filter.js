import React from 'react';
import style from './filter.module.css';

export default function Filter({value, onChangeFilter}) {
    return (
        <div>
            <input  className={style.input} type="text" value={value} onChange={e=>onChangeFilter(e.target.value)}/>
        </div>
    )
}
