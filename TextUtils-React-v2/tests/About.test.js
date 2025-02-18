// About.test.js

// Mock React and PropTypes
const React = {
  createElement: jest.fn((type, props, ...children) => ({
    type,
    props,
    children
  }))
};

const PropTypes = {
  oneOf: jest.fn(() => ({})),
};

// Mock the About component
const About = require('../src/components/pages/About').default;

// Jest setup
jest.mock('react', () => React);
jest.mock('prop-types', () => PropTypes);

describe('About Component', () => {
  let wrapper;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const renderComponent = (mode = 'light') => {
    return About({ mode });
  };

  test('renders correctly in light mode', () => {
    wrapper = renderComponent('light');
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.props.style).toEqual({
      backgroundColor: 'white',
      color: 'black'
    });
  });

  test('renders correctly in dark mode', () => {
    wrapper = renderComponent('dark');
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.props.style).toEqual({
      backgroundColor: '#212529',
      color: '#F8F9FA'
    });
  });

  test('renders correctly in default mode', () => {
    wrapper = renderComponent('invalid');
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.props.style).toEqual({
      backgroundColor: '#a98eda',
      color: 'black'
    });
  });

  test('accordion items have correct border style in light mode', () => {
    wrapper = renderComponent('light');
    const accordionItems = wrapper.children[1].children;
    accordionItems.forEach(item => {
      expect(item.props.style).toEqual({
        border: '2px solid black'
      });
    });
  });

  test('accordion items have correct border style in dark mode', () => {
    wrapper = renderComponent('dark');
    const accordionItems = wrapper.children[1].children;
    accordionItems.forEach(item => {
      expect(item.props.style).toEqual({
        border: '2px solid white'
      });
    });
  });

  test('accordion buttons have correct styles', () => {
    wrapper = renderComponent('light');
    const accordionButtons = wrapper.children[1].children.map(item => 
      item.children[0].children[0]
    );
    accordionButtons.forEach(button => {
      expect(button.props.style).toEqual({
        backgroundColor: 'white',
        color: 'black'
      });
    });
  });

  test('accordion bodies have correct styles', () => {
    wrapper = renderComponent('dark');
    const accordionBodies = wrapper.children[1].children.map(item => 
      item.children[1].children[0]
    );
    accordionBodies.forEach(body => {
      expect(body.props.style).toEqual({
        backgroundColor: '#212529',
        color: '#F8F9FA'
      });
    });
  });

  test('propTypes are correctly defined', () => {
    expect(About.propTypes.mode).toBeDefined();
    expect(PropTypes.oneOf).toHaveBeenCalledWith(['light', 'dark']);
  });
});