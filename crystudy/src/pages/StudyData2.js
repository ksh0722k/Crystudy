import React from 'react';
import {Link} from 'react-router-dom';
import "../scss/pages/_StudyManage.scss";
import StudyLeftBar from "./StudyLeftBar.js";
import StudyRightBar from "./StudyRightBar.js";
import lifecycle from '../ref/08_LifeCycle.png';

function StudyData2() {
    return (
        <div class="studyPlan">
            <div class="frame">
                <StudyLeftBar></StudyLeftBar>
                <div id="datapostframe">
                <Link to="/studyData"><button id="backbtn">← back</button></Link>
                    <h1>리액트 2주차 정리</h1>
                    <h2>LifeCycle</h2>
                    <p>참고 : Velog</p>
                    <br/>
                    <h2>LifeCycle</h2>
                    <img id="lifecycleimg" src={lifecycle}></img>

                    <h2>Mounting(생성)</h2>
                    <p>React Code가 HTML로 변환되어 첫 렌더링이 되는 부분 
                        즉, React로 만들어진 Web Page에 접속 시 browser에 HTML이 나타나기까지의 과정을 의미한다.</p>
                    <p>Component rendering 시 새로운 데이터를 생성하거나 기존의 데이터를 참고하여 새로운 데이터를 만들 경우 사용할 수 있다.</p>
                    <br/>

                    <h3>1. constructor</h3>
                    <p>리액트 컴포넌트 클래스를 만들 경우 생성자가 가장 먼저 실행된다.</p>

                    <h3>2. render</h3>
                    <p>렌더링을 위해 작성한 JSX를 return하는 메소드가 수행된다. 
                        해당 부분에서는 browser에 아무 것도 나타나지 않는다.</p>

                    <h3>3. componentDidMount</h3>
                    <p>React code가 HTML로 변환되어 화면에 나타난다. 
                        이 순간부터 document.getElementById를 통해 선택자로 DOM 요소를 가져올 수 있다. 
                        이곳에 DOM에 HTML가 업데이트 된 후 수행할 작업을 작성한다.</p>
                    
                    <h2>Updating</h2>
                    <p>React의 State나 Props가 업데이트 되었을 때 수행되는 부분</p>
                    <p>Component rendering 시 새로운 데이터를 생성하거나 기존의 데이터를 참고하여 새로운 데이터를 만들 경우 사용할 수 있다.</p>
                    <br/>
                </div>
                <StudyRightBar/>
            </div>
        </div>
    )
}

export default StudyData2;