import React from 'react';
import 'babel-polyfill';
import { mount, configure, shallow } from 'enzyme';
import axios from 'axios';
import Home from '../pages/Home';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

jest.mock('axios');
const fnClick = jest.fn();

describe('It should display the list of feeds on feeds updates', () => {
  it('Loads the data on component mount and data gets fetches', () => {
    const App = renderer.create(<Home />).toJSON;
    expect(App).toMatchSnapshot();
  });

  it('It should validate feeds data when app is mounted', () => {
    const App = mount(<Home />);
    const Table = App.find('table');
    expect(Table).toBeTruthy();
  });
});
