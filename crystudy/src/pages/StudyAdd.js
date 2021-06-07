import React from 'react';
import "../scss/pages/_StudyAdd.scss";

function StudyAdd(){

    const useConfirm = (message=null, onConfirm, onCancel)=>{
        if (!onConfirm || typeof onConfirm !== "function") {
            return;
        }
        if (onCancel && typeof onCancel !== "function") {
            return;
        }

        const confirmAction=()=>{
            if(window.confirm(message)) {
                onConfirm();
                window.location.href="/studySearch";
            } else {
                onCancel();
                window.location.href="/studySearch";
            }
        }

        return confirmAction;
    };

    const addConfirm=()=>console.log("등록했습니다.")
    const cancelConfirm=()=>console.log("취소했습니다.")

    const confirmAdd = useConfirm(
        "등록하시겠습니까?",
        addConfirm,
        cancelConfirm
    )

    return (
        <div className="study-add">
            <div className="study-add-main">
                <h2 className="study-add-h2">스터디 등록하기</h2>
                <div className="study-add-table">
                    <div className="study-add-t-title">제목</div>
                    <input className="study-add-title" type="text"/>                        
                    <div className="study-add-t-nop">모집 인원</div>
                    <input className="study-add-nop-input" type="text"/>
                    <div className="study-add-t-summ">한줄 소개</div>
                    <input className="study-add-summ" type="text"/>
                    <div className="study-add-t-cont">세부 사항</div>
                    <textarea className="study-add-cont" rows="25" cols="100"/>
                </div>
                <input className="study-add-submit" type="button" id="submitbtn" value="등록하기" onClick={confirmAdd}/>
            </div>
        </div>
    )
}

export default StudyAdd;