const reducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_NEWS':
            return { ...state, loading: true };
        case 'NEWS_RECEIVED':
            return { ...state, news: action.json, loading: false };
        case 'UP_VOTE':
            return {...state, news: {...state.news, hits:(state.news.hits).map(
                (item)=>item.objectID===action.id ? {...item,points:action.votes}:item), loading: false}
            };
        case 'HIDE_NEWS':
            return {
                ...state,
                news:{
                    ...state.news,
                    hits:(state.news.hits).filter((hit)=>hit.objectID!==action.id)
                },
                loading: false
            }
       default:
          return state;
     }
  };
  export default reducer;