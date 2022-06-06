import { Link } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
        <Link to="/create_events">Events</Link> |{" "}
        <Link to="/contributor">Contributor</Link> 
        <Link to="/events">Events</Link> 
    </div>
  );
}

export default App;
