// Navbar.test.js

// Mock React and other dependencies
const React = {
  createElement: jest.fn((type, props, ...children) => ({ type, props, children }))
};

const PropTypes = {
  string: jest.fn(),
  func: jest.fn(),
};

PropTypes.string.isRequired = jest.fn();
PropTypes.func.isRequired = jest.fn();

// Mock Link component
const Link = jest.fn(({ to, children, className }) => ({
  type: 'Link',
  props: { to, className },
  children
}));

// Import the component to be tested
const Navbar = require('./Navbar');

// Mock CSS import
jest.mock('./Navbar.css', () => ({}));

// Utility function to render components
function render(component) {
  return JSON.stringify(component);
}

// Test suite
describe('Navbar Component', () => {
  // Test getNavStyle function
  describe('getNavStyle function', () => {
    test('should return empty object for light mode', () => {
      expect(Navbar.getNavStyle('light')).toEqual({});
    });

    test('should return purple style for purple mode', () => {
      expect(Navbar.getNavStyle('purple')).toEqual({
        backgroundColor: '#432874',
        color: 'white'
      });
    });
  });

  // Test Navbar component rendering
  describe('Navbar rendering', () => {
    const defaultProps = {
      title: 'TextUtils',
      aboutText: 'About Us',
      mode: 'light',
      toggleLMode: jest.fn(),
      toggleDMode: jest.fn(),
      togglePMode: jest.fn()
    };

    test('should render correctly in light mode', () => {
      const navbar = Navbar(defaultProps);
      expect(render(navbar)).toContain('navbar-light bg-light');
      expect(render(navbar)).toContain('border-dark');
    });

    test('should render correctly in dark mode', () => {
      const darkProps = { ...defaultProps, mode: 'dark' };
      const navbar = Navbar(darkProps);
      expect(render(navbar)).toContain('navbar-dark bg-dark');
      expect(render(navbar)).toContain('border-light');
    });

    test('should render correctly in purple mode', () => {
      const purpleProps = { ...defaultProps, mode: 'purple' };
      const navbar = Navbar(purpleProps);
      expect(render(navbar)).toContain('navbar-dark bg-purple');
      expect(render(navbar)).toContain('border-light');
      expect(render(navbar)).toContain('"backgroundColor":"#432874","color":"white"');
    });

    test('should render correct title', () => {
      const customTitleProps = { ...defaultProps, title: 'Custom Title' };
      const navbar = Navbar(customTitleProps);
      expect(render(navbar)).toContain('Custom Title');
    });

    test('should render correct about text', () => {
      const customAboutProps = { ...defaultProps, aboutText: 'Custom About' };
      const navbar = Navbar(customAboutProps);
      expect(render(navbar)).toContain('Custom About');
    });
  });

  // Test PropTypes
  describe('PropTypes', () => {
    test('should have correct propTypes', () => {
      expect(Navbar.propTypes.title).toBe(PropTypes.string.isRequired);
      expect(Navbar.propTypes.aboutText).toBe(PropTypes.string.isRequired);
      expect(Navbar.propTypes.mode).toBe(PropTypes.string.isRequired);
      expect(Navbar.propTypes.toggleLMode).toBe(PropTypes.func.isRequired);
      expect(Navbar.propTypes.toggleDMode).toBe(PropTypes.func.isRequired);
      expect(Navbar.propTypes.togglePMode).toBe(PropTypes.func.isRequired);
    });
  });

  // Test defaultProps
  describe('defaultProps', () => {
    test('should have correct default props', () => {
      expect(Navbar.defaultProps.title).toBe('Set title here');
      expect(Navbar.defaultProps.aboutText).toBe('About');
    });
  });
});

// Mock implementation of the Navbar component
function Navbar({ mode, title, aboutText, toggleLMode, toggleDMode, togglePMode }) {
  const getNavStyle = (mode) => {
    if (mode === 'purple') {
      return {
        backgroundColor: '#432874',
        color: 'white'
      };
    }
    return {};
  };

  return React.createElement('nav', {
    style: getNavStyle(mode),
    className: `navbar border-bottom border-${mode === 'light' ? 'dark' : 'light'} navbar-expand-lg navbar-${mode === 'light' ? 'light' : 'dark'} bg-${mode}`
  }, 
  React.createElement('div', { className: 'container-fluid' },
    React.createElement(Link, { className: 'navbar-brand', to: '/TextUtils-React' }, title),
    React.createElement('button', {
      className: 'navbar-toggler',
      type: 'button',
      'data-bs-toggle': 'collapse',
      'data-bs-target': '#navbarSupportedContent',
      'aria-controls': 'navbarSupportedContent',
      'aria-expanded': 'false',
      'aria-label': 'Toggle navigation'
    }, 
    React.createElement('span', { className: 'navbar-toggler-icon' })),
    React.createElement('div', { className: 'collapse navbar-collapse', id: 'navbarSupportedContent' },
      React.createElement('ul', { className: 'navbar-nav me-auto mb-2 mb-lg-0' },
        React.createElement('li', { className: 'nav-item' },
          React.createElement(Link, { className: 'nav-link', 'aria-current': 'page', to: '/TextUtils-React' }, 'Home')
        ),
        React.createElement('li', { className: 'nav-item' },
          React.createElement(Link, { className: 'nav-link', to: '/about' }, aboutText)
        )
      ),
      React.createElement('div', { className: 'mx-3 btn-group', role: 'group', 'aria-label': 'Basic radio toggle button group', style: { backgroundColor: 'white' } },
        React.createElement('input', { type: 'radio', className: 'btn-check', name: 'btnradio', id: 'btnradio1', autoComplete: 'off', onClick: toggleLMode }),
        React.createElement('label', { className: 'btn btn-outline-primary', htmlFor: 'btnradio1' }, 'Light Mode'),
        React.createElement('input', { type: 'radio', className: 'btn-check', name: 'btnradio', id: 'btnradio2', autoComplete: 'off', onClick: toggleDMode }),
        React.createElement('label', { className: 'btn btn-outline-primary', htmlFor: 'btnradio2' }, 'Dark Mode'),
        React.createElement('input', { type: 'radio', className: 'btn-check', name: 'btnradio', id: 'btnradio3', autoComplete: 'off', onClick: togglePMode }),
        React.createElement('label', { className: 'btn btn-outline-primary', htmlFor: 'btnradio3' }, 'Purple Mode')
      )
    )
  ));
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
  toggleLMode: PropTypes.func.isRequired,
  toggleDMode: PropTypes.func.isRequired,
  togglePMode: PropTypes.func.isRequired
};

Navbar.defaultProps = {
  title: 'Set title here',
  aboutText: 'About'
};

module.exports = Navbar;