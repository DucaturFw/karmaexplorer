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
                    <StyledLink
                        to={'/'}
                    >
                        Tokens distribution
                    </StyledLink>
                    <StyledLink
                        to={'/'}
                    >
                        Exchange
                    </StyledLink>
                    <StyledLink
                        to={'/'}
                    >
                        Contacts
                    </StyledLink>
                </Inner>
                <Menu>
                </Menu>
            </Wrap>
        )
    }
}



const Wrap = styled.div`
    color: white;
    font-size: 16px;
    height: 100px;
    display: flex;
`;

const Inner = styled.div`
    flex: 1 0;
    display: flex;
    flex-direction:row;
    justify-content: center;
    align-items: center;
`;

const Logo = styled.div` 
    padding: 20px 50px;
    flex: 0 0 250px;
`;
const Menu = styled.div`
    flex: 0 0 250px;
`;
const StyledLink = styled(Link)`
    color: #6987B9;
    margin: 0 20px;

    &:hover, &:active {
        color: #8BE7FF;
        text-decoration: none;
    }
`;
