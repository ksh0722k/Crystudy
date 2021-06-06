import React from 'react';
import { Link } from 'react-router-dom';
import "../scss/pages/_StudyManage.scss";
import StudyLeftBar from "./StudyLeftBar.js";
import StudyRightBar from "./StudyRightBar.js";
import dom from '../ref/dom structure.png';

function StudyData1() {
    return (
        <div class="studyPlan">
            <div class="frame">
                <StudyLeftBar></StudyLeftBar>
                
                <div id="datapostframe">
                    <Link to="/studyData"><button id="backbtn">← back</button></Link>
                    <h1>리액트 1주차 정리</h1>
                    <h2>React 기본 문법</h2>
                    <p>React를 위한 Chrome Extension</p>
                    <br/>
                    <h2>State</h2>
                    <p>하나의 컴포넌트가 가질 수 있는 변경 가능한 data</p>
                    <p>Component rendering 시 새로운 데이터를 생성하거나 기존의 데이터를 참고하여 새로운 데이터를 만들 경우 사용할 수 있다.</p>
                    <br/>
                    <img src={dom}></img>
                </div>
                <StudyRightBar/>
            </div>
        </div>
    )
}

export default StudyData1;