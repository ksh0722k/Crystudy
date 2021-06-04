import React from 'react';
import "../scss/pages/_StudyDataBar.scss";
import { Link } from 'react-router-dom';
import StudyWrite from './StudyWrite';

function StudyDataWriteBar() {
    return (
        <div id="dataframe">
            <div id="postFrame">
                <h1>Study Data</h1>
                <hr/>
                <Link to ="/studyDataWrite"><button id="writeBtn">글쓰기</button></Link>
            </div>
        </div>
    )
}

export default StudyDataWriteBar;