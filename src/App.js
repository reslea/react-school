import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter } from 'react-router-dom';
import Header from './components/layout/Header';
import MainContent from './components/layout/MainContent';
import Navigation from './components/layout/Navigation';
import { Provider } from 'react-redux';
import { store } from './reducers';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Navigation />
          <MainContent />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
