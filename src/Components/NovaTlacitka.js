import React, {useState} from "react";
import classes from "./NovaTlacitka.module.css"

function NovaTlacitka() {
    function Nazev(props) {
        return (
            <div>
                <h2>Klikl jsi na: {clicked}</h2>
                <div>                
                    {props.oznaceni.map((x,id)=>
                    <button
                    key={id}
                    name={x}
                    className={classes.actions}
                    onClick={(e) => setClicked(e.target.innerText)}
                    >
                    {x}</button>)}
                </div>
            </div>
        )
    }

    const [clicked, setClicked]=useState();

    const ClickHandler = (x) => {
        return (
        //<p>Klikl jsi na tlacitko {x}</p>
        console.log('ahoj')
        )
    }

    return(
        <section>
            <div>
                <Nazev oznaceni={['a','b','c']}/>
            </div>
        </section>
    )
}

export default NovaTlacitka;