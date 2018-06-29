
import React from "react";
import styled from 'styled-components';
import {PieChart, Pie,  Tooltip} from 'recharts';
//import eos from './eos.png';


 export default class Network extends React.Component {
    render() {
        const data02 = [{name: 'EOS', value: 2400,color:'#FFFFFF'}, {name: 'ETH', value: 4567},
                  {name: 'NEO', value: 1398}, {name: 'ADA', value: 9800}];
                  
        return (
            <Wrap>

          <Title>
          <h3>EOS NETWORK HOLDERS</h3>
              </Title>
              <Holders>
            <Charter>
              <PieChart width={350} height={170}>
              <Pie data={data02} innerRadius={50} outerRadius={80} fill="#82ca9d"/>
              <Tooltip /> 
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
