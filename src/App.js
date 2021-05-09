import logo from './logo.svg';
import './App.css';
import PlaceHolder from './components/placeholder/PlaceHolder';
function App() {
  return (
    <div className="App">
      {[...Array(10)].map(i => 
        <PlaceHolder key={Math.random()}/>
      )}
    </div>
  );
}

export default App;
