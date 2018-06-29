import React from "react";
import styled from 'styled-components';
import { Input } from 'semantic-ui-react'
import eth from './eth.png';
import eos from './eos.png';
import row from './row.png';


export default class Rate extends React.Component {
    render() {


        return (
            <Wrap>

                <Title>
                    <h3>RATE 1 EOS = 0.01766 ETH</h3>
                </Title>
                <Tokens>
                    <Item>
                        <Logo src={eos} />
                        <InputValue value={50} />
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
                    <InputAddress value="0xe4120edcd457d7E4b9a31B0aaA91147c403dAEDa" />
                </ReceiveAddress>

                <StartExchange>
                    <Exchangebutton >
                        Make Transaction
                </Exchangebutton >
                </StartExchange>
            </Wrap>
        )
    }
}



const Wrap = styled.div`
    background-color: #FFFFFF;
    width:45rem;
    height:30rem;
    display: flex-inline;
    border-radius: 10px;
    flex-wrap:wrap;
`;

const Title = styled.div`
display:flex;
align-items: flex-start;
justify-content: space-around;
border-bottom: solid rgba(40, 47, 54, 0.15);
flex: 1 auto;
height:10%;
margin-bottom:1em;

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
// const Nametoken = styled.h4`

// `

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
font-family: Roboto;
font-style: normal;
font-weight: 500;
line-height: normal;
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
font-family: Roboto;
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
`