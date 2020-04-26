import React from 'react';
import renderer from 'react-test-renderer';
import { mount, configure } from 'enzyme';
import Feed from '../fixtures/Feed.json';
import TableRowItem from '../pages/Home/Components/TableRow';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const fnClick = jest.fn();

describe('Table Row Item component should render correct', () => {
  it('Given a single feed data table row item will display the row with data', () => {
    const item = renderer
      .create(
        <TableRowItem feed={Feed} upVote={() => ''} hideArticle={() => ''} />
      )
      .toJSON();
    expect(item).toMatchSnapshot();
  });

  it('On Clicking the upvote the click action should happen ', () => {
    const component = mount(
      <TableRowItem feed={Feed} upVote={fnClick} hideArticle={fnClick} />
    );
    component
      .find('button')
      .first()
      .simulate('click');
    expect(fnClick).toHaveBeenCalled();
  });

  it('On clicking hide the click action should happen', () => {
    const component = mount(
      <TableRowItem feed={Feed} upVote={fnClick} hideArticle={fnClick} />
    );
    component
      .find('button')
      .last()
      .simulate('click');
    expect(fnClick).toHaveBeenCalled();
  });
});
