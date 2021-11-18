import React from "react";
import { useState} from 'react';
import classes from "./ButtonGroup.module.css";


function ButtonGroup({nazvy, doSomethingAfterClick}) {
    const [clickedId, setClickedId] = useState(-1)

    const clickHandler = (id,e) =>
        {
            setClickedId(id);
            doSomethingAfterClick(e);
            console.log(e.target.name)
        }
    
    return (
        nazvy.map((element, id)=>
         <button
         key={id} 
         onClick={(e) => clickHandler(id,e)} 
         name={element}
         className={clickedId===id? classes.active : classes.control}>
         {element}</button>)
    )
}

export default ButtonGroup;