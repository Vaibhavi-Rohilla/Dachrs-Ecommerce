import './App.scss';
import ErrorBoundary from './ErrorBoundary';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App-header">
      <ErrorBoundary>
        <header >
          <Home />
        </header>
      </ErrorBoundary>
    </div>
  );
}

export default App;
