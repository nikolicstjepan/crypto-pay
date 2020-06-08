import * as config from "../../lib/config";

export const fetchCryptos = () =>
  new Promise((resolve, reject) =>
    setTimeout(() => resolve(config.fakeAPIAvailableCurrencies), 1000)
  );

export const fetchPromos = () =>
  new Promise((resolve, reject) => setTimeout(() => resolve(config.fakeAPIAvailablePromos), 1000));

export const fetchWalletId = ({ currency, amount, promotionOffer }) => {
  console.log({ currency, amount, promotionOffer });
  return new Promise((resolve, reject) => setTimeout(() => resolve(config.fakeAPIWalletId), 1000));
};

export const fetchTransaction = () => {
  return new Promise((resolve, reject) =>
    setTimeout(() => resolve(config.fakeAPINewTransaction), 1000)
  );
};

export const fetchTransactionStatus = (id) => {
  console.log({ id });
  return new Promise((resolve, reject) =>
    setTimeout(() => resolve(config.fakeAPIUpdatedTransaction), 1000)
  );
};
