import React from "react";

import styled from 'styled-components';
import Container from './../elements/container';

 export default class Footer extends React.Component {
    render() {
        return (
            <Wrap>
                <Container>
                <Karma> Karma Exhange </Karma>
                    <Inner>
                 
                        <Distribution>
                            Tokens distribution
                        </Distribution>
                        <Exchange>
                            Exchange
                        </Exchange>
                        <Contacts>
                            Contacts
                        </Contacts>
                    </Inner>
                </Container>
            </Wrap>
        )
    }
}



const Wrap = styled.div`
    background-color: #0D1539;
    color: white;
    font-size: 16px;
    height: 100px;
`;

const Inner = styled.div`
    display: flex;
    flex-direction:row;
    justify-content: flex-end;
    align-items: center;   
`;



const Karma = styled.div`float:left;`;
const Distribution= styled.div``;
const Exchange = styled.div` margin-left: 35px;`;
const Contacts = styled.div` margin-left: 35px;`;

