import React from 'react';
import { Link } from 'react-router-dom';
import "../scss/pages/_StudyManage.scss";
import StudyLeftBar from "./StudyLeftBar.js";
import StudyRightBar from "./StudyRightBar.js";
import code from '../ref/code.png';

function StudyData3() {
    return (
        <div class="studyPlan">
            <div class="frame">
                <StudyLeftBar></StudyLeftBar>
                <div id="datapostframe">
                <Link to="/studyData"><button id="backbtn">← back</button></Link>
                <h1>리액트 3주차 정리</h1>
                
                    <h2>Method로 State 변수 값 변경하기</h2>
                    <img src={code}></img>
                    <p>참고 : Velopert blog</p>
                    <br/>
                    <h2>Result</h2>
                    <p>- 이벤트들의 이름은 `camelCase`를 사용한다.

따라서 `HTML`에서는 `onclick`속성을 이용했지만, 
React에서는 `onClick`속성을 사용해야 한다.

- 또한 `JSX` 파일이기 때문에 `this.handleChange()`가 아닌 
`this.handleChange`를 사용하여 메소드를 전달한다. 
()를 붙일 경우 `JSX`가 `HTML`로 변경되는 과정에서 함수가 실행된다.</p>

                </div>
                <StudyRightBar/>
            </div>
        </div>
    )
}

export default StudyData3;