import React from 'react';
import "../scss/pages/_StudyLeftBar.scss";
import { Link } from 'react-router-dom';
import workIcon from '../ref/workspaceIcon.png';

function StudyLeftBar() {
    return (
        <>
        <div id="leftframe">
            <div>
                <br/>
                <img id="workIcon"src={workIcon}></img>
                <h2 id="leftbarlogo">Workspace</h2>
            </div>
            <div id="menudiv">
            <Link to ="/studyManage" class="menu">정보</Link>
            <Link to ="/studyPlan" class="menu">일정</Link>
            <Link to="/studyData" class="menu">자료</Link>
            <Link to="/" class="menu"> + 페이지 추가</Link>
            </div>
        </div>
        </>
    )
}

export default StudyLeftBar;