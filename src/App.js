//import logo from './logo.svg';
import './App.css';
import FullName from './components/profile/FullName';
import Profilephoto from './components/profile/Profilephoto';
import Adresse from './components/profile/Adresse';
function App() {
  return (
    <div className="App">
      {/* <h1>test</h1> */}
      <Profilephoto />
          <div>
      <FullName />
      <Adresse />
    </div>
    </div>
  );
}

export default App;
