import React from 'react';
import "../scss/pages/_StudyRightBar.scss";
import issueIcon from '../ref/issueIcon.png';

class StudyRightBar extends React.Component {

    constructor(props){
        super(props)
        this.state={
            content:"",
            posting:[]
        }
    }

    content=(e)=>{
        this.setState({content:e.target.value})
    }

    posting=(e)=>{
        this.state.posting.push({text:this.state.content})
        this.setState({content:""})
    }

    render(){
        return(
            <div id="issue">
                <div id="rightframe">
                    <div id="issueTitleFrame">
                        <h2 id="issueTitle">Issue Log</h2>
                        <img id="issueIcon" src={issueIcon}></img>
                        <div className="issueTop">  
                    <li>추가사항 확인해주세요!<br/>이희진<br/>2021.06.05</li>
                    {this.state.posting.map(e=>{
                        return(
                            <div className="issueComp">
                                <div className="issueContent">
                                    <li>{e.text}</li>
                                </div>
                                <div className="issueWriter">홍길동</div>
                                <div className="issueDate">2021-06-07</div>
                            </div>
                        ); 
                    })}
                </div>     
                <div id="inputFrame">
                    <input type="text" id="issueinput" placeholder="이슈를 등록하세요!" onChange={this.content}/>
                    <button id="issueBtn" onClick={this.posting}>↑</button>
                </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default StudyRightBar;