import Avatar from "../../components/Avatar"
import Paragrafo from "../../components/Paragrafo"
import Titulo from "../../components/Titulo"

import { Descricao, BotaoTema, SidebarContainer } from "./styles"

type Props = {
    trocaTema: () => void;
}

const Sidebar = (props: Props) => (
    <aside>
        <SidebarContainer>
            <Avatar/>
            <Titulo fontSize={20}> Ana Claudia </Titulo>
            <Paragrafo tipo="secundario">@anameneiro</Paragrafo>
            <Descricao tipo="principal" fontSize={12}>Desenvolvedora Front End</Descricao>
            <BotaoTema onClick={props.trocaTema}>Trocar tema</BotaoTema>
        </SidebarContainer>

    </aside>
)

export default Sidebar