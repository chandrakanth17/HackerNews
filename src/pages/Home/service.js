import axios from 'axios';
import { INITIAL_LENGTH } from './Constant';
import { setupCache } from 'axios-cache-adapter';

const cache = setupCache({
  maxAge: 15 * 60 * 1000
});

// Create `axios` instance passing the newly created `cache.adapter`
const api = axios.create({
  adapter: cache.adapter
});
export const getNewsFeed = (pageNumber = INITIAL_LENGTH) => {
  return api({
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
