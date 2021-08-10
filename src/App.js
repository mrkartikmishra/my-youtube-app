import './App.css';
import MainContent from './MainContent';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="App">
      
      <Navbar />
      <div className="app__mainPage">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
