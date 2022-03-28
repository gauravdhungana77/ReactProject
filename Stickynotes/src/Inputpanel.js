import React, { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './Inputpanel.css'
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';

function Inputpanel(props) {
    const [contents,setTitle]=useState({
        title:"",
        content:"",
    });

    const create = (event)=>{
            // const value=event.target.value;
            // const name=event.target.name;  
            const {value,name}=event.target;
         
        setTitle((object)=>{
           return{
               ...object,
               [name]:value
           }

        })
    }
const addEvent = () =>{
    if(contents.title!=="" && contents.content!==""){
    props.add(contents);
    setTitle({
        title:"",
        content:"",
})
    }
    else{
        alert("Type your note first")
    }
}

    return (
        <>
            <div className="container mt-3">
                <div className="row d-flex justify-content-center ">
                    <div className=" col-md-5  main_div ">
                        <input className=" title"
                            name="title"
                            value={contents.title}
                            type="text"
                            autoComplete="off"
                            placeholder="Title"  
                            onChange={create}
                        
                            /><br></br>

                        <textarea
                            placeholder="Enter yout note" 
                            cols="35" 
                            rows="3"
                            name="content"
                            onChange={create}
                            value={contents.content}
                        />

                        <Button onClick={addEvent} variant="contained" color="primary" ><AddIcon className="plus"/></Button>
                    </div>
                
                </div>
        
            </div>
        </>
    )
}

export default Inputpanel;
