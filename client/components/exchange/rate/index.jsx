import React from "react";
import styled from 'styled-components';
import { eosExchange } from './../../../models/eosWallet';
import addressValidator from 'wallet-address-validator';

// console.log(addressValidator);

import eth from './eth.png';
import eos from './eos.png';
import row from './row.png';

export default class Rate extends React.Component {

    state = {
        value: '1.0000',
        address: '',
        valueError: false,
        addressError: true,
    }

    handleInput = e => {
        const name = e.target.name;
        const value = e.target.value;

        this.setState(state => ({
            ...state,
            [name]: value
        }), this.validate);
    }

    handleMake = e => {
        if (this.isValid()) {
            if (this.props.from === 'eos') {
                this.makeEOS();
            }
        }
    }

    validate() {
        this.validateNumber();
        this.validateAddress();
    }

    validateNumber() {
        const num = new Number(this.state.value);

        if (!isNaN(num)) {
            this.setState({ value: num.toFixed(4), valueError: false });
        } else {
            this.setState({ valueError: true });
        }
    }

    validateAddress() {
        if (this.props.to === 'eth') {
            const isValid = addressValidator.validate(this.state.address, 'eth');

            console.log(isValid);
            this.setState({ addressError: !isValid })
        }
    }

    makeEOS() {
        eosExchange({
            quantity: "1.0000 DUCAT",
            blockchain: "eth",
            to: "0x000000000"
        })
    }

    isValid() {
        return !(this.state.valueError || this.state.addressError);
    }

    getItem(name) {
        let src;
        switch (this.props[name]) {
            case 'eth':
                src = eth;
                break;
            case 'eos':
                src = eos;
                break;
        }

        return <Logo src={src} />
    }

    render() {
        console.log(this.isValid());
        return (
            <Wrap>
                <Title>
                    <h3>Ducatur exchange</h3>
                </Title>
                <Tokens>
                    <Item>
                        {this.getItem('from')}
                        <InputValue
                            value={this.state.value}
                            name="value"
                            onChange={this.handleInput}
                            isValid={!this.state.valueError}
                        />
                    </Item>
                    <Row>
                        <img src={row} />
                    </Row>
                    <Item>
                        {this.getItem('to')}
                    </Item>
                </Tokens>
                <ReceiveAddress>
                    <TitleReceive>Receive ETH address</TitleReceive>
                    <InputAddress
                        value={this.state.address}
                        name="address"
                        onChange={this.handleInput}
                        isValid={!this.state.addressError}
                    />
                </ReceiveAddress>
                <StartExchange>
                    <Exchangebutton
                        onClick={this.handleMake}
                        isValid={this.isValid()}
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
    background: ${props => props.isValid ? '#475FF2' : '#eee'};
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
    width: 10rem;
    height: 3rem;
    mix-blend-mode: normal;
    /* opacity: 0.5; */
    border: 2px solid ${props => props.isValid ? '#9B9B9B' : 'red'};
    box-sizing: border-box;
    border-radius: 9px;
    text-align: center;
    outline: none;
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
    width: 30rem;
    height: 3rem;
    text-align: center;
    mix-blend-mode: normal;
    /* opacity: 0.3; */
    border: 2px solid ${props => props.isValid ? '#9B9B9B' : 'red'};
    box-sizing: border-box;
    border-radius: 9px;
    outline: none;
`;