import React from 'react';
import {useState} from 'react';

function Garaz() {
    return (
        <>
            <h1>Co mam v garazi?</h1>
            <Auto znacka='Ferrari' model='combi'/>
        </>
    )
    function Auto(props) {
        const [oblibeneAuto, setOblibeneAuto] = useState("");
        const auto1Nazev='Ford';
        const auto1Model="sedan";
        const auticko= {nazev:"renault", model:'kombik'};
        const auta=['Ford', 'Ferrari', 'Renault']
        const celkem=[
            {id:1, nazev: 'ford', model: 'sedan'},
            {id:2, nazev: 'ferrari', model: 'combi'},
            {id:3, nazev: 'renault', model: 'combi'},
        ]
        function Seznam(props) {
            return <li>Auto: {props.znacka}</li>
        }

        return (
            <section>
                <p>Znacka: {auto1Nazev}, model: {auto1Model}</p>
                <p>Dalsi je: {props.znacka}, model: {props.model}</p>
                <p>A posledni je: {auticko.nazev} v modelu: {auticko.model}</p>
                <p>Mas {auta.length} auta.</p>
                <h2>Seznam aut:</h2>
                <ul>
                    {auta.map((auto) => <Seznam znacka={auto}/>)}
                </ul>
                <ul>
                    {auta.map((auto) => <li>{auto}</li>)}
                </ul>
                <ul>
                    {celkem.map((auto) => <Seznam key={auto.id} znacka={auto.nazev} />)}
                </ul>
                <p>Moje oblibene auto je: {oblibeneAuto}</p>
                <button type='button' onClick={()=> setOblibeneAuto("Ford")}>Ford</button>
                <button type='button' onClick={()=> setOblibeneAuto("Ferrari")}>Ferrari</button>
                <button type='button' style={{backgroundColor: "red"}} onClick={()=> setOblibeneAuto("Renault")}>Renault</button>
            </section>
        )
    }
}

export default Garaz;