import React, { useState, useEffect } from 'react';
import './Card.css';


export default function Card({Plano, Titular, Matricula}) {

    return (
        <>
            <div className="card edit card__master">
                <div className="flag">
                    <span className="flag__image master"></span>
                </div>

                <div className="card__plano">
                    <span className="text">{Plano}</span>
                </div>

                <div className="card__info">
                    <div className="card__info--name">
                        <span className="title">Matricula</span>
                        <span className="text small">{Matricula}</span>
                        <span className="title">Titular</span>
                        <span className="text small">{Titular}</span>
                    </div>

                 </div>
            </div>
        </>
    )
}