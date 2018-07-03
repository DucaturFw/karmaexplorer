import React from "react";
import styled from 'styled-components';
import eth from './eth.png';
import eos from './eos.png';
import neo from './neo.png';
import ada from './ada.png';

export default class Choose extends React.Component {

    get tokens() {
        const { list, field, onChoose } = this.props;

        return list.map((item, idx) => {
            return (
                <Item onClick={onChoose.bind(this, {
                    field, value: item
                })}
                    key={idx}>
                    <Logo src={this.getImg(item)} />
                    <Nametoken>{item.toUpperCase()}</Nametoken>
                </Item>
            )
        })
    }

    getImg(name) {
        switch (name) {
            case 'eos':
                return eos;
            case 'eth':
                return eth;
        }
    }

    render() {
        return (
            <Wrap>
                <Title>
                    <h3>CHOOSE TOKEN</h3>
                </Title>
                <Tokens>
                    {this.tokens}
                </Tokens>
            </Wrap>
        )
    }
}



const Wrap = styled.div`
    background-color: #FFFFFF;
    width:50rem;
    height:25rem;
    border-radius: 10px;
`;

const Title = styled.div`
    border-bottom: solid rgba(40, 47, 54, 0.15);
    margin-bottom:40px;
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
height:15em;
width:10em;
&:hover{
    border: 2px solid rgba(74, 144, 226, 0.366508);
    border-radius: 15px;
    }
`;

const Nametoken = styled.h4`

`
const Logo = styled.img`
height:70%;
width:70%;
`;
