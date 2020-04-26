import axios from 'axios';
import { INITIAL_LENGTH } from './Constant';

export const getNewsFeed = (pageNumber = INITIAL_LENGTH) => {
  return axios
    .request({
      url: `http://hn.algolia.com/api/v1/search?tags=front_page&page=${pageNumber}`,
      method: 'get'
    })
    .then(response => {
      return response;
    })
    .catch(err => {
      console.log(err);
    });
};
