//import logo from './logo.svg';
import './App.css';
import fullName from './components/profile/fullName';
import profilephoto from './components/profile/profilephoto';
import adresse from './components/profile/adresse';
function App() {
  return (
    <div className="App">
      <profilephoto />
          <div>
      <fullName />
      <adresse />
    </div>
    </div>
  );
}

export default App;
