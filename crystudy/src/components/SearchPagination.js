import React from 'react';

const SearchPagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="search-pagination-cont">
            <ul className = "search-pagination">
                {pageNumbers.map(number => (
                    <li key={number}>
                        <a onClick={(e) => paginate(e,number)} href="#">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SearchPagination;