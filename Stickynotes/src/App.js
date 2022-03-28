import React, { useState } from 'react';
import Card from './Card';
import Array from './Props';
import './App.css';
import Clock from './Clock'
import Todolist from './Todolist'
import Header from './Header'
import Inputpanel from './Inputpanel'
import Note from './Note'
import '../node_modules/bootstrap/dist/css/bootstrap.css';

const App = () => {

    const [items,setItems] = useState([]);

    const addnote= (contents) =>{
        setItems((prevobject)=>{
            return[...prevobject,contents];
        });
       
    };

    const action = (ids) =>{
        setItems(()=>{
            return(
                items.filter((currentvalue,index)=>{
                    return(index!==ids)
                })
            )
        })
    }
    return(
        <>
{/* 
    <div className="carddiv">
        {
        Array.map((value) => {
        return(
            <Card 
            imgscr = {value.image}
            title = {value.title}
            name = {value.name}
            />
            );
        })
        }
    </div>
    <Clock/>
    <Todolist/> */}
        <Header/> 
        <Inputpanel add={addnote}/>

        <div className="container-fluidj notes_container">
        {
            items.map((value,index) =>{
                return (
                    <Note
                        key={index}
                        id= {index}
                        title={value.title}
                        content={value.content}
                        click={action}
                    />
                )
            })
        }
       
      
        </div>
    
   
    
    </>
    );

}

export default App;