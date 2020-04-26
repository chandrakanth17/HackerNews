import React, { useEffect, useState } from 'react';
import { getNewsFeed } from './service';
import { INITIAL_LENGTH } from './Constant';
import {
  NavBar,
  AppContainer,
  Container,
  Table,
  TableBody,
  MoreButton
} from './styles/FeedStyle';
import TableRowItem from './Components/TableRow';
import { head, getHidden, setHidden, filterFeeds } from './Utils';

const Home = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [currentFeeds, setCurrentFeeds] = useState([]);

  useEffect(async () => {
    const response = await getNewsFeed();
    if (response && response.data) {
      const filteredData = filterFeeds(response.data.hits, getHidden());
      await setCurrentPage(response.data.page);
      await setCurrentFeeds(filteredData);
    }
  }, []);

  const fetchNextPage = async () => {
    const response = await getNewsFeed(currentPage + 1);
    if (response && response.data) {
      await setCurrentFeeds([...currentFeeds, response.data.hits].flat());
      await setCurrentPage(response.data.page);
    }
  };
  const hideArticle = id => {
    const hiddenArticles = getHidden() || [];
    hiddenArticles.push(id);
    setHidden(hiddenArticles);
    const filteredFeeds = filterFeeds(currentFeeds, hiddenArticles);
    setCurrentFeeds(filteredFeeds);
  };

  const upVote = index => {
    const updatedFeeds = [...currentFeeds];
    updatedFeeds[index].points += 1;
    setCurrentFeeds(updatedFeeds);
  };

  return (
    <AppContainer>
      {head()}
      <NavBar>Y-Combinator</NavBar>
      {currentFeeds.length !== INITIAL_LENGTH ? (
        <Container>
          <Table cellspacing="0" cellpadding="0">
            <TableBody>
              {currentFeeds.map((feed, index) => {
                return (
                  <TableRowItem
                    key={index}
                    feed={feed}
                    upVote={() => upVote(index)}
                    hideArticle={() => hideArticle(feed.objectID)}
                  />
                );
              })}
            </TableBody>
          </Table>
          <MoreButton onClick={fetchNextPage}>More</MoreButton>
        </Container>
      ) : (
        <p>Loading...</p>
      )}
    </AppContainer>
  );
};

export default Home;
