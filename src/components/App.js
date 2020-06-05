import React from 'react';
import NewsItem from '../containers/NewsItem/NewsItem';
import LineChart from '../containers/Chart/Chart';
import Loading from '../containers/Loading';

const App = ()=>{
    return (
        <div>
            <Loading />
            <NewsItem />
            <LineChart />
        </div>
    )
};

export default App;