import React from "react";
import styled from 'styled-components';
import { Input } from 'semantic-ui-react'



export default class Pending extends React.Component {
    render() {


        return (
            <Wrap>

                <Title>
                    <h3>ORDER ID: 123456789</h3>
                </Title>
                
            </Wrap>
        )
    }
}



const Wrap = styled.div`
    background-color: #FFFFFF;
    width:45rem;
    height:40rem;
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
`;
const Nametoken = styled.h4`

`

