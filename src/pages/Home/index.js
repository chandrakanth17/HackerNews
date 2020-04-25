import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { getNewsFeed } from './service';

const head = () => {
  return (
    <Helmet>
      <title>My Page title</title>
    </Helmet>
  );
};

const Index = () => {
  const [feeds, setFeeds] = useState([]);
  useEffect(async () => {
    const feed = await getNewsFeed();
    console.log('feeds are');
    console.log(feed.data.hits);
  }, []);
  return (
    <div>
      {head()}
      <h1>News Feed for app</h1>
    </div>
  );
};

export default Index;
