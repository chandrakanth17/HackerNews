import axios from 'axios';
import { INITIAL_LENGTH } from './Constant';
import wrapper from 'axios-cache-plugin';

const http = wrapper(axios, {
  maxCacheSize: 25,
  ttl: 60000
});
http.__addFilter(/search/);

export const getNewsFeed = (pageNumber = INITIAL_LENGTH) => {
  return http({
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
