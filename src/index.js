import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // Import global styles
import App from './App';  // Import the main App component
import reportWebVitals from './reportWebVitals';  // Optional: for measuring performance

// Render the App component into the root div of index.html
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

// Optionally measure performance in your app
reportWebVitals();
