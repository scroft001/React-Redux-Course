import './App.css';
import ProfileCard from './ProfileCard'
import cortana from '../src/images/cortana.png'
import alexa from '../src/images/alexa.png'
import siri from '../src/images/siri.png'

function App() {
  return (
    <div>
      <h1>Personal Assistant Devices</h1>
      <div className="App">
        <ProfileCard image={cortana} name="Cortana" handle="@cortana919" desc="Personal assistant by Microsoft" />
        <ProfileCard image={alexa} name="Alexa" handle="@alexa682" desc="Can order things from Amazon" />
        <ProfileCard image={siri} name="Siri" handle="@heysiri" desc="Can set one timer at a time" />
      </div>
      
    </div>
  );
}

export default App;
