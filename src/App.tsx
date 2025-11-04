import './App.css'
import CharacterCounter from './components/CharacterCounter';
import StatsDisplay from './components/StatsDisplay';
import TextInput from './components/TextInput';


function App(){


  return(
    <div>
      <h1>Character Counter App</h1>

      <TextInput />
      <StatsDisplay/>
      <CharacterCounter/>
    </div>
  );
}

export default App;