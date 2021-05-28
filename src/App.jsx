import React, { useState } from 'react';
import { render } from 'react-dom';

import Todo from './Todo';

const App=()=>{
    //this is hooks, this is defination of hooks it allow us to use state
    const [inputlist,setinputlist]=useState("");
    const [items,setitems]=useState([]);//i passed [] to add a array in this state

    const itemevent=(event)=>{
         setinputlist(event.target.value);
    };
    const listofitem=()=>{
        setitems((olditems)=>{
            return [...olditems,inputlist];
        });
        setinputlist("");
    };

    //delete an item
    const deleteitems=(id)=>{
        console.log("delete");

        setitems((olditems)=>{
            return olditems.filter((arrele,index)=>{
              return index !==id;
            });
        });
        };
    
    return(
        <>
        <div className="main_div">
            <div className="center_div">
                <br/>
                <h1>ToDo List</h1>
                <br/>
                <input type="text" 
                placeholder="Add items"
                value={inputlist}
                onChange={itemevent}
                />
                <button onClick={listofitem} >+</button>
                <ol>
                   {/* <li>{inputlist}</li>*/}
                   {
                   items.map((itemval,index)=>{
                     return (<Todo 
                     key= {index} 
                     id={index}
                     text={itemval} 
                     onSelect={deleteitems}
                     />
                     );
                   })}
                </ol>
            </div>

        </div>
        </>
    );
    
};
export default App;
