import { put, takeLatest, all } from 'redux-saga/effects';

function* fetchNews({pageNumber}) {
    const json = yield fetch('https://hn.algolia.com/api/v1/search?page='+pageNumber)
        .then(response => response.json(), );
    
    yield put({ type: "NEWS_RECEIVED", json: json, });
}

function* actionWatcher() {
    yield takeLatest('GET_NEWS', fetchNews)
}

export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ]);
}