import {
  FETCH_DATA_FROM_BACKEND,
  FETCH_DATA_FROM_BACKEND_PHOTO
} from "./types";

export const backendData = () => dispatch => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(posts =>
      dispatch({
        type: FETCH_DATA_FROM_BACKEND,
        payload: posts
      })
    );
};

export const backendDataPhoto = () => dispatch => {
  fetch("https://picsum.photos/v2/list")
    .then(res => res.json())
    .then(posts =>
      dispatch({
        type: FETCH_DATA_FROM_BACKEND_PHOTO,
        payload: posts
      })
    );
};

/*

Promise.all(urls.map(url =>
  fetch(url)
    .then(checkStatus)
    .then(parseJSON)
    .catch(logError)
))
.then(data => {
  // do something with the data
})

*/