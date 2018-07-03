import React from "react";
import styled from 'styled-components';
import eth from './eth.png';
import eos from './eos.png';
import row from './row.png';

import Choose from './choose';
import Rate from './rate';

const blockList = ['eos', 'eth']

export default class Exchange extends React.Component {
    state = {
        from: 'eos',
        to: 'eth',
        step: 0,
    }

    onSelect = field => {
        this.setState(state => ({
            ...state,
            field,
            step: 1,
        }));
    }

    onChoose = e => {
        console.log(e);
        this.setState(state => ({
            ...state,
            [e.field]: e.value,
            field: null,
            step: 0,
        }));
    }

    getItem(name) {
        let src;
        switch (this.state[name]) {
            case 'eos':
                src = eos;
                break;
            case 'eth':
                src = eth;
                break;
        }

        return (
            <Item
                onClick={this.onSelect.bind(this, name)}
            >
                <Logo src={src} />
                <Nametoken>{name.toUpperCase()}</Nametoken>
            </Item>
        );
    }

    startExchange = e => {
        this.setState(state => ({
            ...state,
            step: 2,
        }))
    }

    get isReady() {
        return this.state.from !== this.state.to;
    }

    render() {
        if (this.state.step === 1) {
            return <Choose
                list={blockList}
                onChoose={this.onChoose}
                field={this.state.field}
            />
        }

        if (this.state.step === 2) {
            return <Rate
                from={this.state.from}
                to={this.state.to}
            />
        }

        return (
            <Wrap>
                <Title>
                    <h3>DUCAT Exchange</h3>
                </Title>
                <Tokens>
                    {this.getItem('from')}
                    <Row>
                        <img src={row} />
                    </Row>
                    {this.getItem('to')}
                </Tokens>
                <StartExchange>
                    {this.isReady && (
                        <Exchangebutton
                            onClick={this.startExchange}
                        >
                            Start Exchange
                        </Exchangebutton >
                    )}
                </StartExchange>
            </Wrap>
        )
    }
}

const Wrap = styled.div`
    background-color: #FFFFFF;
    width:50rem;
    height:30rem;
    border-radius: 10px;
`;

const Title = styled.div`
    border-bottom: solid rgba(40, 47, 54, 0.15);
    margin-bottom:40px;
    text-align: center;
    padding: 15px;
`;

const Tokens = styled.div`
    display: flex;
    flex-direction:row;
    justify-content: space-around;
`;

const Item = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    border: 2px solid rgba(74, 144, 226, 0.366508);
    border-radius: 15px;
    height:15em;
    width:10em;
    cursor: pointer;
`;

const Nametoken = styled.h4``

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
`;

const Exchangebutton = styled.button`
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    background: #475FF2;
    box-shadow: 0px 5px 10px rgba(163, 171, 186, 0.2);
    border-radius: 5px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    font-size: 18px;
    height:3em;
    width:10em;
    color: #FFFFFF;
`;

const StartExchange = styled.div`
    display: flex;
    justify-content: center;
`;