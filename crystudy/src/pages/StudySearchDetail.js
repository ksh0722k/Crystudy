import React, { useEffect } from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import "../scss/pages/_StudySearchDetail.scss";
import Button from '../components/Button';

const StudySearchDetail=(props)=>{

    useEffect(()=>{
        if (props.location.state === undefined){
            props.history.push("/");
        }
    })

    function goBack() {
        window.history.go(-1);
    }

    if (props.location.state){
        return(
            <div className="study-detail">
                <a><ArrowBackIcon className="study-detail-back" onClick={goBack}/></a>
                <div className="study-detail-main">
                    <div className="study-detail-title">{props.location.state.title}</div>
                    <div className="study-detail-table">
                        <div className="study-detail-t-nop">모집 인원</div>
                        <div className="study-detail-nop">{props.location.state.numberOfPeople} 명</div>
                        <div className="study-detail-t-summ">한줄 소개</div>
                        <div className="study-detail-summary">{props.location.state.summary}</div>
                        <div className="study-detail-t-cont">세부 사항</div>
                        <div className="study-detail-content">{props.location.state.content}</div>
                    </div>
                </div>
                <hr width="60%"/>
                <Button/>
            </div>
        );
    } else {
        return null;
    }
}

export default StudySearchDetail;