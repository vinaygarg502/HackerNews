import Chart from '../../components/Chart/Chart';
import { connect } from 'react-redux';



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
        chartData:chartData
    }
};

export default connect(mapStateToProps, null)(Chart);