# TextUtils React TypeScript

TextUtils is a React application built with TypeScript that provides various text manipulation utilities. This project demonstrates the use of React with TypeScript, along with features like routing, state management, and component-based architecture.

## Features

- Text transformation (uppercase, lowercase)
- Word and character counting
- Text-to-speech functionality
- Dark mode and purple mode themes
- Responsive design using Bootstrap

## Main Components

- **Navbar**: The navigation component that includes the app title, navigation links, and theme toggle buttons.
- **TextForm**: The main text manipulation component that provides various text transformation features.
- **About**: An informational component that describes the application's features using an accordion layout.
- **Alert**: A component for displaying alert messages to the user.

## Technologies Used

- React 18
- TypeScript
- React Router
- Bootstrap 5
- Web Speech API

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- Node.js (version 14 or later)
- npm (usually comes with Node.js)

## Installation

To set up the project on your local machine, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/your-username/TextUtils-React-TS.git
   cd TextUtils-React-TS
   ```

2. Install the dependencies:
   ```
   npm install
   ```

## Running the Application

To start the development server and run the application:

```
npm start
```

This will launch the application in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Testing

To run the tests:

```
npm test
```

This will launch the test runner in interactive watch mode.

## Project Structure

The project follows a standard React TypeScript structure:

- `public/`: Contains the public assets and the main HTML file
- `src/`: Contains the source code
  - `components/`: React components (About, Alert, Navbar, TextForm)
  - `styles/`: CSS files for styling
  - `types/`: TypeScript type definitions
  - `utils/`: Utility functions
- `tests/`: Contains test files

## Building for Production

To build the app for production:

```
npm run build
```

This will create a `build` folder with the production-ready files.

## Learn More

To learn more about React and TypeScript, check out the following resources:

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Create React App Documentation](https://create-react-app.dev/docs/getting-started/)

## Acknowledgments

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) using the TypeScript template.