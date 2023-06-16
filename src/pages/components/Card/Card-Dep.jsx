import React, { useState, useEffect } from 'react';
import './Card.css';


export default function CardDep({NomeDep, Plano, matriculaDep}) {



    return (
        <>
            <div className="cardClient edit card__visa">
                <div className="flag">
                    <span className="flag__image visa"></span>
                </div>
                
                <div className="card__plano">
                    <span className="text">{Plano}</span>
                </div>

                <div className="card__info">
                    <div className="card__info--name">
                        <span className="title">Matricula</span>
                        <span className="text small">{matriculaDep}</span>
                        <span className="title">Dependente</span>
                        <span className="text small">{NomeDep}</span>
                    </div>

                 </div>
            </div>
        </>
    )
}