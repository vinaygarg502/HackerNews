import NewsItem from '../../components/NewsItem/NewsItem';
import { connect } from 'react-redux';
import { upVote, hideNews, getNews } from '../../actions';



const mapStateToProps = (state) => {
    let upVoteList = {};
    let hideNewsArray = [];
    if (global && global.localStorage) {
        upVoteList = JSON.parse(global.localStorage.getItem('upVoteList') || '{}');
        hideNewsArray = JSON.parse(global.localStorage.getItem('hideNewsArray') || '[]');
    }

    const upVoteListKeys = Object.keys(upVoteList);
    let chartData = {
        votes:[],
        id:[]
    };
    if(state.news){
        state.news.hits.forEach(hit=>{
            if(!hideNewsArray.includes(hit.objectID)){
                chartData.votes = [...chartData.votes,upVoteListKeys.indexOf(hit.objectID)>-1?upVoteList[hit.objectID].votes:hit.points];
                chartData.id = [...chartData.id, hit.objectID];
            }
            
        })
    }
    return {
        data: {
            ...state.news,
            hits: state.news && state.news.hits.filter(hit=>hideNewsArray.includes(hit.objectID)!==true).map(item => {
                if(upVoteListKeys.indexOf(item.objectID)>-1){
                    return {
                        ...item,
                        points: upVoteList[item.objectID].votes
                    }; 
                }
                return item;
            })
        },
        chartData:chartData
    }
};
const mapDispatchToProps = (dispatch)=>({
    upVote: (id, votes)=>{
        let upVoteList = JSON.parse(localStorage.getItem('upVoteList') || '{}');
        upVoteList[id] = {
            id,
            votes
        }
        global.localStorage.setItem('upVoteList', JSON.stringify(upVoteList));
        dispatch(upVote(upVoteList[id]));
    },
    hideNews:(id)=>{
        let hideNewsArray = JSON.parse(localStorage.getItem('hideNewsArray') || '[]');
        if(!hideNewsArray.includes(id)){
            hideNewsArray.push(id);
        }
        global.localStorage.setItem('hideNewsArray',JSON.stringify(hideNewsArray));
        dispatch(hideNews(id));
    },
    getNews: (pageNumber)=>{dispatch(getNews(pageNumber))}
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsItem);