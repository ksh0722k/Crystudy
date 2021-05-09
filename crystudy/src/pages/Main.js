import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import { Button } from "@material-ui/core";
import "../scss/pages/_Main.scss";

function Main() {
    const userName = "홍길동";

    return (
        <div className="main-cont">
            <div className="main-title">환영합니다,<br/>{userName} 님!</div>
            <div className="main-center-cont">
                <Button className="main-center-Rcont"><SearchIcon/></Button>
                <Button className="main-center-Lcont"><DescriptionOutlinedIcon/></Button>
            </div>
        </div>
    )
}

export default Main;