import styled from "styled-components";
import { P } from "../../components/Paragrafo/styles";

export const Descricao = styled(P) `
    margin-top: 24px;
    margin-bottom: 40px;
`

export const BotaoTema = styled.button`
    border-radius: 12px;
    padding: 8px;
    color: #EEE;
    background-color: #282A35;
    cursor: pointer;
`

export const SidebarContainer = styled.div`
    position: sticky;
    top: 80px;
    left: 0;
`