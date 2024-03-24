
import Paragrafo from "../Paragrafo";
import Titulo from "../Titulo";

import {Card, LinkBotao} from './styles'

type Props = {
    titulo: string
    paragrafo: string
    linkgithub: string
    linkhospedagem: string
}

const Projeto = ({titulo, paragrafo, linkgithub, linkhospedagem}: Props) => (
    <Card>
        <Titulo>{titulo}</Titulo>
        <Paragrafo tipo="secundario">{paragrafo}</Paragrafo>
        <LinkBotao href={linkgithub} target="blank">Repositório</LinkBotao> <LinkBotao href={linkhospedagem} target="blank">Deploy</LinkBotao>
    </Card>
)

export default Projeto