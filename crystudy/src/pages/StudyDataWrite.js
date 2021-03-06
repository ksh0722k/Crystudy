import React from 'react';
import { Link } from 'react-router-dom';
import "../scss/pages/_StudyManage.scss";
import StudyLeftBar from "./StudyLeftBar.js";
import '../scss/pages/_Editor.scss';
import StudyRightBar from "./StudyRightBar.js";
import Editor from './Editor.js';

function StudyPlan() {
    return (
        <div class="studyPlan">
            <div class="frame">
                <StudyLeftBar></StudyLeftBar>
                <Editor></Editor>
                <StudyRightBar/>
            </div>
            <div id="submitdiv">
                <Link to="/studyData/data3"><button id="addbtn">등록하기</button></Link>
            </div>
        </div>
    )
}

export default StudyPlan;