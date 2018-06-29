import React from "react";
import styled from 'styled-components';
import eth from './eth.png';
import eos from './eos.png';
import row from './row.png';


export default class Exchange extends React.Component {
    render() {


        return (
            <Wrap>

                <Title>
                    <h3>KARMA EXCHANGE</h3>
                </Title>
                <Tokens>
                    <Item>
                        <Logo src={eos} />
                        <Nametoken>EOS </Nametoken>

                    </Item>
                    <Row>
                        <img src={row} />

                    </Row>

                    <Item>
                        <Logo src={eth} />
                        <Nametoken>ETH </Nametoken>
                    </Item>
                </Tokens>
                <StartExchange>
                    <Exchangebutton >
                        Start Exchange
                </Exchangebutton >
                </StartExchange>
            </Wrap>
        )
    }
}



const Wrap = styled.div`
    background-color: #FFFFFF;
    width:50rem;
    height:30rem;
    display: flex-inline;
    border-radius: 10px;
    flex-wrap:wrap;
`;

const Title = styled.div`
display:flex;
align-items: flex-start;
justify-content: center;
border-bottom: solid rgba(40, 47, 54, 0.15);
flex: 1 auto;
height:10%;
margin-bottom:40px;

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
`;
const Nametoken = styled.h4`

`

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
font-family: Roboto;
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