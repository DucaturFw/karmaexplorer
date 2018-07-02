import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
//import Container from './../elements/container';

export default class Footer extends React.Component {
    render() {
        return (
            <Wrap>
                <Cont>
                    <StyledLink
                        to={'/'}
                    >
                        <Right>
                            Tokens distribution
                        </Right>
                    </StyledLink>
                    <StyledLink to={'/'}>
                        <Right>
                            Exchange
                        </Right>
                    </StyledLink>
                    <StyledLink to={'/'}>
                        <Right>
                            Contacts
                        </Right>
                    </StyledLink>
                </Cont>
            </Wrap >
        )
    }
}

const Wrap = styled.div`
    color: white;
    font-size: 16px;
    height: 100px;
    display: flex;
    justify-content: flex-end;
`;

const Cont = styled.div`
    display: flex;
    margin: 50px;
`;

const Right = styled.div`
    margin: 0 30px;
`;

const StyledLink = styled(Link)`
    color: #6987B9;
    margin: 0 20px;

    &:hover, &:active {
        color: #8BE7FF;
        text-decoration: none;
    }
`;
