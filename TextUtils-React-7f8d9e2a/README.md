# TextUtils

TextUtils is a powerful React-based text manipulation tool that offers various text processing functionalities.

## Features

- Word and character counting
- Text case conversion (uppercase/lowercase)
- Text-to-speech functionality
- Undo operation
- Clear text
- Copy to clipboard
- Remove extra spaces
- Find and replace text
- Dark and light mode toggle

The application also offers multiple themes:
- Light mode
- Dark mode
- Purple mode

## Installation

To get started with TextUtils, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/your-username/TextUtils-React.git
   ```

2. Navigate to the project directory:
   ```
   cd TextUtils-React
   ```

3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To run the development server:

```
npm start
```

This will start the application on `http://localhost:3000`.

### Using TextUtils

1. Enter or paste your text in the main text area.
2. Use the buttons below the text area to perform various operations:
   - Click "Convert to Uppercase" to convert all text to uppercase.
   - Click "Convert to Lowercase" to convert all text to lowercase.
   - Use "Speak" to have the text read aloud.
   - "Clear Text" will remove all text from the text area.
   - "Copy Text" copies the entire text to your clipboard.
   - "Remove Extra Spaces" eliminates unnecessary spaces.
   - Use the "Find" and "Replace" inputs to search and replace text.

3. The summary section below will display word count, character count, and estimated reading time.

4. Use the navbar to switch between the text manipulation tool and the About page.

5. Toggle between light, dark, and purple modes using the radio buttons in the navbar.

## Project Structure

```
TextUtils-React/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── About.js
│   │   ├── Alert.js
│   │   ├── Navbar.js
│   │   └── TextForm.js
│   ├── styles/
│   │   ├── App.css
│   │   └── index.css
│   ├── App.js
│   └── index.js
└── README.md
```

- `components/`: Contains React components used in the application
- `styles/`: CSS files for styling the application
- `App.js`: Main application component
- `index.js`: Entry point of the React application

## Technologies Used

- React
- React Router for navigation
- Bootstrap for styling
- PropTypes for type checking

## Running Tests

To run the test suite:

```
npm test
```

This will run all tests in the `tests/` directory.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

[Add license information here]