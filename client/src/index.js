import { jsx as _jsx } from "react/jsx-runtime";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import client from './graphql/apolloClient';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/authContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(_jsx(AuthProvider, { children: _jsx(ApolloProvider, Object.assign({ client: client }, { children: _jsx(BrowserRouter, { children: _jsx(App, {}) }) })) }));
