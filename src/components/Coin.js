import React from "react";
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import styled from "styled-components";

const StyledArticle = styled.div`
  h1 {
    font-weight: 700;
    font-size: 36px;
    color: #000000;
    margin: 0;
  }
  h4 {
    font-weight: 700;
    font-size: 20px;
    color: #000000;
  }
  p {
    font-weight: 300;
    font-size: 18px;
    color: #4a4a4a;
  }
`;

const Coin = ({
  item = {}
}) => {
  const {
    symbol = '',
    slug = '',
    num_market_pairs = 0,
    date_added = '',
    tags = [],
    max_supply = 0,
    circulating_supply = 0,
    total_supply = 0,
    cmc_rank = 0,
    id = ''
  } = item;
  return (
    <StyledArticle>
      <h1>{item.name}</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Slug</th>
            <th>Market Pairs</th>
            <th>Date</th>
            <th>Tags</th>
            <th>Maximum Supply</th>
            <th>Circulating Supply</th>
            <th>Total Supply</th>
            <th>CMC Rank</th>
            <th>Platform</th>
            <th>Quote</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{symbol}</td>
            <td>{slug}</td>
            <td>{num_market_pairs}</td>
            <td>{date_added}</td>
            <td>{tags.length ? tags.toString() : 'NA'}</td>
            <td>{max_supply || 0}</td>
            <td>{circulating_supply}</td>
            <td>{total_supply}</td>
            <td>{cmc_rank}</td>
            <td>{<Link to={`/platform/${id}`}>View Platform</Link>}</td>
            <td>{<Link to={`/quote/${id}`}>Get Quote</Link>}</td>
          </tr>
        </tbody>
      </Table>
    </StyledArticle>
  );
};

export default Coin;
