import React from 'react';
import "../scss/pages/_MainComponent.scss";

function MainComponent() {
    const schoolID = "20172017";

    return (
        <div className="main-comp">
            <img src="img/schoolLogo.png" className="comp-img"/>
            <div className="comp-schoolID">{schoolID}</div>
        </div>
    )
}

export default MainComponent;