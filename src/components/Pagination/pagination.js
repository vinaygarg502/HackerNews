import React from 'react';
import './pagination.css';

const Pagination = ({totalPages, currentPage, onPaginate})=>{

    return (
        <div className="pagination-container">
            <button disabled ={currentPage===1} onClick ={()=>onPaginate(currentPage-1)}>Prev</button> | 
            <button disabled={currentPage>=totalPages} onClick ={()=>onPaginate(currentPage+1)}>Next</button>
        </div>
    )     
}

export default Pagination;