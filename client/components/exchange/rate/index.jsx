import React from "react";
import styled from 'styled-components';
import { Input } from 'semantic-ui-react'
import eth from './eth.png';
import eos from './eos.png';
import row from './row.png';

export default class Rate extends React.Component {

    state = {
        value: 10,
        address: '',
    }

    handleInput = e => {
        const name = e.target.name;
        const value = e.target.value;

        this.setState(state => ({
            ...state,
            [name]: value
        }));
    }

    handleMake = e => {
        console.log('Make TX', this.props);
        console.log('state', this.state);
    }

    render() {
        return (
            <Wrap>
                <Title>
                    <h3>Ducatur exchange</h3>
                </Title>
                <Tokens>
                    <Item>
                        <Logo src={eos} />
                        <InputValue value={this.state.value} name="value" onChange={this.handleInput} />
                    </Item>
                    <Row>
                        <img src={row} />
                    </Row>
                    <Item>
                        <Logo src={eth} />
                        <p>0.883</p>
                    </Item>
                </Tokens>
                <ReceiveAddress>
                    <TitleReceive>Receive ETH address </TitleReceive>
                    <InputAddress value={this.state.address} name="address" onChange={this.handleInput} />
                </ReceiveAddress>
                <StartExchange>
                    <Exchangebutton
                        onClick={this.handleMake}
                    >
                        Make Transaction
                    </Exchangebutton >
                </StartExchange>
            </Wrap>
        )
    }
}



const Wrap = styled.div`
    background-color: #FFFFFF;
    width:50rem;
    height:35rem;
    display: flex-inline;
    border-radius: 10px;
    flex-wrap:wrap;
`;

const Title = styled.div`
    border-bottom: solid rgba(40, 47, 54, 0.15);
    margin-bottom:1em;
    padding: 15px;
    text-align: center;
`;

const Tokens = styled.div`
    display: flex;
    flex-direction:row;
    justify-content: space-around;
    align-items:center;
`;

const Item = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    height:15em;
    width:10em;
`;

const Row = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    height:15em;
    width:10em;
`;
const Logo = styled.img`
    height:70%;
    width:70%;
    margin-bottom:1em;
`;

const Exchangebutton = styled.button`
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    background: #475FF2;
    box-shadow: 0px 5px 10px rgba(163, 171, 186, 0.2);
    border-radius: 5px;
    font-size: 18px;
    height:2em;
    width:10em;
    color: #FFFFFF;
`;
const StartExchange = styled.div`
    display: flex;
    justify-content: center;
`;
const InputValue = styled.input`
    width:5rem;
    height:3rem;
    mix-blend-mode: normal;
    opacity: 0.3;
    border: 2px solid #9B9B9B;
    box-sizing: border-box;
    border-radius: 9px;
    text-align: center;
`;
const ReceiveAddress = styled.div`
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    flex: 1 auto;
    height:20%;
    margin-bottom:2rem;
`;
const TitleReceive = styled.span`
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    font-size: 24px;
    color: rgba(40, 47, 54, 0.8);
    margin-bottom:2rem;
`
const InputAddress = styled.input`
    width:25rem;
    height:3rem;
    text-align: center;
    mix-blend-mode: normal;
    opacity: 0.3;
    border: 2px solid #9B9B9B;
    box-sizing: border-box;
    border-radius: 9px;
`;