import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import client from './graphql/apolloClient';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/authContext';
import { Provider } from 'react-redux'
import store from './store/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <AuthProvider>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </AuthProvider>
  </Provider>
);

