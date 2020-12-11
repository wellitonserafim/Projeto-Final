import './App.css';
import Musica from './components/Modelos/Musica'
import Compositor from './components/Modelos/Compositor'
import Album from './components/Modelos/Album'
import { Container, Accordion, AccordionDetails, Grid, Card } from '@material-ui/core'

function App() {
  return (

    <Container maxWidth="sm">
      <Card variant="outlined">
        <Compositor></Compositor>
      </Card>
      <Card variant="outlined">
        <Album></Album>
      </Card>
      <Card variant="outlined">
        <Musica></Musica>
      </Card>
    </Container>

  );
}

export default App;
