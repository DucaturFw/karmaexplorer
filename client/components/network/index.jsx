
import React from "react";
import styled from 'styled-components';
import {PieChart, Pie,  Tooltip,Cell} from 'recharts';
import eos from './eos.png';


 export default class Network extends React.Component {
    render() {
        const data = [{name: 'addres1', value: 2400}, {name: 'addres2', value: 4567},
                  {name: 'addres3', value: 1398}, {name: 'addres4', value: 9800},
                   {name: 'addres5', value: 9800}];
                   const COLORS = ["#8C8C8C","44C5FF","#B8E82C","#8C8C8C","#8C8C8C"];
        return (
            <Wrap>

          <Title>
          <h3>EOS NETWORK HOLDERS</h3>
              </Title>
              <Holders>
            <Charter>
              <PieChart width={350} height={170}>
              <Pie data={data} innerRadius={50} outerRadius={80} fill="#82ca9d"
              label={
               <g>
                 <image xlinkHref={eos} x={145} y={55} height="31px" width="10px" textAnchor="middle" fill="#666" />
                <text x={170} y={70} dy={8} textAnchor="middle" fill="#282F36" fontSize="12">15746</text>
                <text x={170} y={80} dy={8} textAnchor="middle" fill="#282F36" fontSize="12">EOS TOTAL</text>
             
            </g>
              }
              labelLine={false}
              >
               {
          	data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
          }
              <Tooltip /> 
              </Pie>
              </PieChart>
         </Charter>
         <HoldersTable>
             dfgdf
             </HoldersTable>
</Holders>
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
const Holders = styled.div`
display:flex;
flex-direction:row;
align-items: center;
justify-content: space-around;
`;
const HoldersTable = styled.div`
background:red;
`
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

`;

