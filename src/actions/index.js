export const getNews = (pageNumber) => ({
    type: 'GET_NEWS',
    pageNumber
});

export const upVote = ({id, votes}) => ({
    type:'UP_VOTE',
    id,
    votes
});

export const hideNews = (id) => ({
    type:'HIDE_NEWS',
    id
})

