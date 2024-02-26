import styled from "styled-components";

type BotaoProps = { // para tornar algum deles opcional, basta colocar uma ? na frente
    principal: boolean;
    fontSize?: string
}

const Botao = styled.button<BotaoProps>`
    background-color:${props => props.principal ? 'green' : 'blue'};
    font-size: ${(props) => props.fontSize || '16px'};
    cursor: pointer;
    margin: 30px;
`

const BotaoPerigo = styled(Botao)`
    background-color: red;
    color: #fff;
    padding: 10px;

    span{
        text-decoration: line-through;
    }
`

function Teste() {
    return (
        <>
            <Botao principal>Clique aqui</Botao>
            <Botao fontSize="14px" principal={false}>Cancelar</Botao>
            <BotaoPerigo as="a" principal>
                <span>Não clique aqui</span>
            </BotaoPerigo>
        </>
    )
}

export default Teste