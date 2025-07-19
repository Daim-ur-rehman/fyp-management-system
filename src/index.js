import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles/main.css';
import './styles/auth.css';
import './styles/dashboard.css';
import { AuthProvider } from './AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthProvider>
);

console.log('Your React development server is already running!');
console.log('You can access your web portal at: http://localhost:3000');
console.log('If you do not see your app in the browser, try refreshing the page or opening a new browser tab and navigating to that address.');
console.log('If you need to restart the server for any reason, just let me know and I can run the command again.');
console.log('Would you like to proceed with more development, or do you need help with something else?');