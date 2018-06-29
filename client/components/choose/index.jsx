import React from "react";
import styled from 'styled-components';
import eth from './eth.png';
import eos from './eos.png';
import neo from './neo.png';
import ada from './ada.png';

export default class Choose extends React.Component {
    render() {


        return (
            <Wrap>

                <Title>
                    <h3>CHOOSE TOKEN</h3>
                </Title>
                <Tokens>
                    <Item>
                        <Logo src={eos} />
                        <Nametoken>EOS </Nametoken>

                    </Item>

                    <Item>
                        <Logo src={eth} />
                        <Nametoken>ETH </Nametoken>
                    </Item>
                    <Item>
                        <Logo src={neo} />
                        <Nametoken>NEO </Nametoken>
                    </Item>
                    <Item>
                        <Logo src={ada} />
                        <Nametoken>ADA </Nametoken>
                    </Item>
                </Tokens>
            </Wrap>
        )
    }
}



const Wrap = styled.div`
    background-color: #FFFFFF;
    width:50rem;
    height:25rem;
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
