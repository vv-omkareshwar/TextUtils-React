// Type definitions for TextUtils application

/**
 * Represents the possible theme modes for the application.
 */
type Mode = 'light' | 'dark' | 'purple';

/**
 * Represents the structure of an alert message.
 */
interface AlertType {
  type: 'success' | 'error' | 'warning' | 'info';
  message: string;
}

/**
 * Represents statistics about a text.
 */
interface TextStats {
  wordCount: number;
  characterCount: number;
  sentenceCount: number;
}

/**
 * Props for the Navbar component.
 */
interface NavbarProps {
  title: string;
  aboutText: string;
  mode: Mode;
  toggleMode: (newMode: Mode) => void;
}

/**
 * Props for the TextForm component.
 */
interface TextFormProps {
  heading: string;
  mode: Mode;
  showAlert: (alert: AlertType) => void;
}

/**
 * Props for the About component.
 */
interface AboutProps {
  mode: Mode;
}

/**
 * Utility type for React component props.
 */
type ReactProps<T> = T & {
  children?: React.ReactNode;
};

// Export all types
export type {
  Mode,
  AlertType,
  TextStats,
  NavbarProps,
  TextFormProps,
  AboutProps,
  ReactProps
};