import Profile from './Component/Profile/Profile.js';
import imge from "../src/pic.jpg"
import './App.css';

function App() {
  return (
    <div className="App">
      <Profile fullName="Nidhal Rebhi" bio="master degree in cyber security and I am a student in Gomycode" profession="I am junior as cyber security and a web developer" imge={imge} />

  
    </div>
  );
}

export default App;
