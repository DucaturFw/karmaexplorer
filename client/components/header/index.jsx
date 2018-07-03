import React from "react";
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import ducatur from './logo.png';

class Header extends React.Component {
    render() {
        const { pathname } = this.props.location;
        const isTokens = pathname === '/' || pathname.substr(0, 9) === '/holders/' ? 1 : 0;
        const isExchage = pathname === '/exchange' ? 1 : 0;

        return (
            <Wrap>
                <Logo>
                    <img src={ducatur} />
                </Logo>
                <Inner>
                    <StyledLink
                        to={'/'}
                        active={isTokens}
                    >
                        Tokens distribution
                    </StyledLink>
                    <StyledLink
                        to={'/exchange'}
                        active={isExchage}
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
export default withRouter(Header);

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
    color: ${props => props.active ? '#8BE7FF' : '#6987B9'};
    margin: 0 20px;

    &:hover, &:active {
        color: #8BE7FF;
        text-decoration: none;
    }
`;
