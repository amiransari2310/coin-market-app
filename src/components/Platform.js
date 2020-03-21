import styled from "styled-components";
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCoinsDetails } from "../actions";
import { Link } from 'react-router-dom';

class Platform extends Component {
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
    const { platform = null } = record || {};
    const { id: currentId = '', name = '', symbol = '', slug = '', token_address = '' } = platform || {};

    const platformDetailsView = !platform ? <h1>{`Platform Details Not Available!!`}</h1> :
      <StyledArticle>
        <h1>{`Platform Details For: ${name}`}</h1>
        <h4>{`Id: ${currentId}`}</h4>
        <h4>{`Name: ${name}`}</h4>
        <h4>{`Symbol: ${symbol}`}</h4>
        <h4>{`Slug: ${slug}`}</h4>
        <h4>{`Token: ${token_address}`}</h4>
      </StyledArticle>;

    const contentView = (!isLoadingData ? platformDetailsView : (<div>{'Loading ....'}</div>));  
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
)(Platform);
