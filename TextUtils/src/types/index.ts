// Theme Mode
export type ThemeMode = 'light' | 'dark' | 'purple';

// Alert Props
export interface AlertProps {
  message: string;
  type: 'success' | 'info' | 'warning' | 'danger';
}

// Navbar Props
export interface NavbarProps {
  title: string;
  aboutText: string;
  mode: ThemeMode;
}

// TextForm Props
export interface TextFormProps {
  heading: string;
  mode: ThemeMode;
  showAlert: (message: string, type: AlertProps['type']) => void;
}

// Text Manipulation Function Type
export type TextTransformFunction = (text: string) => string;

// App Props (if needed)
export interface AppProps {
  // Add any props that might be passed to the App component
}

// About Props (if needed)
export interface AboutProps {
  mode: ThemeMode;
}