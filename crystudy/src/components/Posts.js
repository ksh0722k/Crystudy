import React from 'react';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

const Posts = ({ posts }) => {
    
    if(posts===undefined) {
        return <h2>Loading...</h2>;
    }
    
    return (
        <div className="search-cont-main">
            {posts.map((post)=>(
                <button className="search-cont-one" key={post.title}>
                    <div className="search-cont-title">{post.title}</div>
                    <div className="search-cont-nop">모집인원: {post.numberOfPeople} 명</div>
                    <div className="search-cont-summary">{post.summary}</div>
                    <Link to={{
                            pathname: `/studySearch/${post.title}`,
                            state: {
                                title:post.title,
                                numberOfPeople:post.numberOfPeople,
                                summary:post.summary,
                                content:post.content
                            }}}>
                        <div className="search-cont-detail">자세히➡</div>
                    </Link>
                </button>
            ))}
        </div>
    );
}

SearchPosts.propTypes = {
    title: PropTypes.string.isRequired,
    numberOfPeople: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
};

export default Posts;