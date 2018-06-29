import React from "react";
import styled from 'styled-components';
import QRCode from 'qrcode.react';
import eth from './eth.png';
import eos from './eos.png';



export default class Pending extends React.Component {
    render() {


        return (
            <Wrap>

                <Title>
                    <h2>ORDER ID: 123456789</h2>
                </Title>
                 <Payment>
                     <Qr>
                <QRCode value="http://facebook.github.io/react/" />
                 </Qr>
                 <PaymentDetails>
                     <PaymentField>
                         <TitleField>Send this amount:</TitleField>
                         <PaymentCountField>
                             <p>50</p>
                             <img src={eos}/>
                             <p>EOS</p>
                         </PaymentCountField>
                     </PaymentField>
                     <PaymentField>
                     <TitleField>To this address:</TitleField>
                     <p>0xe4120edcd457d7E4b9a31B0aaA91147c403dAEDa</p>
                     </PaymentField>
                     <PaymentField>
                     </PaymentField>
                 </PaymentDetails>
                
                </Payment>
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
margin-bottom:40px;

`;

const PaymentCountField = styled.div`
display:flex;
flex-direction:row;
justify-content: flex-start;
`;

const TitleField =styled.span`
font-weight: 500;
color: rgba(40, 47, 54, 0.8);
`
const Payment = styled.div`
display: flex;
flex-direction:row;
justify-content: space-around;

`;
const Qr = styled.div`
display: flex;
flex-direction:row;
justify-content: space-around;

`;
const PaymentDetails = styled.div`
display: flex;
flex-direction:column;
justify-content: space-around;
`;
const PaymentField = styled.div`

`;
const Item = styled.div`
display:flex;
flex-direction:column;
justify-content: center;
align-items: center;
height:15em;
width:10em;
`;

