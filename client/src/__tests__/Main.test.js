import React from 'react';
import Main from '../components/Main.jsx';
import { shallow, mount } from 'enzyme';

it('redirects from root to id 1', () => {
  const wrapper = mount(<Main />);
  const id = <div>your id is 1</div>;
  expect(wrapper.contains(id)).toEqual(true);
});
