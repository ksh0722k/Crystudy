import React from 'react';
import "../scss/pages/_StudyPlan.scss";
import StudyLeftBar from "./StudyLeftBar.js";
import StudyRightBar from "./StudyRightBar.js";
import StudyPlanBar from "./StudyPlanBar.js";

function StudyPlan() {
    return (
        <div class="frame">
            <StudyLeftBar></StudyLeftBar>
            <StudyPlanBar></StudyPlanBar>
            <StudyRightBar/>
        </div>
    )
}

export default StudyPlan;