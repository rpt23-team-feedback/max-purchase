import React from 'react';
import Order from '../components/Order.jsx';
import { shallow, mount, render } from 'enzyme';

describe('Order component', () => {
  it('renders a full summary for a bundle ID from 1 - 100', () => {
    const wrapper = mount(<Order match={ {'params' : { 'id': 12 } } } />);
    const id = <div>your id is 12</div>;
    expect(wrapper.contains(id)).toEqual(true);
  });

  it('renders a check your ID for a bundle ID other than from 1 - 100', () => {
    const wrapper = mount(<Order match={ {'params' : { 'id': 'grok' } } } />);
    const id = <div>try an ID in the url from 1 - 100</div>
    expect(wrapper.contains(id)).toEqual(true);
  });
})

