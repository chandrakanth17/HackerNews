import React from 'react';
import { timeFromNow, getDomain } from '../Utils';
import {
  TableData,
  TableRow,
  UpVoteButton,
  Link,
  Info,
  HideButton,
  Tag
} from '../styles/FeedStyle';

const TableRowItem = props => {
  const { feed, upVote, hideArticle } = props;
  return (
    <TableRow>
      <TableData>{feed.num_comments}</TableData>
      <TableData>{feed.points}</TableData>
      <TableData>
        <UpVoteButton onClick={upVote}>&#9650;</UpVoteButton>
      </TableData>
      <TableData>
        {feed.title + ' '}
        <Link href={feed.url}> {getDomain(feed.url) + ' '} </Link>
        <Info>
          <Tag>by</Tag>
          {feed.author + ' '}{' '}
          <Tag>{`${timeFromNow(feed.created_at)} ago `}</Tag>
          <HideButton onClick={hideArticle}>[ Hide ]</HideButton>
        </Info>
      </TableData>
    </TableRow>
  );
};

export default TableRowItem;
