import React from 'react';
import { mount } from 'enzyme';
import Img from '../Img';

it('should render <Img> with isLoaded prop', () => {
  const component = <Img image="image.jpg" isLoaded />;

  expect(mount(component)).toMatchSnapshot();
});

it('should render <Img> without isLoaded prop', () => {
  const component = <Img image="image.jpg" isLoaded={false} />;

  expect(mount(component)).toMatchSnapshot();
});
