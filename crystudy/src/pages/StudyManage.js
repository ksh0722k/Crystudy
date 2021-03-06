import React from 'react';
import "../scss/pages/_StudyManage.scss";
import StudyLeftBar from "./StudyLeftBar.js";
import StudyRightBar from "./StudyRightBar.js";
import StudyMainBar from "./StudyMainBar.js";
import WorkSpace from "./WorkSpace.js";

function StudyManage() {
    return (
        <div class="frame">
            <StudyLeftBar></StudyLeftBar>
            <StudyMainBar></StudyMainBar>
            <StudyRightBar></StudyRightBar>
        </div>
    )
}

export default StudyManage;