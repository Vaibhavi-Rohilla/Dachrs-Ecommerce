import './App.scss';
import ErrorBoundary from './ErrorBoundary';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className='App'>
      <ErrorBoundary>
        <header className='App-header'>
          <h2>Hello Dachrs e-commerce</h2>
          <Home />
        </header>
      </ErrorBoundary>
    </div>
  );
}

export default App;
