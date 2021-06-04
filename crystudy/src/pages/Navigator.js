import React from 'react';
import { Link } from 'react-router-dom';
import "../scss/pages/_Navigator.scss"
import logoIcon from '../ref/logoIcon.png';

function Navigator() {
    return (
        <div className="naviDiv">
            <div id="logodiv">
                <div id="crystudydiv">
                    <h1 id="navilogo"><big>C</big>ry<big>S</big>tudy</h1>
                    <img id="logoIcon" src={logoIcon}></img>
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