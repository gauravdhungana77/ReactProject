import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
function Item(props) {
    return (
        <>
            <DeleteIcon onClick={() =>{props.onSubmit1(props.id);} }/>
            <li >{props.item}</li>
        </>
    )
}

export default Item;
