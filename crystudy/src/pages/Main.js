import React from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '../ref/searchIcon.png';
import StudyIcon from '../ref/studypageIcon.png';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import "../scss/pages/_Main.scss";

function Main() {
    const userName = "홍길동";

    return (
        <div className="main-cont">
            <div className="main-title">환영합니다,<br/>&nbsp;{userName} 님!</div>
            <div className="main-center-cont">
                <div>
                    <Link to ="/studySearch">
                        <img className="main-center-Rcont" src={SearchIcon}></img></Link>
                    <div className="main-center-Rtxt">스터디찾기</div>
                </div>
                <div>
                    <Link to ="/studyManage">
                        <img className="main-center-Lcont" src={StudyIcon}></img>
                    </Link>
                    <div className="main-center-Ltxt">내 스터디</div>
                </div>
            </div>
        </div>
    )
}

export default Main;