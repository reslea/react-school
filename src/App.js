import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter } from 'react-router-dom';
import Header from './components/layout/Header';
import MainContent from './components/layout/MainContent';
import Navigation from './components/layout/Navigation';
import { Provider } from 'react-redux';
import { store } from './reducers';
import { createContext } from 'react';
import { useState } from 'react';

export const TokenContext = createContext();

function App() {
  const [token, setToken] = useState();
  const UserInfoProvider = TokenContext.Provider;
  return (
    <div className="App">
      <UserInfoProvider value={{ token, setToken }}>
        <Provider store={store}>
          <BrowserRouter>
            <Header />
            <Navigation />
            <MainContent />
          </BrowserRouter>
        </Provider>
      </UserInfoProvider>
    </div>
  );
}

export default App;
