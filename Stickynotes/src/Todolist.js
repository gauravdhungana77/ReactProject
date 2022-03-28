import React, { useState } from 'react';
import './index.css'
import Item from './Item'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

function Todolist() {
    const [value1,setItem]=useState("");
    const [item,setItem2] = useState([]);

    const func= () =>{
        if(value1!==""){
        setItem2((values) =>{
            return [...values,value1];
        });
    }else{alert("Enter first")}
        setItem("");
    };

    const functiondelete = (ids) =>{
        setItem2((arrayobject) =>{
            return arrayobject.filter((itemname,itemindex) =>{
                return itemindex !== ids;
            });
            
        });
    };


    return (
        <>
        <div className="todolist">
            <div className="innerdiv">
                <h1>Todolist</h1>
                <input type="text" placeholder="Enter items" value ={value1} onChange = 
                {e => setItem (e.target.value)} />
                <Button className="add" onClick = {func}>{< AddIcon/>}</Button>

                <ol style={{marginTop:10}}>
                {
                    item.map((valuee,i) =>{
                       
                    
                        return (
                      
                           <Item
                               key={i}
                               id={i}
                               item={valuee}
                               onSubmit1={functiondelete}

                           />
                            
                       
                        );
                        })
                    
                }
                   
                </ol>
            </div>
          
        </div>
        </>
    )

  
}

export default Todolist;
