import React from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import "../scss/pages/_Main.scss";

function Main() {
    const userName = "홍길동";

    return (
        <div className="main-cont">
            <div className="main-title">환영합니다,<br/>&nbsp;{userName} 님!</div>
            <div className="main-center-cont">
                <div>
                    <Link to ="/studySearch"><button className="main-center-Rcont"><SearchIcon/></button></Link>
                    <div className="main-center-Rtxt">스터디찾기</div>
                </div>
                <div>
                    <Link to ="/studyManage"><button className="main-center-Lcont"><DescriptionOutlinedIcon/></button></Link>
                    <div className="main-center-Ltxt">내스터디</div>
                </div>
            </div>
        </div>
    )
}

export default Main;