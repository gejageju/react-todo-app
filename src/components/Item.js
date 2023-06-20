import React from "react";

function Item(props)
{   //console.log(props);
    return(
        <div>
            <p className={props.isDone? 'strike-through' : ''}>{props.item}</p>
        </div>
    )
}

export default Item;