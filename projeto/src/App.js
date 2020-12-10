import './App.css';
import Musica from './components/Modelos/Musica'
import Compositor from './components/Modelos/Compositor'
import Album from './components/Modelos/Album'

function App() {
  return (
    <div>
    <Compositor></Compositor>
    <Album></Album>
    <Musica></Musica>
    </div>
  );
}

export default App;
