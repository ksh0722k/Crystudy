import React from 'react';
import { Link } from 'react-router-dom';
import "../scss/pages/_Navigator.scss"

function Navigator() {
    return (
        <div className="naviDiv">
            <div id="logodiv">
                <h3 id="logoimg"></h3>
                <div id="crystudydiv">
                    <h1 id="navilogo"><big>C</big>ry<big>S</big>tudy</h1>
                </div>
                
                <div id="infodiv">
                    <p id="infologo">당신을 위한 러닝스터디 어플리케이션</p>
                </div>
            </div>
            <hr/>
        </div>
    )
}

export default Navigator;