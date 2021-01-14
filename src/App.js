
import './App.css';
import Sidebar from './components/Sidebar';
import Trends from './components/Trends';
import Tweet from './components/Tweet';

function App() {
  return (
    <div className="twitter">

     <Sidebar/>
     <Tweet/>
     <Trends/>
    </div>
  );
}

export default App;
