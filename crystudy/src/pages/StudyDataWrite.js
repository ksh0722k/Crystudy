import React from 'react';
import "../scss/pages/_StudyManage.scss";
import StudyLeftBar from "./StudyLeftBar.js";
import StudyRightBar from "./StudyRightBar.js";
import StudyDataWriteBar from "./StudyDataWriteBar.js";
import Editor from './Editor.js';

function StudyPlan() {
    return (
        <div class="frame">
            <StudyLeftBar></StudyLeftBar>
            <Editor></Editor>
        </div>
    )
}

export default StudyPlan;