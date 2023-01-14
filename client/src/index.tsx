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
  <ApolloProvider client={client}>
    <Provider store={store}>
      <AuthProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AuthProvider>
    </Provider>
  </ApolloProvider>
);

