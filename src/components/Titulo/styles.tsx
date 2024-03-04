import styled from "styled-components";

import { Props } from ".";

export const Titulo= styled.h3<Props>`
    color: ${(props) => props.theme.corDaBorda};;
    font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')} ;
    font-weight: 700;
    margin-bottom: 16px;
`;