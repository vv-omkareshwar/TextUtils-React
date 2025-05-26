// Import any types we need from other files
import { SpeechRecognitionResult } from './webSpeechApi';

// Define the possible modes for the application
export type Mode = 'light' | 'dark' | 'purple';

// Define the structure of an alert
export interface Alert {
  msg: string;
  type: 'success' | 'info' | 'warning' | 'danger';
}

// Define props for the Navbar component
export interface NavbarProps {
  title: string;
  mode: Mode;
  toggleMode: (newMode: Mode) => void;
}

// Define props for the TextForm component
export interface TextFormProps {
  heading: string;
  mode: Mode;
  showAlert: (message: string, type: Alert['type']) => void;
}

// Define props for the About component
export interface AboutProps {
  mode: Mode;
}

// Define props for the Alert component
export interface AlertProps {
  alert: Alert | null;
}

// Define the structure of the main App state
export interface AppState {
  mode: Mode;
  alert: Alert | null;
}

// Utility type for partial props (useful for default props)
export type PartialProps<T> = Partial<T>;

// Utility type for picking specific props
export type PickProps<T, K extends keyof T> = Pick<T, K>;

// Type for the showAlert function
export type ShowAlertFunction = (message: string, type: Alert['type']) => void;

// Type for the toggleMode function
export type ToggleModeFunction = (newMode: Mode) => void;

// Export the SpeechRecognitionResult type if it's used elsewhere
export type { SpeechRecognitionResult };