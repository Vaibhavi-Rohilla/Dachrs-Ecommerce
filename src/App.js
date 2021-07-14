import './App.scss';
import ErrorBoundary from './ErrorBoundary';
import Home from './pages/Home/Home';

function App() {
  return (
    <div >
      <ErrorBoundary>
        <header >
          <h2>Hello Dachrs e-commerce portal</h2>
          <Home />
        </header>
      </ErrorBoundary>
    </div>
  );
}

export default App;
