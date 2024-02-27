
import Projetos from './containers/Projetos';
import Sobre from './containers/Sobre';
import Sidebar from './containers/sidebar';
import EstiloGlobal, { Container } from './styles';



function App() {
  return (
    <>
      < EstiloGlobal/>
      <Container>
      <Sidebar />
      <main>
        < Sobre/>
        < Projetos />
      </main>
      </Container>
    </>
  )
}

export default App;
