import React, { useState, useEffect } from 'react';
import "../scss/pages/_StudyDataBar.scss";
import { Link } from 'react-router-dom';

function StudyDataWriteBar() {

    return (
        <div id="dataframe">
            <div id="postFrame">
                <br/>
                <h1 id="boardhead">Study Data</h1>
                <p>스터디 관련 게시물을 작성해 보세요.</p>
                <table id="dataTable"
                    ><tr>
                        <td>no. </td>
                        <td>제목 </td>
                        <td>작성자 </td>
                    </tr>
                    <tr>
                        <td>1 </td>
                        <td><Link class="dataLink" to="/studyData/data1">리액트 1주차 정리</Link> </td>
                        <td>이희진 </td>
                    </tr>
                    <tr>
                        <td>2 </td>
                        <td><Link class="dataLink" to="/studyData/data2">리액트 2주차 정리</Link> </td>
                        <td>김서현 </td>
                    </tr>
                    <tr>
                        <td>3 </td>
                        <td><Link class="dataLink" to="/studyData/data3">리액트 3주차 정리</Link> </td>
                        <td>이희진 </td>
                    </tr>
                    <tr>
                        <td>4 </td>
                        <td><Link class="dataLink" to="/studyData/data3">리액트 4주차 정리</Link> </td>
                        <td>이희진 </td>
                    </tr>
                </table>
                
                <Link to ="/studyDataWrite"><button id="writeBtn">글쓰기</button></Link>
            </div>
        </div>
    )
}

export default StudyDataWriteBar;
