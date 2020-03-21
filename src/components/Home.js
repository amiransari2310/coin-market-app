import React, { Component } from "react";
import { connect } from "react-redux";
import Coin from "./Coin";
import { fetchCoinsDetails } from "../actions";

class Home extends Component {
    state = {};
    componentDidMount() {
        this.props.fetchCoinsDetails();
    }
    render() {
        const { data: { data: coinsList = [] } = {} } = this.props;
        const coinsListView = coinsList.map((i, index) => {
            return <Coin key={index} item={i} />
        });
        return (
            <React.Fragment>
                {this.props.isLoadingData ? (
                    'Loading . . .'
                ) : (coinsListView)}
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
)(Home);
