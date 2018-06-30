import React from "react";
import styled from 'styled-components';
import {PieChart, Pie,  Tooltip, Cell} from 'recharts';
import eth from './eth.png';
import eos from './eos.png';
import neo from './neo.png';
import ada from './ada.png';
import bitcoin from './bitcoin.png';


 export default class Distribution extends React.Component {
    render() {
        const data = [{name: 'EOS', value: 2400,color:'#FFFFFF'}, {name: 'ETH', value: 4567},
                  {name: 'NEO', value: 1398}, {name: 'ADA', value: 9800}];
                  const COLORS = ["#8C8C8C","44C5FF","#B8E82C","#4561FF"];
                  
        return (
            <Wrap>

          <Title>
          <h3>DISTRIBUTION OF TOKENS</h3>
              </Title>
            <Charter>
              <PieChart width={350} height={170}>
              <Pie data={data} innerRadius={50}
              label={
            <g>
                 <image xlinkHref={bitcoin} x={145} y={55} height="31px" width="10px" textAnchor="middle" fill="#666" />
                <text x={170} y={70} dy={8} textAnchor="middle" fill="#282F36" fontSize="12">256.8</text>
                <text x={170} y={80} dy={8} textAnchor="middle" fill="#282F36" fontSize="12">BTC TOTAL</text>
             
            </g>
              }
              labelLine={false}
              outerRadius={80} fill="#82ca9d">
              {
          	data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
          }
          </Pie >
              <Tooltip /> 
              </PieChart>
         </Charter>
 
            <Tokens>

            <Item>
            <img  src={eos}/>
            <h4>EOS </h4>
            <p>26% </p>
            </Item>

             <Item>
             <img  src={eth}/> 
             <h4>ETH </h4>
             <p>26% </p>
            </Item>

            <Item>
            <img  src={neo}/>
            <h4>NEO </h4>
            <p>26% </p>
            </Item>
           
             <Item>
             <img  src={ada}/>
             <h4>ADA </h4>
             <p>26% </p>
            </Item>

           </Tokens>
           <div>
           <Exchange >
           <Exchangebutton>
           Exchange
           </Exchangebutton>
           </Exchange >
            </div>
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
const Container = styled.div`
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

const Charter = styled.div`
display:flex;
flex-direction:row;
align-items: flex-start;
justify-content: center;
flex: 1 auto;
order: 1

`;
const Tokens =styled.div`
display: flex;
justify-content: space-around;

`;
const Item = styled.div`
display:flex-inline;

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
height:40px;
width:130px;
color: #FFFFFF;
`;
const Exchange = styled.div`
display: flex;
justify-content: center;
`;