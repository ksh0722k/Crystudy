import React from 'react';
import { Link } from 'react-router-dom';
import "../scss/pages/_Navigator.scss"
import sungshin from '../ref/sungshinIcon.png';
import crystudy from '../ref/crystudy.png';

function Navigator() {
    return (
        <div className="naviDiv">
            <div id="logodiv">
                    <img id="logoIcon" src={sungshin}></img>
                    <img id="crystudyIcon" src={crystudy}></img>
            </div>
        </div>
    )
}

export default Navigator;