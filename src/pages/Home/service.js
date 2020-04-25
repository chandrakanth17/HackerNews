import axios from 'axios';
const DEFAULT_PAGE = 0;

export const getNewsFeed = (pageNumber = DEFAULT_PAGE) => {
  return axios.request(
    {
      url: `http://hn.algolia.com/api/v1/search?tags=front_page&page=${pageNumber}`,
      method: 'get'
    }
  )
  .then((response) => {
    return response
  })
  .catch(err => {
    console.log(err);
  })
}
