import React from 'react';
import { useState } from 'react';

function Ahoj(props) {
    const myArray=['apple', 'banana', 'pineapple'];
    const myArray2=['jablko', 'hruska', 'ananas'];
    const vypis=myArray2.map(element=><p>{element}</p>);
    let x=0;
    function buttonHandler() {
        alert("zmacknuto")
    }
    const buttonHandler2 = () => {alert('zmacknuto2')}
    const buttonHandler3 = (a) => {alert(a)}
    const nadpish2=(x===0? "Hello" : "Goodbye")

    const [color,setColor]=useState();
    const text = 'jsem barva '+props.color;
    console.log(text)


    return (
        <section>
            <h1>Ahoj, mam {2+3} {props.color} psu</h1>
            <h2>{nadpish2}</h2>
            <h3>{x===0? ("ahoj, jsem barva "+props.color) : 'nashle'}</h3>
            <div>{myArray.map(element=><p>{element}</p>)}</div>
            <div>{vypis}</div>
            <div>
              <button onClick={buttonHandler}>Zmackni</button>  
            </div>
            <div>
                <button onClick={buttonHandler2}>Zmackni2</button>
            </div>
            <button onClick={() => buttonHandler3("ted")}>Zmackni3</button>
            <Nashle />
            <div>
                <h2>Mam rada barvu: {color}</h2>
                <button onClick={(e)=>setColor(e.target.innerText)}>Blue</button>
                <button onClick={(e)=>setColor(e.target.innerText)}>Red</button>
                <button onClick={(e)=>setColor(e.target.innerText)}>Green</button>
            </div>
        </section>
    )
    function Nashle() {
        return (
            <>
            <h4>Zatim nashle</h4>
            </>

        )
    }
}

export default Ahoj;