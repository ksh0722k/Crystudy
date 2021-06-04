import React from 'react';
import "../scss/pages/_StudyRightBar.scss";
import issueIcon from '../ref/issueIcon.png';

function StudyRightBar() {
    return (
        <>
        <div id="rightframe">
            <div id="issueTitleFrame">
            <h2 id="issueTitle">Issue Log</h2>
            <img id="issueIcon" src={issueIcon}></img>
            </div>
        
        <div id="inputFrame">
            <input type="text" id="issueinput" placeholder="이슈를 등록하세요!"></input>
            <button id="issueBtn">↑</button>
        </div>

        </div>
        </>
    )
}

export default StudyRightBar;