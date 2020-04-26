import React from 'react';
import styled from 'styled-components';
import { Theme } from './styleguide';
import { RESPONSIVE } from '../Constant';

export const NavBar = styled.nav`
  background: ${Theme.primaryColor};
  width: 100%;
  padding: 10px;
  color: ${Theme.grey[100]};
  height: 60px;
`;
export const AppContainer = styled.div`
  background: ${Theme.grey[200]};
  font-family: ${Theme.fontFamily};
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  flex-direction: row;
  margin: 0 auto;
  height: 100vh;
`;

export const Container = styled.div`
  background: ${Theme.grey[200]};
  height: auto;
  width: 100%;
  padding: 5px;
  @media (min-width: ${RESPONSIVE.tablet}) {
    padding: 10px;
  }
  @media (min-width: ${RESPONSIVE.desktopSm}) {
    padding: 30px;
  }
`;

export const Table = styled.table`
  height: 98%;
  width: 100%;
  margin: 0 auto;
  border-spacing: 0px;
  -webkit-border-horizontal-spacing: 0px;
`;

export const TableBody = styled.tbody`
  display: table-row-group;
  vertical-align: middle;
  border-color: inherit;
  padding: 20px;
  -webkit-border-horizontal-spacing: 0px;
  border-spacing: 0px;
`;

export const TableRow = styled.tr`
  padding: 10px 5px;
  margin: 10px auto;
  &:nth-of-type(odd) {
    background-color: rgba(0, 0, 0, 0.05);
  }

  @media (min-width: ${RESPONSIVE.tablet}) {
    margin: 0 auto;
  }
`;

export const TableData = styled.td`
  margin: 0;
  padding: 10px 0;
  line-height: 1.2;
  @media (min-width: ${RESPONSIVE.tablet}) {
    padding: 10px 0;
  }
`;

export const UpVoteButton = styled.button`
  outline: none;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 14px;
  color: ${Theme.grey[600]};
  transition: all 0.25s;

  &:hover {
    color: ${Theme.grey[800]};
  }
`;

export const Link = styled.a`
  color: ${Theme.grey[600]};
  font-size: ${Theme.fontSize.link};
  text-decoration: none;
  transition: all 0.25s;
  &:hover {
    color: ${Theme.grey[800]};
  }
`;

export const Info = styled.span`
  display: block;
  @media (min-width: ${RESPONSIVE.tablet}) {
    display: inline-block;
  }
`;
export const HideButton = styled.button`
  color: ${Theme.grey[800]};
  font-size: ${Theme.fontSize.text};
  text-decoration: none;
  transition: all 0.25s;
  outline: none;
  border: none;
  background: none;
  cursor: pointer;
  display: block;
  margin: 5px 0;
  &:hover {
    color: ${Theme.grey[800]};
  }

  @media (min-width: ${RESPONSIVE.tablet}) {
    display: inline-block;
    margin: auto;
  }
`;

export const Tag = styled.span`
  color: ${Theme.grey['600']};
  font-size: ${Theme.fontSize.tag};
  padding: 0 5px;
`;

export const MoreButton = styled.button`
  color: ${Theme.primaryColor};
  font-size: ${Theme.fontSize.text};
  border: none;
  outline: none;
  font-weight: bold;
  background: transparent;
  text-decoration: none;
  cursor: pointer;
  padding: 15px 0;
`;
