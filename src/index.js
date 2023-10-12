import React from 'react';
// import { createRoot } from 'react-dom'; 
import { createRoot } from 'react-dom/client';
// Import createRoot from react-dom

import App from './App';
import './components/Styles.css';

const rootElement = document.getElementById('root');

// Use createRoot from react-dom
const root = createRoot(rootElement);

root.render(<App />);
