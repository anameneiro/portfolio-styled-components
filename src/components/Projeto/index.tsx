
import Paragrafo from "../Paragrafo";
import Titulo from "../Titulo";

import {Card, LinkBotao} from './styles'



const Projeto = () => (
    <Card>
        <Titulo>Projeto lista de tarefas</Titulo>
        <Paragrafo tipo="secundario">Lista de tarefas feita com Vuejs</Paragrafo>
        <LinkBotao>Visualizar</LinkBotao>
    </Card>
)

export default Projeto