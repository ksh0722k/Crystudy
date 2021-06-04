import React from 'react';
import "../scss/pages/_StudyRightBar.scss";

function StudyRightBar() {
    return (
        <>
        <div id="rightframe">
            <h2 id="rightbarlogo">Issue</h2>
            <input type="text" id="issueinput" placeholder="이슈를 등록하세요!"></input>
            <button id="issueBtn">↑</button>
        </div>
        </>
    )
}

export default StudyRightBar;