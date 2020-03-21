import styled from "styled-components";
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCoinsDetails } from "../actions";
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Quote extends Component {
  state = {};
  componentDidMount() {
    this.props.fetchCoinsDetails();
  }
  render() {
    const StyledArticle = styled.div`
    h1 {
      font-weight: 700;
      font-size: 36px;
      color: #000000;
      margin: 0x;
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

    const {
      data: {
        data: coinsList = []
      } = {},
      match: {
        params: {
          id
        } = {}
      } = {},
      isLoadingData = false
    } = this.props;

    const record = coinsList.find(i => i.id === Number(id));

    const { quote, name = '' } = record || {};

    const getquoteView = (quote = {}) => {
      return Object.keys(quote).map(key => {
        const {
          price = 0,
          volume_24h = 0,
          percent_change_1h = 0,
          percent_change_24h = 0,
          percent_change_7d = 0,
          market_cap = 0
        } = quote[key];
        return <StyledArticle>
          <h1>{key}</h1>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Price</th>
                <th>Volume</th>
                <th>Percent Change 1 Hour</th>
                <th>Percent Change 24 Hours</th>
                <th>Percent Change 7 Days</th>
                <th>Market Cap</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{price}</td>
                <td>{volume_24h}</td>
                <td>{percent_change_1h}</td>
                <td>{percent_change_24h}</td>
                <td>{percent_change_7d}</td>
                <td>{market_cap}</td>
              </tr>
            </tbody>
          </Table>
        </StyledArticle>
      });
    };

    const quoteDetailsView = !quote ? <h1>{`Quote Details Not Available!!`}</h1> : getquoteView(quote);
    const quoteDetailsWrapper = <div>
      <h1>{`Quote Details For: ${name}`}</h1>
      {quoteDetailsView}
    </div>;
    const contentView = (!isLoadingData ? quoteDetailsWrapper : (<div>{'Loading ....'}</div>));

    return (
      <React.Fragment>
        <Link to={`/`}>Go Back</Link>
        {contentView}
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ data = {}, isLoadingData = false }) => ({
  data,
  isLoadingData
});

export default connect(
  mapStateToProps,
  {
    fetchCoinsDetails
  }
)(Quote);
