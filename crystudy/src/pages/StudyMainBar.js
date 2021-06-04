import React from 'react';
import "../scss/pages/_StudyMainBar.scss";
import studyIcon from '../ref/mainPageIcon.png';

function StudyMainBar() {
    return (
        <>
        <div id="mainframe">
            <div id="postFrame">
                
                
                <div id="studyFrame">
                <img id="studyIcon" src={studyIcon}></img>
                <h1 id="studyTitle">React</h1>
                <h3 class="studyInfoTitle">인원</h3>
                <p class="studyInfo">3명</p>
                <h3 class="studyInfoTitle">소개</h3>
                <p class="studyInfo">리액트 스터디!</p>
                <h3 class="studyInfoTitle">세부사항</h3>
                <p class="studyInfo">React 기초 학습을 목표로 하는 리액트 스터디입니다.</p>
                </div>

            </div>
        </div>
        </>
    )
}

export default StudyMainBar;