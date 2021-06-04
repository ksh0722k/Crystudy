import React from 'react';
import "../scss/pages/_StudyManage.scss";
import StudyLeftBar from "./StudyLeftBar.js";
import StudyRightBar from "./StudyRightBar.js";
import StudyDataWriteBar from './StudyDataWriteBar.js';

function StudyWrite() {
    return (
        <>
        <div class="frame">
            <StudyLeftBar></StudyLeftBar>
            <StudyDataWriteBar></StudyDataWriteBar>
            <StudyRightBar></StudyRightBar>
        </div>
        </>
    )
}

export default StudyWrite;