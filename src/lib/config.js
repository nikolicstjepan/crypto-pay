export const FIATAmountToPay = 1000;
export const FIATCurrencyName = "EUR";

export const fakeAPIAvailableCurrencies = [
  { text: "BTC", rate: 8631.78, id: 0 },
  { text: "BCH", rate: 228.69, id: 1 },
  { text: "ETH", rate: 214.79, id: 2 },
  { text: "XMR", rate: 60.38, id: 3 },
];

export const fakeAPIAvailablePromos = [
  { text: "FREE SHIPPING", id: 0 },
  { text: "10% OFF NEXT ORDER", id: 1 },
];

export const fakeAPIWalletId = "0xa81fsdjka7fds2231kx09766";

export const fakeAPINewTransaction = {
  id: "0xa81fsdjka7fds2231kx09766",
  status: "Transaction pending",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...",
};

export const fakeAPIUpdatedTransaction = {
  id: "0xa81fsdjka7fds2231kx09766",
  status: "Payment successful",
  description:
    "Nullam placerat erat volutpat mollis congue. Nunc felis libero, interdum eu purus eget, posuere porttitor nisi. Suspendisse potenti. Etiam ut lectus augue.",
};

export const theme = {
  darkGray: "#3F4048",
  mediumGray: "#53545A",
  mediumGray2: "#787A81",
  gray: "#828282",
  white: "#fff",
  lightGray: "#EDEFF0",
  lightGray1: "#F9F9F9",
  lightGray2: "#D7D8DA",
  lightBlue: "#4077C1",
};
