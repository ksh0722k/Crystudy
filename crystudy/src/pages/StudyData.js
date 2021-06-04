import React from 'react';
import "../scss/pages/_StudyManage.scss";
import StudyLeftBar from "./StudyLeftBar.js";
import StudyRightBar from "./StudyRightBar.js";
import StudyMainBar from "./StudyMainBar.js";
import StudyDataBar from "./StudyDataBar.js";

function StudyPlan() {
    return (
        <div class="frame">
            <StudyLeftBar></StudyLeftBar>
            <StudyDataBar></StudyDataBar>
            <StudyRightBar></StudyRightBar>
        </div>
    )
}

export default StudyPlan;