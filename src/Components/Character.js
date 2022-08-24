import React from "react";
import "../App.css"

const Character = (props) => {

    return (
        <div className="chard-grid">
            <img src={props.char.image} alt="Oops I apparently suck at passing data" />
            <h2>{props.char.name}</h2>
            <h4>Species: {props.char.species}</h4>
            <h4>{props.char.status == 'alive' ? "Still kicking" : "Pushing daisies"}</h4>
        </div>
    )
}

export default Character;