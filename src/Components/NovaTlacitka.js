import React, { useState } from "react";
import classes from "./NovaTlacitka.module.css"

function NovaTlacitka(props) {
    const [clickedId, setClickedId] = useState(-1)
    return(
        props.oznaceni.map((x,id)=>
        <button
        key={id}
        name={x}
        className={classes.actions}
        >
        {x}</button>)
    )
}

export default NovaTlacitka;