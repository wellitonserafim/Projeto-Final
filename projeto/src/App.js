import './App.css';
import Musica from './components/Modelos/Musica'
import Compositor from './components/Modelos/Compositor'
import Album from './components/Modelos/Album'
import { Container, Paper } from '@material-ui/core'

function App() {
  return (
    
    <Container maxWidth="sm">
      <Paper elevation={3} />
    <Compositor></Compositor>
    <Album></Album>
    <Musica></Musica>
    <Paper />
    </Container>
 
  );
}

export default App;
