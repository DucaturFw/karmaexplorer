import React from "react";
import styled from 'styled-components';
import FA from 'react-fontawesome';
import { Link } from 'react-router-dom';
import { PieChart, Pie, Tooltip, Cell } from 'recharts';
import axios from 'axios';

import eth from './eth.png';
import eos from './eos.png';
import neo from './neo.png';
import ada from './ada.png';
import bitcoin from './bitcoin.png';

const COLORS = ["#8C8C8C", "#44C5FF", "#B8E82C", "#4561FF"];

export default class Distribution extends React.Component {

    state = {
        loading: true,
        blockchains: []
    }

    componentDidMount() {
        axios.get(`${apiHolders}/api/v1/holders`)
            .then(res => {
                this.setState({ blockchains: res.data, loading: false });
            })
    }

    onClick = (e) => {
        const location = {
            pathname: `/holders/${e.name.toLowerCase()}`
        };
        this.props.history.push(location);
    }

    get labels() {
        return this.state.blockchains.map((item, idx) => {
            return (
                <StyledLink
                    to={`/holders/${item.name.toLowerCase()}`}
                    key={idx}
                >
                    <Item>
                        <img src={item.src} />
                        <br />
                        <Label color={COLORS[idx]} />
                        <span>{item.name}</span>
                        <p>{item.tokens}</p>
                    </Item>
                </StyledLink>
            )
        })
    }

    get summ() {
        if (this.state.blockchains) {
            const summ = this.state.blockchains.reduce((sum, item) => {
                return sum + item.tokens;
            }, 0);

            return (
                <Info>
                    {summ}
                    <br />
                    TOTAL
                </Info>
            );
        }
    }

    render() {
        if (this.state.loading) {
            return (
                <Wrap>
                    <LoadingWrap>
                        <FA name="spinner" size="4x" spin />
                    </LoadingWrap>
                </Wrap>
            )
        }

        return (
            <Wrap>
                <Title>
                    <h3>DISTRIBUTION OF TOKENS</h3>
                </Title>
                <Charter>
                    {this.summ}
                    <PieChart width={250} height={250}>
                        <Pie
                            data={this.state.blockchains}
                            dataKey={"tokens"}
                            innerRadius={80}
                            labelLine={false}
                            outerRadius={120} fill="#82ca9d">
                            {
                                this.state.blockchains.map((entry, index) => <Cell
                                    key={index}
                                    fill={COLORS[index % COLORS.length]}
                                    onClick={this.onClick.bind(this, entry)}
                                />)
                            }
                        </Pie >
                        <Tooltip />
                    </PieChart>
                </Charter>
                <Tokens>
                    {this.labels}
                </Tokens>
                <Exchange >
                    <StyledLink
                        to={`/exchange`}
                    >
                        <Exchangebutton>
                            Exchange
                        </Exchangebutton>
                    </StyledLink>
                </Exchange >
            </Wrap>
        )
    }
}
const Wrap = styled.div`
    background-color: #FFFFFF;
    width: 50rem;
    border-radius: 10px;
`;

const Title = styled.div`
    border-bottom: solid rgba(40, 47, 54, 0.15);
    padding: 15px;
    margin-bottom: 20px;
    text-align: center;
`;

const Charter = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
`;

const Info = styled.div`
    position: absolute;
    top: 110px;
    text-align: center;
`;

const BTC = styled.img`
    height: 20px;
`;

const Tokens = styled.div`
    display: flex;
    justify-content: space-around;
`;

const Item = styled.div`
    text-align: center;
`;

const StyledLink = styled(Link)`
    color: #282F36;

    &:hover {
        text-decoration: none;
    }
`;

const Label = styled.span`
    display: inline-block;
    width: 12px;
    height: 12px;
    background: ${props => props.color ? props.color : 'white'};
    border-radius: 50%;
    margin-top: -3px;
    margin-right: 5px;
`;

const Exchangebutton = styled.button`
    background: #475FF2;
    border-radius: 5px;
    font-size: 18px;
    height:40px;
    width:130px;
    color: #FFFFFF;
    cursor: pointer;
    outline: none;
`;

const Exchange = styled.div`
    text-align: center;
    padding: 20px;
`;

const LoadingWrap = styled.div`
    height: 400px;
    text-align: center;
    padding-top: 200px;
`;