import { SET_COIN_MARKET_DETAILS, API, FETCH_COIN_MARKET_DETAILS } from "./types";

export function fetchCoinsDetails() {
  return apiAction({
    url: "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
    onSuccess: setCoinsDetails,
    onFailure: () => console.log("Error occured loading Coins"),
    label: FETCH_COIN_MARKET_DETAILS
  });
}

function setCoinsDetails(data) {
  return {
    type: SET_COIN_MARKET_DETAILS,
    payload: data
  };
}

function apiAction({
  url = "",
  method = "GET",
  data = null,
  accessToken = null,
  onSuccess = () => { },
  onFailure = () => { },
  label = "",
  headersOverride = null
}) {
  return {
    type: API,
    payload: {
      url,
      method,
      data,
      accessToken,
      onSuccess,
      onFailure,
      label,
      headersOverride
    }
  };
}
