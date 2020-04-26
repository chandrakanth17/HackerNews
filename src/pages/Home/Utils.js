import React from 'react';
import { Helmet } from 'react-helmet';
import moment from 'moment';

export const head = () => {
  return (
    <Helmet>
      <meta charSet="UTF-8" />
      <meta name="description" content="Y-combinator news clone" />
      <meta name="keywords" content="news, Y-combinator, hackernews" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>News feed Y-combinator</title>
    </Helmet>
  );
};

export const getDomain = url => {
  if (url) {
    const baseUrl = url.split('//')[1];
    return `(${baseUrl.split('/')[0]})`;
  }
  return 'blank';
};

export const timeFromNow = time => {
  const toTime = moment();
  return moment(toTime).from(time);
};

export const getHidden = () => {
  return JSON.parse(localStorage.getItem('hiddenArticles')) || [];
};

export const setHidden = hiddenArticles => {
  localStorage.setItem('hiddenArticles', JSON.stringify(hiddenArticles));
};

export const filterFeeds = (currentFeeds, hiddenArticles) => {
  return currentFeeds.filter(feed => {
    return !hiddenArticles.includes(feed.objectID);
  });
};
