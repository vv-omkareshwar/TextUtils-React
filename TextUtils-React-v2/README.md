# TextUtils-React-v2

TextUtils is a powerful React application designed for efficient text manipulation and analysis. It offers a range of features to enhance your text processing experience.

## Features

- Text case conversion (uppercase/lowercase)
- Text-to-speech functionality
- Word and character counting
- Extra space removal
- Text copying to clipboard
- Undo functionality
- Find and replace text
- Light, Dark, and Purple mode themes

## Installation

To get started with TextUtils-React-v2, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/your-username/TextUtils-React-v2.git
   ```

2. Navigate to the project directory:
   ```
   cd TextUtils-React-v2
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

5. Open your browser and visit `http://localhost:3000` to view the application.

## Usage

1. **Text Input**: Enter or paste your text in the main text area.
2. **Text Operations**: Use the buttons below the text area to perform various operations:
   - Convert to Uppercase/Lowercase
   - Clear Text
   - Copy to Clipboard
   - Remove Extra Spaces
   - Undo Changes
3. **Text-to-Speech**: Click the "Speak" button to hear the text read aloud.
4. **Find and Replace**: Use the input fields to find specific text and replace it.
5. **Theme Toggle**: Switch between Light, Dark, and Purple modes using the buttons in the navigation bar.

## Project Structure

```
/TextUtils-React-v2
├── README.md
├── package.json
├── public
│   ├── index.html
│   └── ...
├── src
│   ├── App.js
│   ├── components
│   │   ├── common
│   │   │   └── Alert.js
│   │   ├── layout
│   │   │   └── Navbar.js
│   │   ├── pages
│   │   │   └── About.js
│   │   └── text
│   │       └── TextForm.js
│   ├── styles
│   │   ├── App.css
│   │   └── index.css
│   ├── utils
│   │   └── textUtils.js
│   └── index.js
└── tests
    └── ...
```

## Technologies Used

- React.js
- React Router
- Bootstrap 5.1.3
- JavaScript (ES6+)
- HTML5
- CSS3

## Contributing

We welcome contributions to TextUtils-React-v2! If you'd like to contribute, please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please ensure your code adheres to the existing style and includes appropriate tests.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- Thanks to all contributors who have helped shape TextUtils-React-v2
- Special thanks to the React and Bootstrap communities for their excellent documentation and resources