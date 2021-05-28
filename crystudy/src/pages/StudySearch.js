import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Posts from '../components/SearchPosts';
import Pagination from '../components/SearchPagination';
import "../scss/pages/_StudySearch.scss";

const StudySearch=({history})=>{

    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(8);

    useEffect(() => {
        setPosts([
            {
                "title": "React",
                "numberOfPeople": "4",
                "summary": "리액트 스터디!",
                "content": "리액트 기초 학습을 목표로 하는 스터디입니다."
            },
            {
                "title": "TOEIC",
                "numberOfPeople": "3",
                "summary": "토익 공부",
                "content": "매일 토익문제 풀고 틀린 것 오답노트하고 공유하기"
            },
            {
                "title": "Study1",
                "numberOfPeople": "2",
                "summary": "스터디 내용",
                "content": "세부 내용"
            },
            {
                "title": "Study2",
                "numberOfPeople": "4",
                "summary": "리액트 스터디!",
                "content": "리액트 스터디 세부 내용"
            },
            {
                "title": "Study3",
                "numberOfPeople": "5",
                "summary": "컴퓨터공학과 스터디",
                "content": "학교에서 배운 과목 정리하고 공유하기"
            },
            {
                "title": "Study4",
                "numberOfPeople": "3",
                "summary": "영어 단어 외우기",
                "content": "매일 영단어 100개씩 외우고 서로 test하기"
            },
            {
                "title": "Study5",
                "numberOfPeople": "4",
                "summary": "프론트엔드 프로젝트",
                "content": "한달에 한번 웹사이트 만들기"
            },
            {
                "title": "Study6",
                "numberOfPeople": "6",
                "summary": "취업면접 스터디",
                "content": "2-3일에 한번 모여서 면접 스터디하기"
            },
            {
                "title": "Study7",
                "numberOfPeople": "3",
                "summary": "Spring 스터디",
                "content": "Spring 공부하고 공유하기"
            },
            {
                "title": "Study8",
                "numberOfPeople": "4",
                "summary": "코딩테스트 스터디",
                "content": "하루에 한 문제씩 백준 알고리즘 풀고 발표하기"
            },
            {
                "title": "Study9",
                "numberOfPeople": "2",
                "summary": "Android 스터디",
                "content": "Android 개발 공부하기"
            }
        ])
    });

    const indexOfLast = currentPage * postsPerPage;
    const indexOfFirst = indexOfLast - postsPerPage;
    const currentPosts = posts.slice(indexOfFirst, indexOfLast);
    
    const paginate = (e, pageNumber) => {
        e.preventDefault();
        setCurrentPage(pageNumber)
    };

    return (
        <div className="study-search">
            <input className="study-add-btn" type="button" value="+스터디추가" onClick={()=>history.push('/studyAdd')}/>
            <div className="study-search-top">
                <input 
                    className="study-search-input" 
                    type="text"
                    placeholder="스터디를 검색해 보세요."/>
                <input className="study-search-submit" type="button" value="검색"/>
            </div>
            <h5 className="study-list-title">현재 모집중인 스터디</h5>
            <div className="study-start-search">
            </div>
            <div className="study-search-cont">
                <div className="study-search-result">
                    <Posts posts={currentPosts} />
                </div>
                <Pagination 
                    postsPerPage={postsPerPage} 
                    totalPosts={posts.length} 
                    paginate={paginate}
                />
            </div>
        </div>
    )
}

export default StudySearch;