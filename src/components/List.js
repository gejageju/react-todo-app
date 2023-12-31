import React from 'react';
import Item from './Item'
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function List(){

    const [itemlist,setItemList]=useState([{item: 'ABC', isDone : true},{item: 'JKL', isDone : false}]);
    const [inputValue, setInputValue]=useState("");

    const handleAddItem=()=>{
        setItemList([...itemlist,{item: inputValue, isDone : false}]);
    }

    return(<div>
        <input type="text" value={inputValue} onChange={event=> setInputValue(event.target.value)}/>
        <button onClick={handleAddItem}>+</button>
        {itemlist.map( itemobj => <Item key={uuidv4()} item={itemobj.item} isDone={itemobj.isDone} />  )}
    </div>);
}

export default List;