import React, { useState, useEffect } from 'react';
import './Card.css';
import './Verso.css';


export default function Verso() {

    const [dep, setDep] = useState();

    useEffect(() => {

            async function loadDependentes(){
            const banco = localStorage.getItem('api')
            const request = await fetch(`http://jiapi-wpp.vps-kinghost.net:3003/searchDependentes?DataBaseName=sigef_web_${banco}&MAT=11000`)
            const result = await request.json();
            setDep(result);
        }
        loadDependentes()
    }, [])

    return (
        <>
            <div className="cardClient edit card__master">
            <span className="text-verso">Dependentes</span>
                <div className="flag">
                    <span className="flag__image master"></span>
                </div>

                <div className="card-verso">
                </div>

                <div className="card__info">
                    <div className="card__info--name">
                        {dep?.map((element) =>
                        <span className="text small">{element.DEPC_NOME}</span>
                        )}
                    </div>

                 </div>
            </div>
        </>
    )
}