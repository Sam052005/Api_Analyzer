# Sherlock API Investigation Toolkit

![Sherlock Dashboard Preview](sherlock-preview.png)

## Overview

The Sherlock API Investigation Toolkit is a React-based dashboard that helps developers analyze and troubleshoot their APIs with a Sherlock Holmes-themed interface. This interactive tool provides visualizations and a conversational interface to help identify API issues.

## Features

- **Interactive Detective Tools**:
  - API Magnifier - Examine request/response patterns
  - Anomaly Detector - Identify unusual API behavior
  - Security Inspector - Uncover vulnerabilities

- **Chat Interface**:
  - Conversational interaction with "Sherlock"
  - Real-time responses to API queries
  - Message history and timestamps

- **Dark Theme UI**:
  - Sophisticated dark blue color scheme
  - Responsive design for all screen sizes
  - Animated hover effects and transitions

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/sherlock-api-toolkit.git
   cd sherlock-api-toolkit
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

## Usage

1. **Main Dashboard**:
   - Browse the three detective tools
   - Click "Consult Sherlock" to ask about specific tools

2. **Chat Interface**:
   - Click the floating Sherlock icon to open chat
   - Ask questions about:
     - API errors
     - Performance issues
     - Security concerns
     - Specific tools' functionality

3. **Tool Interactions**:
   - Each tool provides specialized responses
   - Sherlock will analyze patterns in your questions

## Dependencies

- [React](https://reactjs.org/) (v18+)
- [Material-UI](https://mui.com/) (v5+)
- [React Icons](https://react-icons.github.io/react-icons/)

## Configuration

To customize the theme, modify the theme provider in your App.js:

```jsx
import { createTheme, ThemeProvider } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1565C0', // Dark blue
    },
    secondary: {
      main: '#0D47A1', // Darker blue
    },
    background: {
      default: '#121212',
      paper: '#1E1E1E',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Sherlock />
    </ThemeProvider>
  );
}
```

## Customization Options

1. **Colors**:
   - Modify the `colors` constant in the Sherlock component
   - Adjust theme colors in the theme provider

2. **Tools**:
   - Edit the `detectiveTools` array to add/remove tools
   - Customize responses and icons

3. **Chat Behavior**:
   - Modify the `handleSendMessage` function for custom responses
   - Adjust chat UI in the Paper component

## Development

1. **Running Tests**:
   ```bash
   npm test
   ```

2. **Building for Production**:
   ```bash
   npm run build
   ```

3. **Linting**:
   ```bash
   npm run lint
   ```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch for your feature
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Screenshots

![Main Dashboard](screenshots/dashboard.png)
*Main dashboard with detective tools*

![Chat Interface](screenshots/chat.png)
*Conversational interface with Sherlock*

## Roadmap

- [ ] Add API connection for real data analysis
- [ ] Implement authentication system
- [ ] Add more detective tools
- [ ] Create mobile-responsive improvements
- [ ] Develop plugin system for custom tools

## Support

For questions or issues, please open an issue on GitHub or contact:
[your-email@example.com](mailto:your-email@example.com)