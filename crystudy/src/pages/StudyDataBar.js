import React from 'react';
import "../scss/pages/_StudyDataBar.scss";

function StudyDataBar() {
    return (
        <div id="dataframe">
            <div id="postFrame">
                <h1>Study Data</h1>
                <hr/>
                <table id="studyDataTable">
                    <tr>
                        <td class="studyData">번호</td>
                        <td class="studyData">제목</td>
                        <td class="studyData">작성자</td>
                    </tr>
                    <tr>

                    </tr>
                </table>
            </div>
        </div>
    )
}

export default StudyDataBar;