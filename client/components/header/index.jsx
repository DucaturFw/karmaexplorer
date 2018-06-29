import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ducatur from './logo.png';

export default class Header extends React.Component {
    render() {
        return (
            <Wrap>

                <Logo>
                    <img src={ducatur} />
                </Logo>
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
    justify-content: center;
    align-items: center;

    
`;

const Logo = styled.div` 

`;
const Distribution = styled.div``;
const Exchange = styled.div` margin-left: 35px;`;
const Contacts = styled.div` margin-left: 35px;`;
