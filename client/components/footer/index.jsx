import React from "react";
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
//import Container from './../elements/container';

class Footer extends React.Component {
    render() {
        const { pathname } = this.props.location;
        const isTokens = pathname === '/' || pathname.substr(0, 9) === '/holders/' ? 1 : 0;
        const isExchage = pathname === '/exchange' ? 1 : 0;

        return (
            <Wrap>
                <Cont>
                    <StyledLink
                        to={'/'}
                        active={isTokens}
                    >
                        <Right>
                            Tokens distribution
                        </Right>
                    </StyledLink>
                    <StyledLink to={'/exchange'} active={isExchage}>
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
export default withRouter(Footer);

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
    color: ${props => props.active ? '#8BE7FF' : '#6987B9'};
    margin: 0 20px;

    &:hover, &:active {
        color: #8BE7FF;
        text-decoration: none;
    }
`;
