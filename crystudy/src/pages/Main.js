import React from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '../ref/searchIcon.png';
import StudyIcon from '../ref/studypageIcon.png';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import "../scss/pages/_Main.scss";

function Main() {
    const userName = "이희진";

    return (
        <div className="main-cont">
            <div className="main-title">환영합니다,<br/>&nbsp;{userName} 님!</div>
            <div className="main-center-cont">
                <div id="searchpage">
                    <Link to ="/studySearch">
                        <img id="searchcon" className="main-center-Rcont" src={SearchIcon}></img></Link>
                    <div className="main-center-Rtxt">스터디 찾기</div>
                </div>
                <div id="mystudydiv">
                    <Link to ="/studyManage">
                        <img className="main-center-Lcont" src={StudyIcon}></img>
                    </Link>
                    <div id="mystudypara" className="main-center-Ltxt">내 스터디</div>
                </div>
            </div>
        </div>
    )
}

export default Main;