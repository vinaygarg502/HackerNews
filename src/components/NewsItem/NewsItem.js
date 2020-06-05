import React, {Fragment, useEffect} from 'react';
import Pagination from '../Pagination/pagination';
import './newsItem.css';

const NewsItem = ({data, upVote, hideNews, getNews})=>{
    useEffect(() => {
        getNews(1);
    },[getNews]);

    const style={fontSize:'24px'};  
    const totalPages = data.nbPages;
    const currentPage = data.page;

    return (
        <Fragment>
            {
                data.hits && 
                <div className="news-container">
                    <table>
                        <tr>
                            <th>Comments</th>
                            <th>Vote Count</th>
                            <th>Upvote</th>
                            <th>News Details</th>
                        </tr>
                        {
                            data.hits.map(hit => (
                                <tr key={hit.objectID}>
                                    <td>{hit.num_comments}</td>
                                    <td>{hit.points}</td>
                                    <td className="hit-upvote" 
                                        onClick={() => upVote(hit.objectID, hit.points+1)}>
                                            <i className='far fa-caret-square-up' style={style}></i>
                                    </td>
                                    <td>{hit.title}({hit.url}) by {hit.author} 
                                        <button 
                                            className="hide-link" 
                                            onClick={()=>hideNews(hit.objectID)}>
                                                [hide]
                                        </button>
                                    </td>
                                </tr>
                            )
                        )}
                    </table>
                </div>
            }
            <Pagination 
                totalPages = {totalPages}
                currentPage ={currentPage} 
                onPaginate={getNews}/>
        </Fragment>
    )
}

export default NewsItem;